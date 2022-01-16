---
title: Live - Anniversary 2020
---
[若视频无法显示点我刷新]('/live/Anniv20/'){ .md-button .md-button--primary }

# 分流

[:pack-ali: 阿里云盘](https://www.aliyundrive.com/s/ST53qeMmcpn){ .md-button .md-button--primary } 

<html>
<head>
    <meta name="referrer" content="never">
</head>

<body>
    <div id="dplayer">
    </div>
    <script src="https://cdn.jsdelivr.net/gh/zzzhxxx/227WiKi@1.2/docs/_static/js/md5.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js"></script>
    <script>
        const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: 'https://link.zzzhxxx.top/?/227-live/%E6%98%BC%E5%85%AC%E6%BC%944200.mp4',
        },
        danmaku: {
            id: md5('https://link.zzzhxxx.top/?/227-live/%E6%98%BC%E5%85%AC%E6%BC%944200.mp4'),
            api: "https://danmu.zzzhxxx.top/"
        },
        contextmenu: [
        {
            text: '227WiKi',
            link: 'https://github.com/zzzhxxx/227WiKi',
        },
        ]
    });
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
    <script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
    <div id="gitalk-container">
    </div>
    <script>
        const gitalk = new Gitalk({
        clientID: '7e9598e22806d98d5dee',
        clientSecret: '37c92fedcac2fdef30afff4c089ca66509d12c58',
        repo: '227WiKi',
        owner: 'zzzhxxx',
        admin: ['zzzhxxx'],
        id: md5('anniversary2020-Live'),      // Ensure uniqueness and length less than 50
        number: 17,
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
        gitalk.render('gitalk-container')
    </script>
</body>
</html>