function smoothScroll() {
    var a = $(window);
    a.on("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault();
        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
        b = a.scrollTop() - parseInt(280 * b);
        TweenMax.to(a, 1.1, {
            scrollTo: {
                y: b,
                autoKill: !0
            },
            ease: Power1.easeOut,
            overwrite: 5
        })
    })
}

function adapt_mainPic_height() {
    var a = $(window).height();
    $(".mainPicture").height(a)
}