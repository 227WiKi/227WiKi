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
        const member = artistList.find(item => item.artiname === name);
        return member.artiimag;
    }
    const container = document.getElementById('js-blog-list');
    if (!container)
        return;
    fetch(HEXO_API_URL)
        .then(response => response.json())
        .then(posts => {
            let html = "";
            posts.forEach(post => {
                const avatarUrl = getAvatar(post.author);
                const thumbnailUrl = post.cover || "https://blog.227wiki.eu.org/img/404.png";
                html += `<a class="index_blog_entry" href="${post.link}" target="_blank">
                            <span class="index_blog_entry_icon"><img src="${avatarUrl}" alt="${post.author}"></span>
                            <p class="index_blog_entry_name">${post.author}</p>
                            <div class="index_blog_entry_img"><img src="${thumbnailUrl}" loading="lazy"></div>
                            <h3 class="index_blog_entry_title">${post.title}</h3>
                            <span class="index_blog_entry_date">${post.date}</span>
                        </a>`;
            });
            container.innerHTML = html;
            console.log("BLOG LOAD SUCCESSFULLY");
        })
        .catch(err => {
            console.log("Load blog failed: ", err);
            container.innerHTML = '<p style="text-align:center;">Loading Error</p>';
        });
});