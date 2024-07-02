function displayAnimation(){
    const tl = gsap.timeline();

    tl.from("nav",{
        opacity:0,
        duration : 1,
        delay : 0.5
    })
    tl.from("nav h1, #navbar li",{
        y: 200,
        duration: 1
    })
    tl.from("#left-part",{
        x : -1000,
        duration: 1
    })
    tl.from("#right-part",{
        x : 1000,
        duration: 1
    })
}

displayAnimation();