# 227WiKi 旧链接检查报告

检查日期：2026-10-12。检查旧域名 `nananiji.zzzhxxx.top`。

`227wiki-astro` 未发现该旧域名，本次修改旧版 MkDocs 项目 `227WiKi`。

原始扫描：303 个不同链接、841 处引用。修改 134 个源文件。

已替换：新资源站返回 HTTP 200 且类型为图片的资源；仓库中存在的同名静态资源；仓库中已有的播放器 CSS/JS。毕业成员头像生成规则改为 `/photo/avatar/graduated/<slug>.jpg`，移除旧 CDN 的 `!avatar` 后缀。

以下 109 个不同链接仍保留原地址，涉及 251 处引用。没有用未经验证的地址替换。

## R2 核对结果

通过已登录的 Cloudflare 控制台只读列举 `227wiki` 桶的 `photo/`、`assets/` 和 `signature/` 对象。确认公开域名 `res.227wiki.eu.org` 已启用。对象列表包含 278 个 photo 条目、52 个 assets 条目和 1 个 signature 条目（包括空目录占位对象）。

本轮另确认并替换 10 个旧链接（10 处引用）：5 个签名保留 `assets/` 前缀；サリー二专、十一单、十单使用 `.webp`；かなえ九单第一版使用 `9th.jpg`、一单使用 `kanae-1st.webp`。10 个公开地址均以 GET 验证返回 HTTP 200 和图片类型。

同步修正 `227wiki-astro/src/content/members/kanae.md` 中这两个照片文件名。已有同名本地文件的链接继续使用站内资源。

此前公开路径返回 404 的雨夜音十一单照片现已确认存在于桶内：`photo/oto/11th.jpg`。

## 验证

- MkDocs 构建通过；本次验证仅临时禁用需要 GitHub API 的贡献者插件，未修改项目插件配置。
- 检查了构建输出中的成员头像、首页头像脚本，以及本地播放器样式、脚本和签名文件。
- JavaScript 语法检查通过；保留原有 CRLF 换行的差异检查通过。
- 未部署。

## 尚未替换

以下资源未在桶中找到同名对象，也未找到能确认对应关系的替代文件，继续保留旧地址。位置均为当前源文件行号。

