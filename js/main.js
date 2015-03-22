$(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    var target = $("#main .mainPicture");
    var targetHeight = target.css("height");

    var steppedEase = new SteppedEase(7);

    var tween = TweenMax.fromTo(
            target, 0.5, {
                y: 0,
                z: 0.01, 
                force3D: "true", 
                ease: steppedEase
            },
            {
                y: 280,
                z: 0.01, 
                force3D: "true",
                ease: steppedEase
            }

    );

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "nothing", duration: targetHeight})
                    .setTween(tween)
                    .addTo(controller);


});


