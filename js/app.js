// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

// build scenes
new ScrollMagic.Scene({triggerElement: '.parallaxParent', duration: 600})
	.setTween (
		TweenMax.fromTo(
			'.parallaxChild h1', 1, 
			{ y:100, z:0.01 },
			{ y:800, z:0.01, ease: Linear.easeNone }
		)
	)
	.addTo(controller);

