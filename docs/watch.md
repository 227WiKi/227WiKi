# 直播
!!! warning "注意"
    网络资源，与本站无关

<div id="dplayer"></div>

<html>
<head>
    <meta name="referrer" content="never">
</head>

<body>
    <script src="https://nananiji.zzzhxxx.top/js/md5.js"></script>
    <script src="https://nananiji.zzzhxxx.top/js/hls.min.js"></script>
    <script src="https://nananiji.zzzhxxx.top/js/DPlayer.min.js"></script>
    <script>
        const dp2 = new DPlayer({
        container: document.getElementById('dplayer'),
        live: true,
        danmaku: true,
        
        video: {
            url: 'https://bcovlive-a.akamaihd.net/653eddba1a7247b0ac7b6bc42c6d7453/ap-northeast-1/6160987587001/profile_0/chunklist.m3u8',
            type: 'hls',
        },
        danmaku: {
            id: md5('anniversary2022day1night'),
            api: "https://danmu.zzzhxxx.top/"
        },
        contextmenu: [
        {
            text: '227WiKi',
            link: 'https://github.com/227WiKi/227WiKi',
        },
        ]
    });
    console.log(dp.plugins.hls);
    </script>
</body>
</html>
