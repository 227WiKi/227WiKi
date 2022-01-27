$(document).ready(function() {
    //初期設定
    var height = $(window).height();
    var w = $(window).width();
    var x = 768;

    if (w > x) {
        wresize();
    } else {
        wresize_sp();
    }

    //リサイズ処理
    $(window).resize(function() {
        var ww = $(window).width();
        if (w != ww) {
            w = ww;
            if (w > x) {
                wresize();
            } else {
                wresize_sp();
            }
        }
    });

    $('.index_feature_inner').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20%',
                },
            },
        ],
    });

    $('.index_movie_container').slick({
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.index_news_tab a').click(function() {
        trg = $(this).attr('href');
        $('.index_news_tab a').removeClass('active');
        $(this).addClass('active');
        $('.index_news').hide();
        $(trg).show();
        return false;
    });

    function sliderSetting() {
        var width = $(window).width();
        if (width <= 768) {
            $('.index_topics_container')
                .not('.slick-initialized')
                .slick({
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '5%',
                });
        } else {
            $('.index_topics_container.slick-initialized').slick('unslick');
        }
    }
    sliderSetting();
    $(window).resize(function() {
        sliderSetting();
    });

    $('.modal_youtube').modaal({
        type: 'video',
        background: '#fff',
        after_callback_delay: 0,
        after_open: function(modal_wrapper) {
            modalid = $('.modaal-wrapper').attr('id');
            document.getElementById(modalid).scrollTop = 0;
        },
    });

    function wresize() {
        height = $(window).height();
        w = $(window).width();
    }

    function wresize_sp() {
        height = $(window).height();
        w = $(window).width();
    }

    $('#js-sitesupport-expander').click(function() {
        $(this)
            .next()
            .slideToggle(250);
        $(this).toggleClass('is-open');
    });
});
