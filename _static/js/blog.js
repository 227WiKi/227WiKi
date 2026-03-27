document.addEventListener("DOMContentLoaded", function () {
    const HEXO_API_URL = "https://blog.227wiki.eu.org/api/posts.json";
    const artistList = [
        {
            "articode": "a1",
            "artiname": "天城サリー",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/sally.jpg!avatar"
        },
        {
            "articode": "a12",
            "artiname": "河瀬詩",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/uta.jpg!avatar"
        },
        {
            "articode": "a4",
            "artiname": "西條和",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/nagomi.jpg!avatar"
        },
        {
            "articode": "a6",
            "artiname": "涼花萌",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/moe.jpg!avatar"
        },
        {
            "articode": "a13",
            "artiname": "相川奈央",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/nao.jpg!avatar"
        },
        {
            "articode": "a14",
            "artiname": "麻丘真央",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/mao.jpg!avatar"
        },
        {
            "articode": "a15",
            "artiname": "雨夜音",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/oto.jpg!avatar"
        },
        {
            "articode": "a16",
            "artiname": "清井美那",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/mina.jpg!avatar"
        },
        {
            "articode": "a17",
            "artiname": "椎名桜月",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/satsuki.jpg!avatar"
        },
        {
            "articode": "a18",
            "artiname": "四条月",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/luna.jpg!avatar"
        },
        {
            "articode": "a19",
            "artiname": "月城咲舞",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/emma.jpg!avatar"
        },
        {
            "articode": "a20",
            "artiname": "望月りの",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/rino.jpg!avatar"
        },
        {
            "articode": "a21",
            "artiname": "吉沢珠璃",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/julie.jpg!avatar"
        },
        {
            "articode": "a22",
            "artiname": "折本美玲",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/mirei.jpg!avatar"
        },
        {
            "articode": "a23",
            "artiname": "北原実咲",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/misaki.jpg!avatar"
        },
        {
            "articode": "a24",
            "artiname": "黒崎ありす",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/alice.jpg!avatar"
        },
        {
            "articode": "a25",
            "artiname": "橘茉奈",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/mana.jpg!avatar"
        },
        {
            "articode": "a26",
            "artiname": "桧山依子",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/iko.jpg!avatar"
        },
        {
            "articode": "a27",
            "artiname": "三雲遥加",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/haruka.jpg!avatar"
        },
        {
            "articode": "a28",
            "artiname": "南伊織",
            "artiimag": "https://nananiji.zzzhxxx.top/assets/photo/avatar/minami.jpg!avatar"
        }
    ];
    function getAvatar(name) {
        const member = artistList.find(function (item) {
            return item.artiname === name;
        });
        return member ? member.artiimag : "https://blog.227wiki.eu.org/img/404.png";
    }

    function getVisibleCount() {
        return window.matchMedia("(max-width: 768px)").matches ? 2 : 4;
    }

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function renderPosts(container, posts) {
        const limit = getVisibleCount();
        const html = posts
            .slice(0, limit)
            .map(function (post) {
                const avatarUrl = getAvatar(post.author);
                const thumbnailUrl = post.cover || "https://blog.227wiki.eu.org/img/404.png";
                return [
                    '<a class="hwv2-blog-card hwv2-reveal" href="' + escapeHtml(post.link) + '" target="_blank" rel="noopener noreferrer">',
                    '<div class="hwv2-blog-card-chrome">',
                    '<span class="hwv2-blog-dot"><img src="' + escapeHtml(avatarUrl) + '" alt="' + escapeHtml(post.author) + ' 头像" loading="lazy"></span>',
                    '<span class="hwv2-blog-bar">' + escapeHtml(post.author) + '</span>',
                    '</div>',
                    '<div class="hwv2-blog-cover"><img src="' + escapeHtml(thumbnailUrl) + '" alt="' + escapeHtml(post.title) + '" loading="lazy"></div>',
                    '<div class="hwv2-blog-meta">',
                    '<h3>' + escapeHtml(post.title) + '</h3>',
                    '<time>' + escapeHtml(post.date) + '</time>',
                    '</div>',
                    '</a>'
                ].join("");
            })
            .join("");
        container.innerHTML = html;
    }

    function renderFallback(container) {
        const count = getVisibleCount();
        const html = Array.from({ length: count })
            .map(function (_, idx) {
                return [
                    '<article class="hwv2-blog-card hwv2-blog-card--placeholder" aria-label="博客占位卡片">',
                    '<div class="hwv2-blog-card-chrome">',
                    '<span class="hwv2-blog-dot" aria-hidden="true"></span>',
                    '<span class="hwv2-blog-bar">更新中</span>',
                    '</div>',
                    '<div class="hwv2-blog-cover" aria-hidden="true"></div>',
                    '<div class="hwv2-blog-meta">',
                    '<h3>博客内容加载中</h3>',
                    '<time>placeholder-' + (idx + 1) + '</time>',
                    '</div>',
                    '</article>'
                ].join("");
            })
            .join("");
        container.innerHTML = html;
    }

    const container = document.getElementById("js-blog-list");
    if (!container) {
        return;
    }

    fetch(HEXO_API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load posts");
            }
            return response.json();
        })
        .then(function (posts) {
            if (!Array.isArray(posts) || posts.length === 0) {
                renderFallback(container);
                return;
            }
            renderPosts(container, posts);
        })
        .catch(function () {
            renderFallback(container);
        });

    window.addEventListener("resize", function () {
        if (container.children.length > 0 && container.querySelector(".hwv2-blog-card--placeholder")) {
            renderFallback(container);
        }
    });
});