| 旧资源路径 | R2 核对结果 | 源文件位置 |
| --- | --- | --- |
| `assets/fonts/font.ttf` | 无同名对象或可确认的对应资源 | `docs/stylesheets/extra.css:184` |
| `assets/game/227-game-logo.svg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:5` |
| `assets/game/EZC5jiuWAAIL0OE.jfif` | 无同名对象或可确认的对应资源 | `docs/game/index.md:95` |
| `assets/game/event_banner/event_banner%20%231006506.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:126`<br>`docs/game/index.md:126` |
| `assets/game/event_banner/event_banner%20%231076158.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:131`<br>`docs/game/index.md:131` |
| `assets/game/event_banner/event_banner%20%231077692.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:124`<br>`docs/game/index.md:124` |
| `assets/game/event_banner/event_banner%20%231091295.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:110`<br>`docs/game/index.md:110` |
| `assets/game/event_banner/event_banner%20%231096522.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:105`<br>`docs/game/index.md:105` |
| `assets/game/event_banner/event_banner%20%23117971.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:114`<br>`docs/game/index.md:114` |
| `assets/game/event_banner/event_banner%20%2314582.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:128`<br>`docs/game/index.md:128` |
| `assets/game/event_banner/event_banner%20%23185192.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:135`<br>`docs/game/index.md:135` |
| `assets/game/event_banner/event_banner%20%23206815.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:115`<br>`docs/game/index.md:115` |
| `assets/game/event_banner/event_banner%20%23278887.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:107`<br>`docs/game/index.md:107` |
| `assets/game/event_banner/event_banner%20%23289320.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:118`<br>`docs/game/index.md:118` |
| `assets/game/event_banner/event_banner%20%23290787.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:136`<br>`docs/game/index.md:136` |
| `assets/game/event_banner/event_banner%20%23337444.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:129`<br>`docs/game/index.md:129` |
| `assets/game/event_banner/event_banner%20%23378647.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:106`<br>`docs/game/index.md:106` |
| `assets/game/event_banner/event_banner%20%23403110.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:108`<br>`docs/game/index.md:108` |
| `assets/game/event_banner/event_banner%20%23418873.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:117`<br>`docs/game/index.md:117` |
| `assets/game/event_banner/event_banner%20%2344563.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:119`<br>`docs/game/index.md:119` |
| `assets/game/event_banner/event_banner%20%23448642.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:122`<br>`docs/game/index.md:122` |
| `assets/game/event_banner/event_banner%20%23450551.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:113`<br>`docs/game/index.md:113` |
| `assets/game/event_banner/event_banner%20%2347265.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:134`<br>`docs/game/index.md:134` |
| `assets/game/event_banner/event_banner%20%23509792.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:121`<br>`docs/game/index.md:121` |
| `assets/game/event_banner/event_banner%20%23587969.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:102`<br>`docs/game/index.md:102` |
| `assets/game/event_banner/event_banner%20%23598994.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:104`<br>`docs/game/index.md:104` |
| `assets/game/event_banner/event_banner%20%23665918.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:133`<br>`docs/game/index.md:133` |
| `assets/game/event_banner/event_banner%20%23771922.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:103`<br>`docs/game/index.md:103` |
| `assets/game/event_banner/event_banner%20%23853968.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:116`<br>`docs/game/index.md:116` |
| `assets/game/event_banner/event_banner%20%23885650.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:111`<br>`docs/game/index.md:111`<br>`docs/game/index.md:112`<br>`docs/game/index.md:112` |
| `assets/game/event_banner/event_banner%20%23897570.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:127`<br>`docs/game/index.md:127` |
| `assets/game/event_banner/event_banner%20%2390554.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:123`<br>`docs/game/index.md:123` |
| `assets/game/event_banner/event_banner%20%23910173.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:125`<br>`docs/game/index.md:125` |
| `assets/game/event_banner/event_banner%20%23935690.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:120`<br>`docs/game/index.md:120` |
| `assets/game/event_banner/event_banner%20%23946965.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:100`<br>`docs/game/index.md:100` |
| `assets/game/event_banner/event_banner%20%2395486.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:130`<br>`docs/game/index.md:130` |
| `assets/game/event_banner/event_banner%20%23970144.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:132`<br>`docs/game/index.md:132` |
| `assets/game/event_banner/event_banner%231022238.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:101`<br>`docs/game/index.md:101` |
| `assets/game/event_banner/event_banner.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:109`<br>`docs/game/index.md:109` |
| `assets/game/icon.png` | 无同名对象或可确认的对应资源 | `docs/game/index.md:9` |
| `assets/game/tutorial/1.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:159` |
| `assets/game/tutorial/2.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:160` |
| `assets/game/tutorial/3.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:184` |
| `assets/game/tutorial/4.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:190` |
| `assets/game/tutorial/5.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:198` |
| `assets/game/tutorial/6.jpg` | 无同名对象或可确认的对应资源 | `docs/game/index.md:199` |
| `assets/home/arrow.svg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:7323`<br>`docs/_static/css/style_v10.css:7308` |
| `assets/home/bg_circle.png` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:7282` |
| `assets/home/common/icn_plus.svg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:7351` |
| `assets/home/line_blue2.png` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:1665`<br>`docs/_static/css/style_v7.css:1777`<br>`docs/_static/css/style_v7.css:2010`<br>`docs/_static/css/style_v7.css:2380`<br>`docs/_static/css/style_v7.css:5309`<br>`docs/_static/css/style_v7.css:5403`<br>`docs/_static/css/style_v7.css:5641`<br>`docs/_static/css/style_v7.css:6297`<br>`docs/_static/css/style_v10.css:1666`<br>`docs/_static/css/style_v10.css:1778`<br>`docs/_static/css/style_v10.css:2011`<br>`docs/_static/css/style_v10.css:2379`<br>`docs/_static/css/style_v10.css:5306`<br>`docs/_static/css/style_v10.css:5400`<br>`docs/_static/css/style_v10.css:5638`<br>`docs/_static/css/style_v10.css:6288` |
| `assets/home/line_green.png` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:1705`<br>`docs/_static/css/style_v7.css:5342`<br>`docs/_static/css/style_v10.css:1706`<br>`docs/_static/css/style_v10.css:5339` |
| `assets/home/line_vertical.png` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:1401`<br>`docs/_static/css/style_v7.css:1413`<br>`docs/_static/css/style_v7.css:5049`<br>`docs/_static/css/style_v7.css:5061`<br>`docs/_static/css/style_v10.css:1403`<br>`docs/_static/css/style_v10.css:1415`<br>`docs/_static/css/style_v10.css:5047`<br>`docs/_static/css/style_v10.css:5059` |
| `assets/home/mv.jpg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v10.css:366`<br>`docs/_static/css/style_v10.css:3956` |
| `assets/home/news_more.svg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:1162`<br>`docs/_static/css/style_v7.css:4801`<br>`docs/_static/css/style_v10.css:1166`<br>`docs/_static/css/style_v10.css:4800` |
| `assets/home/top/icon-media_arrow.svg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:7481` |
| `assets/home/tv_live_arrow.svg` | 无同名对象或可确认的对应资源 | `docs/_static/css/style_v7.css:1645`<br>`docs/_static/css/style_v7.css:1846`<br>`docs/_static/css/style_v7.css:5288`<br>`docs/_static/css/style_v7.css:5482`<br>`docs/_static/css/style_v10.css:1646`<br>`docs/_static/css/style_v10.css:1847`<br>`docs/_static/css/style_v10.css:5285`<br>`docs/_static/css/style_v10.css:5479` |
| `assets/keisanchu/keisanchu_poster.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/keisanchu/index.md:35` |
| `assets/keisanchu/keisanchu_poster.jpg!preview` | 无同名对象或可确认的对应资源 | `docs/keisanchu/index.md:35` |
| `assets/kensanchu/kensanchu_poster.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/kensanchu/index.md:35` |
| `assets/kensanchu/kensanchu_poster.jpg!preview` | 无同名对象或可确认的对应资源 | `docs/kensanchu/index.md:35` |
| `assets/live/11_BD.jpg` | 无同名对象或可确认的对应资源 | `docs/live/2020/2020-live-11.md:13`<br>`docs/live/2020/2020-live-11.md:13` |
| `assets/live/11_BD2.jpg` | 无同名对象或可确认的对应资源 | `docs/live/2020/2020-live-11.md:15`<br>`docs/live/2020/2020-live-11.md:15` |
| `assets/live/11_DVD.jpg` | 无同名对象或可确认的对应资源 | `docs/live/2020/2020-live-11.md:9`<br>`docs/live/2020/2020-live-11.md:9` |
| `assets/live/11_DVD2.jpg` | 无同名对象或可确认的对应资源 | `docs/live/2020/2020-live-11.md:11`<br>`docs/live/2020/2020-live-11.md:11` |
| `assets/photo/emma/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/emma.md:43` |
| `assets/photo/emma/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/emma.md:39` |
| `assets/photo/emma/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/emma.md:35` |
| `assets/photo/luna/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/luna.md:38` |
| `assets/photo/luna/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/luna.md:34` |
| `assets/photo/luna/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/luna.md:30` |
| `assets/photo/mao/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mao.md:42` |
| `assets/photo/mao/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mao.md:38` |
| `assets/photo/mao/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mao.md:34` |
| `assets/photo/mei/1st.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:31` |
| `assets/photo/mei/2nd.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:27` |
| `assets/photo/mei/3rd.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:23` |
| `assets/photo/mei/4th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:19` |
| `assets/photo/mei/first.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:35` |
| `assets/photo/mei/hikari.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:11` |
| `assets/photo/mei/yui.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mei.md:15` |
| `assets/photo/mina/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/mina.md:18` |
| `assets/photo/mina/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mina.md:14` |
| `assets/photo/mina/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/mina.md:10` |
| `assets/photo/moe/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/moe.md:31` |
| `assets/photo/moe/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/moe.md:27` |
| `assets/photo/moe/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/moe.md:23` |
| `assets/photo/nao/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/nao.md:42` |
| `assets/photo/nao/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/nao.md:38` |
| `assets/photo/nao/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/nao.md:34` |
| `assets/photo/rino/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/rino.md:42` |
| `assets/photo/rino/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/rino.md:38` |
| `assets/photo/rino/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/rino.md:34` |
| `assets/photo/satsuki/10th.webp!compress` | 无同名对象或可确认的对应资源 | `docs/member/satsuki.md:45` |
| `assets/photo/satsuki/11th.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/satsuki.md:41` |
| `assets/photo/satsuki/2nd-album.jpg!compress` | 无同名对象或可确认的对应资源 | `docs/member/satsuki.md:37` |
| `assets/photo/songs/album/3rd.webp` | 无同名对象或可确认的对应资源 | `docs/songs/album/3rd/song-1.md:10`<br>`docs/songs/album/3rd/song-3.md:10`<br>`docs/songs/album/3rd/index.md:10`<br>`docs/songs/album/3rd/song-2.md:10` |
| `assets/photo/songs/single/12th-2.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/12th/song-1.md:12`<br>`docs/songs/single/12th/song-5.md:12`<br>`docs/songs/single/12th/song-4.md:12`<br>`docs/songs/single/12th/song-3.md:12`<br>`docs/songs/single/12th/index.md:12`<br>`docs/songs/single/12th/song-2.md:12` |
| `assets/photo/songs/single/12th-3.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/12th/song-1.md:14`<br>`docs/songs/single/12th/song-5.md:14`<br>`docs/songs/single/12th/song-4.md:14`<br>`docs/songs/single/12th/song-3.md:14`<br>`docs/songs/single/12th/index.md:14`<br>`docs/songs/single/12th/song-2.md:14` |
| `assets/photo/songs/single/12th-4.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/12th/song-1.md:16`<br>`docs/songs/single/12th/song-5.md:16`<br>`docs/songs/single/12th/song-4.md:16`<br>`docs/songs/single/12th/song-3.md:16`<br>`docs/songs/single/12th/index.md:16`<br>`docs/songs/single/12th/song-2.md:16` |
| `assets/photo/songs/single/13th-5.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/13th/song-1.md:18`<br>`docs/songs/single/13th/song-5.md:18`<br>`docs/songs/single/13th/song-4.md:18`<br>`docs/songs/single/13th/song-3.md:18`<br>`docs/songs/single/13th/index.md:18`<br>`docs/songs/single/13th/song-2.md:18` |
| `assets/photo/songs/single/14th-2.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/14th/song-1.md:12`<br>`docs/songs/single/14th/song-5.md:12`<br>`docs/songs/single/14th/song-4.md:12`<br>`docs/songs/single/14th/song-3.md:12`<br>`docs/songs/single/14th/index.md:12`<br>`docs/songs/single/14th/song-2.md:12` |
| `assets/photo/songs/single/14th-3.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/14th/song-1.md:14`<br>`docs/songs/single/14th/song-5.md:14`<br>`docs/songs/single/14th/song-4.md:14`<br>`docs/songs/single/14th/song-3.md:14`<br>`docs/songs/single/14th/index.md:14`<br>`docs/songs/single/14th/song-2.md:14` |
| `assets/photo/songs/single/14th-4.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/14th/song-1.md:16`<br>`docs/songs/single/14th/song-5.md:16`<br>`docs/songs/single/14th/song-4.md:16`<br>`docs/songs/single/14th/song-3.md:16`<br>`docs/songs/single/14th/index.md:16`<br>`docs/songs/single/14th/song-2.md:16` |
| `assets/photo/songs/single/15th-2.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/15th/song-1.md:12`<br>`docs/songs/single/15th/song-5.md:12`<br>`docs/songs/single/15th/song-4.md:12`<br>`docs/songs/single/15th/song-3.md:12`<br>`docs/songs/single/15th/index.md:12`<br>`docs/songs/single/15th/song-2.md:12` |
| `assets/photo/songs/single/15th-3.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/15th/song-1.md:14`<br>`docs/songs/single/15th/song-5.md:14`<br>`docs/songs/single/15th/song-4.md:14`<br>`docs/songs/single/15th/song-3.md:14`<br>`docs/songs/single/15th/index.md:14`<br>`docs/songs/single/15th/song-2.md:14` |
| `assets/photo/songs/single/15th-4.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/15th/song-1.md:16`<br>`docs/songs/single/15th/song-5.md:16`<br>`docs/songs/single/15th/song-4.md:16`<br>`docs/songs/single/15th/song-3.md:16`<br>`docs/songs/single/15th/index.md:16`<br>`docs/songs/single/15th/song-2.md:16` |
| `assets/photo/songs/single/15th-5.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/15th/song-1.md:18`<br>`docs/songs/single/15th/song-5.md:18`<br>`docs/songs/single/15th/song-4.md:18`<br>`docs/songs/single/15th/song-3.md:18`<br>`docs/songs/single/15th/index.md:18`<br>`docs/songs/single/15th/song-2.md:18` |
| `assets/photo/songs/single/16th-5.jpg` | 无同名对象或可确认的对应资源 | `docs/songs/single/16th/song-1.md:18`<br>`docs/songs/single/16th/song-5.md:18`<br>`docs/songs/single/16th/song-4.md:18`<br>`docs/songs/single/16th/song-3.md:18`<br>`docs/songs/single/16th/index.md:18`<br>`docs/songs/single/16th/song-2.md:18` |
| `js/gitalk.min.js` | 无同名对象或可确认的对应资源 | `docs/songs/single/1st/song-1.md:216` |

