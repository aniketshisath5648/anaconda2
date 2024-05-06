var menubutton = document.querySelector('.anii');
var midnav = document.querySelector('.mid-nav');

menubutton.addEventListener("click", function() {
    midnav.classList.toggle('down');
})


var tl = gsap.timeline()

tl.from('.left-nav',{
    y:-50,
    opacity: 0,
    duration: 0.5,
    delay:1,
})
tl.from('.upper-main',{
    y:-50,
    opacity:0,
    duration: 1,
    delay:0.1
})

tl.from('.mid-nav a',{
    y:-50,
    opacity: 0,
    duration: 0.5,
    delay:0.3,
    stagger:0.3
})

tl.from('.signin ',{
    y:-50,
    opacity: 0,
    duration: 0.3,
    delay:0.1,
    stagger:0.3
})
tl.from('.contact ',{
    y:-50,
    opacity: 0,
    duration: 0.3,
    delay:0.3,
    stagger:0.3
})
tl.from('.lower-main-down',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.lower-main-down',
        scroller:'body',
        end:"top 50%",
        scrub:2
    }
})
tl.from('.img1',{
    y:-300,
    opacity:0,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:'.img1',
        scroll:'body',
        end:"0 0",
        start:"50% 50%",
        scrub:1
    }
})
tl.from('.dis',{
    y:-300,
    opacity:0,
    duration:1,
    delay:2,
    scrollTrigger:{
        trigger:'.dis',
        scroll:'body',
        end:"0 0",
        start:"50% 50%",
        scrub:1
    }
})
tl.from('.conda-left',{
    y:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.conda-left',
        scroll:'body',
        start:"90% 90%",
        end:"90% 70%",
        scrub:1
    }
})
tl.from('.conda-right',{
    y:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.conda-right',
        scroll:'body',
        start:"90% 90%",
        end:"90% 70%",
        scrub:1
    }
})
tl.from('.navi-left',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.navi-left',
        scroll:'body',
        start:"20px 90%",
        end:"20px 60%",
        scrub:1
    }
})
tl.from('.navi-right',{
    y:300,
    opacity:0,
    duration:0.3,
    scrollTrigger:{
        trigger:'.navi-right',
        scroll:'body',
        start:"20px 90%",
        end:"20px 60%",
        scrub:1
    }
})
tl.from('.cloud-left',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.cloud-left',
        scroll:'.body',
        end:"0 50%",
        scrub:1,
    }
})
tl.from('.cloud-right',{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.cloud-right',
        scroll:'.body',
        end:"0 50%",
        scrub:1,
    }
})
 tl.from('.card1',{
    x:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card1',
        scroll:'.body',
        scrub:1,
        start:"60% 100%",
        end:"60% 90%"

    }
 })
 tl.from('.card2',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card2',
        scroll:'.body',
        scrub:1,
        start:"50% 100%",
        end:"50% 90%"

    }
 })
 tl.from('.card3',{
    x:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card3',
        scroll:'.body',
        scrub:1,
        start:"60% 100%",
        end:"60% 90%"

    }
 })
 

 tl.from('.card21',{
    x:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card21',
        scroll:'.body',
        scrub:1,
        start:"60% 100%",
        end:"60% 90%"

    }
 })
 tl.from('.card22',{
    y:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card22',
        scroll:'.body',
        scrub:1,
        start:"50% 50%",
        end:"50% 30%"

    }
 })
 tl.from('.card23',{
    x:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.card23',
        scroll:'.body',
        scrub:1,
        start:"60% 100%",
        end:"60% 90%"

    }
 })
 tl.from('.twoleft',{
    x:-300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.twoleft',
        scroll:'.body',
        scrub:1,
        start:"0 100%",
        end:"0 70%"

    }
 })
 tl.from('.tworight',{
    x:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.tworight',
        scroll:'.body',
        scrub:1,
        start:"0 100%",
        end:"0 70%"

    }
 })
 
 tl.from('.icon',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.icon',
        scroll:'.body',
        scrub:1,
        end:"0 70%"
    }
 })
 tl.from('.right-foot-one',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right-foot-one',
        scroll:'.body',
        scrub:1,
        end:"0 70%"
    }
 })
 tl.from('.right-foot-two',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right-foot-two',
        scroll:'.body',
        scrub:1,
        end:"0 70%"
        

    }
 })
 tl.from('.right-foot-three',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right-foot-three',
        scroll:'.body',
        scrub:1,
        end:"0 70%"
    }
 })
 tl.from('.right-foot-four',{
    y:300,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:'.right-foot-four',
        scroll:'.body',
        scrub:1,
        end:"0 70%"
    }
 })

