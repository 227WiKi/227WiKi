console.log('disco');

// JavaScript Document
$(function() {
    new Discography();
});

var ReadObj;
var Discography = (function() {
    //public static

    //constructor
    function Discography() {
        //private
        var loaderFrame = 0;
        var loaderTimer;
        var currentPage = 0;
        var loadedObj = {};
        var endPoint = '';
        var params = getParameter();

        const MAX_DISPLAY = 3;

        var init = function() {
            var _href = location.href;
            _dirName = _href.split('/category/?')[1];
            endPoint = jsonDirectory + _artistFolder + '/discography/start/';
            getMoreInfo();
        };

        function setParameter(url, paramsArray) {
            var resurl = url.replace(/\?.*$/, '');
            for (key in paramsArray) {
                resurl += resurl.indexOf('?') == -1 ? '?' : '&';
                resurl += key + '=' + paramsArray[key];
            }
            return resurl;
        }

        function sliderSetting() {
            var width = $(window).width();
            if (width <= 768) {
                $('.index_discography_container')
                    .not('.slick-initialized')
                    .slick({
                        arrows: false,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20%',
                    });
            } else {
                $('.index_discography_container.slick-initialized').slick('unslick');
            }
        }

        function getParameter() {
            var paramsArray = {};
            var url = location.href;
            parameters = url.split('#');
            if (parameters.length > 1) {
                url = parameters[0];
            }
            parameters = url.split('?');
            if (parameters.length > 1) {
                var params = parameters[1].split('&');
                for (i = 0; i < params.length; i++) {
                    var paramItem = params[i].split('=');
                    paramsArray[paramItem[0]] = paramItem[1];
                }
            }
            return paramsArray;
        }

        function refreshInfo() {
            loadedObj = {};
            currentPage = 0;
            $('#discoList').html('');
            $('.aipBtnMoreL').show();
        }

        function getJson(callback) {
            $.ajax({
                url: endPoint + currentPage * 12 + '/count/12',
                type: 'GET',
                dataType: 'jsonp',
                scriptCharset: 'utf-8',
                complete: callback,
            });
        }

        var getMoreInfo = function() {
            if (!loadedObj[currentPage]) {
                $('#moreTxt').css({
                    display: 'none',
                });
                $('#moreLoading').css({
                    display: 'block',
                });

                if (loaderTimer) {
                    clearInterval(loaderTimer);
                }

                loaderTimer = setInterval(loadingHD, 33);

                getJson(function() {
                    if (ReadObj.items.length == 0) {
                        $('#discoList').append('<p id="nothingItems">現在、商品はありません。</p>');
                        // $(".aipBtnMoreL").remove();
                        $('#mainContentsBody')
                            .removeClass('radiused_top')
                            .addClass('radiused_all');
                        return;
                    }

                    $('#moreTxt').css({
                        display: 'block',
                    });

                    $('#moreLoading').css({
                        display: 'none',
                    });

                    clearInterval(loaderTimer);

                    var _html = getHTML(ReadObj);

                    $('.js-discoList').each(function() {
                        $(this).prepend(_html);
                    });

                    sliderSetting();
                    $(window).resize(function() {
                        sliderSetting();
                    });
                });
            } else {
                $('#discoList').append(loadedObj[currentPage]);
                currentPage++;
                loadNextPage();
                toggleEvent();
            }
        };

        var getHTML = function(ReadObj) {
            var _html = '';
            var len = ReadObj.items.length;
            if (len > MAX_DISPLAY) len = MAX_DISPLAY;
            for (var i = 0; i < len; i++) {
                var item = ReadObj.items[i];

                params['item'] = item.representative_goods_number;
                var detailPageUrl = DISCO_DETAILPAGE_URL || '/s/n129/page/discography_detail';
                var detailPageUrl = setParameter(detailPageUrl, params);

                _html += `           <div class="index_discography_box effect">
                                        <div class="index_discography_thumb">
                                            <a href="${detailPageUrl}">
                                                <img src="${item.image}" width="250px" height="auto" alt="">
                                            </a>
                                        </div>
                                    </div>`;
            }
            return _html;
        };

        var loadNextPage = function() {
            getJson(function() {
                var _html = '';
                if (ReadObj.items.length == 0) {
                    $('.aipBtnMoreL').hide();
                    $('#mainContentsBody')
                        .removeClass('radiused_top')
                        .addClass('radiused_all');
                    return;
                }
                _html = getHTML(ReadObj);
                loadedObj[currentPage] = _html;
            });
        };

        var loadingHD = function() {
            loaderFrame++;
            if (loaderFrame >= 10) {
                loaderFrame = 0;
            }
            $('#moreLoading')
                .find('img')
                .css('margin-left', -30 * loaderFrame);
        };

        init();
    }

    return Discography;
})();

function doInTheBottom() {
    $(window).trigger('bottom');
}

function callback(_obj) {
    ReadObj = _obj;
}