## 已替换的地址

| 旧地址 | 新地址 |
| --- | --- |
| `https://nananiji.zzzhxxx.top/css/jquery.fancybox.min.css` | `/_static/css/jquery.fancybox.min.css` |
| `https://nananiji.zzzhxxx.top/css/APlayer.min.css` | `/_static/css/APlayer.min.css` |
| `https://nananiji.zzzhxxx.top/js/jquery.min.js` | `/_static/js/jquery.min.js` |
| `https://nananiji.zzzhxxx.top/js/jquery.fancybox.min.js` | `/_static/js/jquery.fancybox.min.js` |
| `https://nananiji.zzzhxxx.top/js/DPlayer.min.js` | `/_static/js/DPlayer.min.js` |
| `https://nananiji.zzzhxxx.top/js/md5.js` | `/_static/js/md5.js` |
| `https://nananiji.zzzhxxx.top/js/APlayer.min.js` | `/_static/js/APlayer.min.js` |
| `https://nananiji.zzzhxxx.top/js/Meting.min.js` | `/_static/js/Meting.min.js` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/1st-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/1st-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/2nd-2.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/2nd-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/3rd-2.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/3rd-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/4th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/4th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/5th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/5th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/6th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/6th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/7th-2.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/7th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/8th-1.webp!compress` | `https://res.227wiki.eu.org/photo/songs/single/8th-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/9th-4.webp!compress` | `https://res.227wiki.eu.org/photo/songs/single/9th-4.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/10th-4.webp!compress` | `https://res.227wiki.eu.org/photo/songs/single/10th-4.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/11th-3.webp!compress` | `https://res.227wiki.eu.org/photo/songs/single/11th-3.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/12th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/12th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/13th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/13th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/14th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/14th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/15th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/15th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/16th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/songs/single/16th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/album/1st.webp!compress` | `https://res.227wiki.eu.org/photo/songs/album/1st.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/album/2nd.webp!compress` | `https://res.227wiki.eu.org/photo/songs/album/2nd.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/album/3rd-1.webp!compress` | `https://res.227wiki.eu.org/photo/songs/album/3rd-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/keisanchu.svg` | `/assets/keisanchu.svg` |
| `https://nananiji.zzzhxxx.top/assets/kensanchu.svg` | `/assets/kensanchu.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/oto/11th.jpg!compress` | `https://res.227wiki.eu.org/photo/oto/11th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/oto/10th.webp!compress` | `https://res.227wiki.eu.org/photo/oto/10th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/oto/9th-2.jpg!compress` | `https://res.227wiki.eu.org/photo/oto/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/oto/9th.jpg!compress` | `https://res.227wiki.eu.org/photo/oto/9th.jpg` |
| `https://nananiji.zzzhxxx.top/js/hls.min.js` | `/_static/js/hls.min.js` |
| `https://nananiji.zzzhxxx.top/assets/urara-sig.svg` | `/assets/urara-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/2nd-album.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/2nd-album.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/11th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/11th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/10th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/10th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/9th-2.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/9th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/8th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/8th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/1st-album.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/1st-album.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/7th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/7th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/6th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/6th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/5th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/5th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/4th.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/4th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/3rd.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/3rd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/2nd.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/2nd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/nagomi-1st.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/nagomi-1st.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nagomi/WhiteDress.jpg!compress` | `https://res.227wiki.eu.org/photo/nagomi/WhiteDress.jpg` |
| `https://nananiji.zzzhxxx.top/assets/nagomi-sig.svg` | `/assets/nagomi-sig.svg` |
| `https://nananiji.zzzhxxx.top/css/aplayer.min.css` | `/_static/css/APlayer.min.css` |
| `https://nananiji.zzzhxxx.top/js/aplayer.min.js` | `/_static/js/APlayer.min.js` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/nagomi.jpg` | `https://res.227wiki.eu.org/photo/avatar/graduated/nagomi.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nao/9th-2.jpg!compress` | `/assets/photo/nao/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/nao/9th.jpg!compress` | `/assets/photo/nao/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/aina-sig.svg` | `/assets/aina-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/11th.jpeg` | `https://res.227wiki.eu.org/photo/kanae/11th.jpeg` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/10th.jpeg!compress` | `https://res.227wiki.eu.org/photo/kanae/10th.jpeg` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/9th-2.jpg!compress` | `https://res.227wiki.eu.org/photo/kanae/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/8th.webp` | `https://res.227wiki.eu.org/photo/kanae/8th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/1st-album.webp` | `https://res.227wiki.eu.org/photo/kanae/1st-album.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/7th.webp` | `https://res.227wiki.eu.org/photo/kanae/7th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/6th.webp` | `https://res.227wiki.eu.org/photo/kanae/6th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/5th.webp` | `https://res.227wiki.eu.org/photo/kanae/5th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/4th.webp` | `https://res.227wiki.eu.org/photo/kanae/4th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/3rd.webp` | `https://res.227wiki.eu.org/photo/kanae/3rd.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/2nd.webp` | `https://res.227wiki.eu.org/photo/kanae/2nd.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/WhiteDress.webp` | `https://res.227wiki.eu.org/photo/kanae/WhiteDress.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/kanae.jpg` | `https://res.227wiki.eu.org/photo/avatar/graduated/kanae.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/luna/9th-2.jpg!compress` | `/assets/photo/luna/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/luna/9th.jpg!compress` | `/assets/photo/luna/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/chiharu-sig.svg` | `/assets/chiharu-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/chiharu.jpg` | `https://res.227wiki.eu.org/photo/avatar/graduated/chiharu.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/9th-2.jpg!compress` | `/assets/photo/sally/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/9th.jpg!compress` | `/assets/photo/sally/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/8th.jpg!compress` | `/assets/photo/sally/8th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/1st-album.jpg!compress` | `/assets/photo/sally/1st-album.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/7th.jpg!compress` | `/assets/photo/sally/7th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/6th.jpg!compress` | `/assets/photo/sally/6th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/5th.jpg!compress` | `/assets/photo/sally/5th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/4th.jpg!compress` | `/assets/photo/sally/4th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/3rd.jpg!compress` | `/assets/photo/sally/3rd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/2nd.jpg!compress` | `/assets/photo/sally/2nd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/1st.jpg!compress` | `/assets/photo/sally/1st.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/WhiteDress.jpg!compress` | `/assets/photo/sally/WhiteDress.jpg` |
| `https://nananiji.zzzhxxx.top/assets/sally-sig.svg` | `/assets/sally-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/sally.jpg` | `https://res.227wiki.eu.org/photo/avatar/16th/sally.jpg` |
| `https://nananiji.zzzhxxx.top/assets/ruri-sig.svg` | `/assets/ruri-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/mizuha-sig.svg` | `/assets/mizuha-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/reina-sig.svg` | `/assets/reina-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/9th-2.jpg!compress` | `/assets/photo/moe/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/9th.jpg!compress` | `/assets/photo/moe/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/8th.jpg!compress` | `/assets/photo/moe/8th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/1st-album.jpg!compress` | `/assets/photo/moe/1st-album.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/7th.jpg!compress` | `/assets/photo/moe/7th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/6th.jpg!compress` | `/assets/photo/moe/6th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/5th.jpg!compress` | `/assets/photo/moe/5th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/4th.jpg!compress` | `/assets/photo/moe/4th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/3rd.jpg!compress` | `/assets/photo/moe/3rd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/2nd.jpg!compress` | `/assets/photo/moe/2nd.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/moe/1st.jpg!compress` | `/assets/photo/moe/1st.jpg` |
| `https://nananiji.zzzhxxx.top/assets/moe-sig.svg` | `/assets/moe-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/moe.jpg` | `/assets/photo/avatar/moe.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/satsuki/9th-2.jpg!compress` | `/assets/photo/satsuki/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/satsuki/9th.jpg!compress` | `/assets/photo/satsuki/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/mina/9th-2.jpg!compress` | `/assets/photo/mina/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/mina/9th.jpg!compress` | `/assets/photo/mina/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/11th.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/11th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/10th.webp!compress` | `https://res.227wiki.eu.org/photo/uta/10th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/9th-2.jpg!compress` | `/assets/photo/uta/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/9th.jpg!compress` | `/assets/photo/uta/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/8th.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/8th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/1st-album.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/1st-album.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/7th.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/7th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/6th.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/6th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/uta/5th.jpg!compress` | `https://res.227wiki.eu.org/photo/uta/5th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/uta-sig.svg` | `/assets/uta-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/avatar/uta.jpg` | `/assets/photo/avatar/uta.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/rino/9th-2.jpg!compress` | `/assets/photo/rino/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/rino/9th.jpg!compress` | `/assets/photo/rino/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/mao/9th-2.jpg!compress` | `/assets/photo/mao/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/mao/9th.jpg!compress` | `/assets/photo/mao/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/emma/9th-2.jpg!compress` | `/assets/photo/emma/9th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/emma/9th.jpg!compress` | `/assets/photo/emma/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/home/3772bd65b63760d4aa27b736ef677.jpg` | `/assets/home/3772bd65b63760d4aa27b736ef677.jpg` |
| `https://nananiji.zzzhxxx.top/assets/home/line_blue.png` | `/assets/home/line_blue.png` |
| `https://nananiji.zzzhxxx.top/assets/home/icon_arrow.svg` | `/assets/home/icon_arrow.svg` |
| `https://nananiji.zzzhxxx.top/assets/home/line_blue_alpha.png` | `/assets/home/line_blue_alpha.png` |
| `https://nananiji.zzzhxxx.top/assets/home/topics_frame.svg` | `/assets/home/topics_frame.svg` |
| `https://nananiji.zzzhxxx.top/assets/home/viewmore_back.svg` | `/assets/home/viewmore_back.svg` |
| `https://nananiji.zzzhxxx.top/assets/home/viewmore_back_hover.svg` | `/assets/home/viewmore_back_hover.svg` |
| `https://nananiji.zzzhxxx.top/assets/home/icon_youtube_movie.svg` | `/assets/home/icon_youtube_movie.svg` |
| `https://nananiji.zzzhxxx.top/assets/home/icon_next.svg` | `/assets/home/icon_next.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/album/1st.webp` | `https://res.227wiki.eu.org/photo/songs/album/1st.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/album/2nd.webp` | `https://res.227wiki.eu.org/photo/songs/album/2nd.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/15th-1.jpg` | `https://res.227wiki.eu.org/photo/songs/single/15th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/4th-1.jpg` | `/assets/photo/songs/single/4th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/4th-2.jpg` | `/assets/photo/songs/single/4th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/4th-3.jpg` | `/assets/photo/songs/single/4th-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/11th-1.webp` | `https://res.227wiki.eu.org/photo/songs/single/11th-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/11th-2.webp` | `https://res.227wiki.eu.org/photo/songs/single/11th-2.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/11th-3.webp` | `https://res.227wiki.eu.org/photo/songs/single/11th-3.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/3rd-1.jpg` | `/assets/photo/songs/single/3rd-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/3rd-2.jpg` | `/assets/photo/songs/single/3rd-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/3rd-3.jpg` | `/assets/photo/songs/single/3rd-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/9th-1.webp` | `https://res.227wiki.eu.org/photo/songs/single/9th-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/9th-2.webp` | `https://res.227wiki.eu.org/photo/songs/single/9th-2.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/9th-3.webp` | `https://res.227wiki.eu.org/photo/songs/single/9th-3.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/9th-4.webp` | `https://res.227wiki.eu.org/photo/songs/single/9th-4.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/16th-1.jpg` | `https://res.227wiki.eu.org/photo/songs/single/16th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/16th-2.jpg` | `https://res.227wiki.eu.org/photo/songs/single/16th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/16th-3.jpg` | `https://res.227wiki.eu.org/photo/songs/single/16th-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/16th-4.jpg` | `https://res.227wiki.eu.org/photo/songs/single/16th-4.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/7th-1.jpg` | `/assets/photo/songs/single/7th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/7th-2.jpg` | `/assets/photo/songs/single/7th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/7th-3.jpg` | `/assets/photo/songs/single/7th-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/7th-4.jpg` | `/assets/photo/songs/single/7th-4.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/12th-1.jpg` | `https://res.227wiki.eu.org/photo/songs/single/12th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/1st-1.jpg` | `/assets/photo/songs/single/1st-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/1st-2.jpg` | `/assets/photo/songs/single/1st-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/8th-1.webp` | `https://res.227wiki.eu.org/photo/songs/single/8th-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/8th-2.webp` | `https://res.227wiki.eu.org/photo/songs/single/8th-2.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/8th-3.webp` | `https://res.227wiki.eu.org/photo/songs/single/8th-3.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/8th-4.webp` | `https://res.227wiki.eu.org/photo/songs/single/8th-4.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/13th-1.jpg` | `https://res.227wiki.eu.org/photo/songs/single/13th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/13th-2.jpg` | `https://res.227wiki.eu.org/photo/songs/single/13th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/13th-3.jpg` | `https://res.227wiki.eu.org/photo/songs/single/13th-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/13th-4.jpg` | `https://res.227wiki.eu.org/photo/songs/single/13th-4.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/6th-1.jpg` | `/assets/photo/songs/single/6th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/6th-2.jpg` | `/assets/photo/songs/single/6th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/6th-3.jpg` | `/assets/photo/songs/single/6th-3.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/14th-1.jpg` | `https://res.227wiki.eu.org/photo/songs/single/14th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/2nd-1.jpg` | `/assets/photo/songs/single/2nd-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/2nd-2.jpg` | `/assets/photo/songs/single/2nd-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/10th-1.webp` | `https://res.227wiki.eu.org/photo/songs/single/10th-1.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/10th-2.webp` | `https://res.227wiki.eu.org/photo/songs/single/10th-2.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/10th-3.webp` | `https://res.227wiki.eu.org/photo/songs/single/10th-3.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/10th-4.webp` | `https://res.227wiki.eu.org/photo/songs/single/10th-4.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/5th-1.jpg` | `/assets/photo/songs/single/5th-1.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/5th-2.jpg` | `/assets/photo/songs/single/5th-2.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/songs/single/5th-3.jpg` | `/assets/photo/songs/single/5th-3.jpg` |

