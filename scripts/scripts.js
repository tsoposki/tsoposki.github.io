
$(function() {
    $controller = new ScrollMagic;
    $mouseEventOut = $mouseEventHover = $mouseEventClick = null;
    
    smoothScroll();
    adapt_mainPic_height();
    
    (new ScrollScene({
        triggerElement: "#main .mainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo("#main .mainPicture", 1, {
        backgroundPosition: "center 0px"
    }, {
        backgroundPosition: "center 250px",
        ease: Linear.easeNone
    }));

    $(window).resize(function() {
        adapt_mainPic_height();
    });

});