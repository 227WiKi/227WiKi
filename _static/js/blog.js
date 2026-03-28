document.addEventListener("DOMContentLoaded", function () {
    const HEXO_API_URL = "https://blog.227wiki.eu.org/api/posts.json";
    const DEFAULT_AVATAR_URL = "https://blog.227wiki.eu.org/img/404.png";

    function resolvePostAvatar(post) {
        if (!window.AvatarMap || typeof window.AvatarMap.resolveAvatar !== "function") {
            return DEFAULT_AVATAR_URL;
        }

        var slugCandidates = [
            post.author_slug,
            post.authorSlug,
            post.authorId,
            post.category_slug,
            post.categorySlug,
            post.slug
        ];

        for (var i = 0; i < slugCandidates.length; i += 1) {
            var slug = slugCandidates[i];
            if (!slug) {
                continue;
            }

            var bySlug = window.AvatarMap.resolveAvatar({ slug: slug });
            if (bySlug) {
                return bySlug;
            }
        }

        var byName = window.AvatarMap.resolveAvatar({ name: post.author });
        return byName || DEFAULT_AVATAR_URL;
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
                const avatarUrl = resolvePostAvatar(post);
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

    var avatarReady = window.AvatarMap && typeof window.AvatarMap.loadMembers === "function"
        ? window.AvatarMap.loadMembers()
        : Promise.resolve();

    avatarReady
        .catch(function () {
            return null;
        })
        .then(function () {
            return fetch(HEXO_API_URL)
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
        });

    window.addEventListener("resize", function () {
        if (container.children.length > 0 && container.querySelector(".hwv2-blog-card--placeholder")) {
            renderFallback(container);
        }
    });
});