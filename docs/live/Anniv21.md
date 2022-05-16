---
title: Live - 22/7 Anniversary Live 2021
template: comment.html
---
# :pack-bd: 22/7 Anniversary Live 2021

=== "昼场"
    <div id="dplayer1">
    </div>
=== "夜场"
    <div id="dplayer2">
    </div>
    
=== "Making"
    <div id="dplayer3">
    </div>

<html>
<head>
    <meta name="referrer" content="never">
</head>
<body>
<script src="https://cdn.jsdelivr.net/gh/zzzhxxx/227WiKi@1.2/docs/_static/js/md5.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js"></script>

<script>
        const dp2 = new DPlayer({
        container: document.getElementById('dplayer2'),
        video: {
            quality: [
                {
                    name: '8bit',
                    url: 'https://link.zzzhxxx.top/?/227-live/Anniversary%202021/8bit/%5BSHANA%5D22%EF%BC%8F7%20ANNIVERSARY%20LIVE%202021%20-%20Night%20.mp4',
                    type: 'normal',
                },
                {
                    name: '10bit',
                    url: 'https://link.zzzhxxx.top/?/227-live/Anniversary%202021/10bit/22%EF%BC%8F7%20ANNIVERSARY%20LIVE%202021%20-%20Night%20.mkv',
                    type: 'normal',
                },
            ],
            defaultQuality: 0,
        },
        danmaku: {
            id: md5('https://link.zzzhxxx.top/?/227-live/Anniversary%202021/8bit/%5BSHANA%5D22%EF%BC%8F7%20ANNIVERSARY%20LIVE%202021%20-%20Night%20.mp4'),
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

<script>
        const dp3 = new DPlayer({
        container: document.getElementById('dplayer3'),
        video: {
            url: 'https://link.zzzhxxx.top/?/227-live/Anniversary%202021/8bit/%5BSHANA%5D22%EF%BC%8F7%20LIVE%20ANNIVERSARY%20LIVE%202021%20-%20Making%20%28BDrip%20FHD%20FLAC%29%20%281%29.mkv',
        },
        danmaku: {
            id: md5('https://link.zzzhxxx.top/?/227-live/Anniversary%202021/8bit/%5BSHANA%5D22%EF%BC%8F7%20LIVE%20ANNIVERSARY%20LIVE%202021%20-%20Making%20%28BDrip%20FHD%20FLAC%29%20%281%29.mkv'),
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
</html>