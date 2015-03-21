function smoothScroll() {
    var a = $(window);
    a.on("mousewheel DOMMouseScroll", function(b) {
        b.preventDefault();
        b = b.originalEvent.wheelDelta / 120 || -b.originalEvent.detail / 3;
        b = (a.scrollTop() - parseInt(280 * b)).toFixed(2);
        TweenMax.to(a, 0.7, {
            scrollTo: {
                y: b,
                z: 0.01
            },
            ease: Linear.easeNone
        })
    })
}
