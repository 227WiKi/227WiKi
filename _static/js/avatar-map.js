(function () {
    "use strict";

    var AVATAR_MAP_URL = "/_static/data/members.json";
    var CACHE_KEY = "avatarMapData";
    var REQUEST_TIMEOUT_MS = 2000;

    var FALLBACK_MEMBERS = [
        { slug: "sally", name: "天城サリー", status: "active" },
        { slug: "nao", name: "相川奈央", status: "active" },
        { slug: "emma", name: "月城咲舞", status: "active" },
        { slug: "uta", name: "河瀬詩", status: "active" },
        { slug: "mao", name: "麻丘真央", status: "active" },
        { slug: "satsuki", name: "椎名桜月", status: "active" },
        { slug: "rino", name: "望月りの", status: "active" },

        { slug: "julie", name: "吉沢珠璃", status: "third" },
        { slug: "alice", name: "黒崎ありす", status: "third" },
        { slug: "haruka", name: "三雲遥加", status: "third" },
        { slug: "mirei", name: "折本美玲", status: "third" },
        { slug: "mana", name: "橘茉奈", status: "third" },
        { slug: "minami", name: "南伊織", status: "third" },
        { slug: "misaki", name: "北原実咲", status: "third" },
        { slug: "iko", name: "桧山依子", status: "third" },

        { slug: "mei", name: "花川芽衣", status: "graduated" },
        { slug: "ruri", name: "海乃るり", status: "graduated" },
        { slug: "kanae", name: "白沢かなえ", status: "graduated" },
        { slug: "mina", name: "清井美那", status: "graduated" },
        { slug: "luna", name: "四条月", status: "graduated" },
        { slug: "chiharu", name: "帆風千春", status: "graduated" },
        { slug: "mizuha", name: "倉岡水巴", status: "graduated" },
        { slug: "oto", name: "雨夜音", status: "graduated" },
        { slug: "moe", name: "涼花萌", status: "graduated" },
        { slug: "urara", name: "高辻麗", status: "graduated" },
        { slug: "aina", name: "武田愛奈", status: "graduated" },
        { slug: "reina", name: "宮瀬玲奈", status: "graduated" },
        { slug: "nagomi", name: "西條和", status: "graduated" }
    ];

    var inMemoryMembers = null;
    var inMemoryIndex = null;

    function normalizeText(value) {
        if (value === null || value === undefined) {
            return "";
        }

        var text = String(value);
        if (typeof text.normalize === "function") {
            text = text.normalize("NFKC");
        }

        return text.replace(/[\s\u3000]+/g, "").toLowerCase();
    }

    function normalizeMember(rawMember) {
        if (!rawMember || !rawMember.slug || !rawMember.name || !rawMember.status) {
            return null;
        }

        var aliases = Array.isArray(rawMember.aliases) ? rawMember.aliases.slice() : [];
        return {
            slug: String(rawMember.slug),
            name: String(rawMember.name),
            status: String(rawMember.status),
            avatar: rawMember.avatar ? String(rawMember.avatar) : "",
            aliases: aliases.map(function (alias) {
                return String(alias);
            })
        };
    }

    function buildIndex(members) {
        var slugMap = Object.create(null);
        var nameMap = Object.create(null);

        members.forEach(function (member) {
            slugMap[member.slug] = member;

            var keys = [member.name].concat(member.aliases || []);
            keys.forEach(function (key) {
                var normalized = normalizeText(key);
                if (normalized && !nameMap[normalized]) {
                    nameMap[normalized] = member;
                }
            });
        });

        return {
            bySlug: slugMap,
            byName: nameMap
        };
    }

    function getAvatarUrlByRule(status, slug) {
        if (!status || !slug) {
            return "";
        }

        if (status === "graduated") {
            return "https://nananiji.zzzhxxx.top/assets/photo/avatar/" + slug + ".jpg!avatar";
        }

        return "https://res.227wiki.eu.org/photo/avatar/16th/" + slug + ".jpg";
    }

    function getAvatarUrl(member) {
        if (!member) {
            return "";
        }

        if (member.avatar) {
            return member.avatar;
        }

        return getAvatarUrlByRule(member.status, member.slug);
    }

    function getFallbackMembers() {
        return FALLBACK_MEMBERS.map(function (member) {
            return normalizeMember(member);
        }).filter(Boolean);
    }

    function setMembers(members) {
        inMemoryMembers = members;
        inMemoryIndex = buildIndex(members);
    }

    function readCachedMembers() {
        try {
            var cached = window.sessionStorage.getItem(CACHE_KEY);
            if (!cached) {
                return null;
            }

            var parsed = JSON.parse(cached);
            if (!parsed || !Array.isArray(parsed.members)) {
                return null;
            }

            var members = parsed.members.map(normalizeMember).filter(Boolean);
            return members.length ? members : null;
        } catch (error) {
            return null;
        }
    }

    function writeCachedMembers(members) {
        try {
            window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({ members: members }));
        } catch (error) {
            // Ignore cache write errors.
        }
    }

    function fetchMembers() {
        var controller = typeof AbortController !== "undefined" ? new AbortController() : null;
        var timeoutId = window.setTimeout(function () {
            if (controller) {
                controller.abort();
            }
        }, REQUEST_TIMEOUT_MS);

        return fetch(AVATAR_MAP_URL, {
            method: "GET",
            credentials: "same-origin",
            signal: controller ? controller.signal : undefined
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Avatar map request failed");
                }
                return response.json();
            })
            .then(function (data) {
                var members = Array.isArray(data && data.members)
                    ? data.members.map(normalizeMember).filter(Boolean)
                    : [];

                if (!members.length) {
                    throw new Error("Avatar map is empty");
                }

                return members;
            })
            .finally(function () {
                window.clearTimeout(timeoutId);
            });
    }

    function loadMembers() {
        if (inMemoryMembers && inMemoryMembers.length) {
            return Promise.resolve(inMemoryMembers);
        }

        var cachedMembers = readCachedMembers();
        if (cachedMembers && cachedMembers.length) {
            setMembers(cachedMembers);
            return Promise.resolve(cachedMembers);
        }

        return fetchMembers()
            .then(function (members) {
                setMembers(members);
                writeCachedMembers(members);
                return members;
            })
            .catch(function () {
                var fallbackMembers = getFallbackMembers();
                setMembers(fallbackMembers);
                return fallbackMembers;
            });
    }

    function getMemberBySlug(slug) {
        if (!inMemoryIndex || !slug) {
            return null;
        }

        return inMemoryIndex.bySlug[String(slug)] || null;
    }

    function getMemberByName(name) {
        if (!inMemoryIndex || !name) {
            return null;
        }

        var key = normalizeText(name);
        if (!key) {
            return null;
        }

        return inMemoryIndex.byName[key] || null;
    }

    function resolveMember(options) {
        options = options || {};

        var bySlug = getMemberBySlug(options.slug);
        if (bySlug) {
            return bySlug;
        }

        var byName = getMemberByName(options.name);
        if (byName) {
            return byName;
        }

        if (options.slug && options.status) {
            return {
                slug: String(options.slug),
                name: String(options.name || ""),
                status: String(options.status),
                avatar: "",
                aliases: []
            };
        }

        return null;
    }

    function resolveAvatar(options) {
        var member = resolveMember(options);
        return getAvatarUrl(member);
    }

    window.AvatarMap = {
        loadMembers: loadMembers,
        normalizeText: normalizeText,
        getMemberBySlug: getMemberBySlug,
        getMemberByName: getMemberByName,
        resolveMember: resolveMember,
        resolveAvatar: resolveAvatar,
        getAvatarUrl: getAvatarUrl
    };
})();
