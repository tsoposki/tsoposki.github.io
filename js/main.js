$(function() {
    $controller = new ScrollMagic;
    
    (new ScrollScene({
        triggerElement: "#main .mainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo("#main .mainPicture", 1, {
        y: 0,
        z: 0.01
    }, {
        y: 250,
        z: 0.01,
        ease: Linear.easeNone
    }));

});
