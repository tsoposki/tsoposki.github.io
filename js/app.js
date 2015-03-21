// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#parallax1"})
   .setTween(".parallaxChild > h1", {y: "250%", bounce: Linear.easeInOut})
   .addIndicators()
   .addTo(controller);


