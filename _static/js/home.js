document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("is-home-wireframe-v2");

    const memberGroups = {
        active: [
            { name: "天城サリー", role: "藤間桜 役", slug: "sally" },
            { name: "相川奈央", role: "西浦そら 役", slug: "nao" },
            { name: "月城咲舞", role: "氷室みず姫 役", slug: "emma" },
            { name: "河瀬詩", role: "斎藤ニコル 役", slug: "uta" },
            { name: "麻丘真央", role: "桐生塔子 役", slug: "mao" },
            { name: "椎名桜月", role: "織原純佳 役", slug: "satsuki" },
            { name: "望月りの", role: "瀬良穂乃花 役", slug: "rino" }
        ],
        third: [
            { name: "吉沢珠璃", role: "三期生", slug: "julie" },
            { name: "黒崎ありす", role: "三期生", slug: "alice" },
            { name: "三雲遥加", role: "三期生", slug: "haruka" },
            { name: "折本美玲", role: "三期生", slug: "mirei" },
            { name: "橘茉奈", role: "三期生", slug: "mana" },
            { name: "南伊織", role: "三期生", slug: "minami" },
            { name: "北原実咲", role: "三期生", slug: "misaki" },
            { name: "桧山依子", role: "三期生", slug: "iko" }
        ],
        graduated: [
            { name: "花川芽衣", role: "斎藤ニコル 役", slug: "mei", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/mei.jpg!avatar" },
            { name: "海乃るり", role: "戸田ジュン 役", slug: "ruri", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/ruri.jpg!avatar" },
            { name: "白沢かなえ", role: "丸山あかね 役", slug: "kanae", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/kanae.jpg!avatar" },
            { name: "清井美那", role: "永峰楓 役", slug: "mina", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/mina.jpg!avatar" },
            { name: "四条月", role: "一之瀬蛍 役", slug: "luna", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/luna.jpg!avatar" },
            { name: "帆風千春", role: "佐藤麗華 役", slug: "chiharu", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/chiharu.jpg!avatar" },
            { name: "倉岡水巴", role: "河野都 役", slug: "mizuha", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/mizuha.jpg!avatar" },
            { name: "雨夜音", role: "八神叶愛 役", slug: "oto", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/oto.jpg!avatar" },
            { name: "涼花萌", role: "神木みかみ 役", slug: "moe", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/moe.jpg!avatar" },
            { name: "高辻麗", role: "東条悠希 役", slug: "urara", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/urara.jpg!avatar" },
            { name: "武田愛奈", role: "柊つぼみ 役", slug: "aina", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/aina.jpg!avatar" },
            { name: "宮瀬玲奈", role: "立川絢香 役", slug: "reina", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/reina.jpg!avatar" },
            { name: "西條和", role: "滝川みう 役", slug: "nagomi", avatar: "https://nananiji.zzzhxxx.top/assets/photo/avatar/nagomi.jpg!avatar" }
        ]
    };

    function renderMembers(groupName, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const html = memberGroups[groupName]
            .map(function (member) {
                var avatarUrl = member.avatar && member.avatar.length ? member.avatar : 'https://res.227wiki.eu.org/photo/avatar/16th/' + member.slug + '.jpg';
                return [
                    '<a class="hwv2-member-card hwv2-reveal" href="/member/' + member.slug + '">',
                    '<span class="hwv2-member-avatar"><img src="' + avatarUrl + '" alt="' + member.name + ' 头像" loading="lazy"></span>',
                    '<span class="hwv2-member-meta">',
                    '<strong>' + member.name + '</strong>',
                    '<small>' + member.role + '</small>',
                    '</span>',
                    '</a>'
                ].join("");
            })
            .join("");

        container.innerHTML = html;
    }

    renderMembers("active", "hwv2-members-active");
    renderMembers("third", "hwv2-members-third");
    renderMembers("graduated", "hwv2-members-graduated");

    const tabButtons = Array.from(document.querySelectorAll(".hwv2-tab"));
    const tabPanels = Array.from(document.querySelectorAll(".hwv2-panel"));

    function activateTab(target) {
        tabButtons.forEach(function (button) {
            const selected = button.getAttribute("data-tab-target") === target;
            button.classList.toggle("is-active", selected);
            button.setAttribute("aria-selected", selected ? "true" : "false");
            button.tabIndex = selected ? 0 : -1;
        });

        tabPanels.forEach(function (panel) {
            const visible = panel.getAttribute("data-tab-panel") === target;
            if (visible) {
                panel.hidden = false;
                panel.classList.remove("is-active");
                // Force reflow so switching tabs replays the enter transition each time.
                void panel.offsetWidth;
                panel.classList.add("is-active");
                return;
            }

            panel.classList.remove("is-active");
            panel.hidden = true;
        });
    }

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            activateTab(button.getAttribute("data-tab-target"));
        });

        button.addEventListener("keydown", function (event) {
            const currentIndex = tabButtons.indexOf(button);
            if (event.key === "ArrowRight") {
                event.preventDefault();
                const next = tabButtons[(currentIndex + 1) % tabButtons.length];
                next.focus();
                activateTab(next.getAttribute("data-tab-target"));
            }
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                const prev = tabButtons[(currentIndex - 1 + tabButtons.length) % tabButtons.length];
                prev.focus();
                activateTab(prev.getAttribute("data-tab-target"));
            }
        });
    });

    const menuButton = document.querySelector(".hwv2-menu-btn");
    const mobileNav = document.getElementById("hwv2-nav-drawer");

    if (menuButton && mobileNav) {
        const mobileNavCloseDurationMs = 280;
        let mobileNavCloseTimer = null;

        function closeMobileNav() {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "打开导航菜单");
            mobileNav.classList.remove("is-open");
            mobileNav.classList.add("is-closing");
            document.body.classList.remove("hwv2-nav-open");

            if (mobileNavCloseTimer) {
                window.clearTimeout(mobileNavCloseTimer);
            }

            mobileNavCloseTimer = window.setTimeout(function () {
                mobileNav.hidden = true;
                mobileNav.classList.remove("is-closing");
            }, mobileNavCloseDurationMs);
        }

        menuButton.addEventListener("click", function () {
            const expanded = menuButton.getAttribute("aria-expanded") === "true";
            if (expanded) {
                closeMobileNav();
                return;
            }

            menuButton.setAttribute("aria-expanded", "true");
            menuButton.setAttribute("aria-label", "关闭导航菜单");

            if (mobileNavCloseTimer) {
                window.clearTimeout(mobileNavCloseTimer);
                mobileNavCloseTimer = null;
            }

            mobileNav.hidden = false;
            mobileNav.classList.remove("is-closing");
            window.requestAnimationFrame(function () {
                mobileNav.classList.add("is-open");
            });
            document.body.classList.add("hwv2-nav-open");
        });

        mobileNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                closeMobileNav();
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && mobileNav.classList.contains("is-open")) {
                closeMobileNav();
            }
        });
    }

    const headerNode = document.querySelector(".hwv2-header");
    if (headerNode) {
        headerNode.classList.add("is-visible");
    }

    const revealNodes = Array.from(document.querySelectorAll(".hwv2-reveal, .hwv2-hero, .hwv2-members, .hwv2-blog, .hwv2-footer"));
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        revealNodes.forEach(function (node) {
            observer.observe(node);
        });
    } else {
        revealNodes.forEach(function (node) {
            node.classList.add("is-visible");
        });
    }
});
