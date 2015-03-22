$(function() {
    $controller = new ScrollMagic;
    
    trajche();
    
    (new ScrollScene({
        triggerElement: "#main .mainPicture",
        triggerHook: 0,
        duration: $(window).height()
    })).addTo($controller).setTween(TweenMax.fromTo("#main .mainPicture", 0.7, {
        y: 0,
        z: 0.01
    }, {
        y: 250,
        z: 0.01,
        ease: Linear.easeNone
    }));

});

function trajche() {
    var a = $(window);
    a.on("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault();
        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
        b = (a.scrollTop() - parseInt(280 * b)).toFixed(2);
        TweenMax.to(a, 0.7, {
            scrollTo: {
                y: b,
                z: 0.01,
                autoKill : true // Allow scroll position to change outside itself
            },
            ease: Linear.easeNone
        })
    })
}