## 本轮按 R2 清单新增的替换

| 旧地址 | 已确认的新地址 |
| --- | --- |
| `https://nananiji.zzzhxxx.top/assets/luna-sig.svg` | `https://res.227wiki.eu.org/assets/luna-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/mao-sig.svg` | `https://res.227wiki.eu.org/assets/mao-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/1st.webp` | `https://res.227wiki.eu.org/photo/kanae/kanae-1st.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/kanae/9th-1.jpg!compress` | `https://res.227wiki.eu.org/photo/kanae/9th.jpg` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/10th.jpg!compress` | `https://res.227wiki.eu.org/photo/sally/10th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/11th.jpg!compress` | `https://res.227wiki.eu.org/photo/sally/11th.webp` |
| `https://nananiji.zzzhxxx.top/assets/photo/sally/2nd-album.jpg!compress` | `https://res.227wiki.eu.org/photo/sally/2nd-album.webp` |
| `https://nananiji.zzzhxxx.top/assets/rino-sig.svg` | `https://res.227wiki.eu.org/assets/rino-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/satsuki-sig.svg` | `https://res.227wiki.eu.org/assets/satsuki-sig.svg` |
| `https://nananiji.zzzhxxx.top/assets/uta-sig2.svg` | `https://res.227wiki.eu.org/assets/uta-sig2.svg` |
