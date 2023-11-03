gsap.registerPlugin(ScrollTrigger) 


let homePage = document.querySelector('#homePage');
let productPage = document.querySelector('#productPage');
let aboutPage = document.querySelector('#aboutPage');
let contactPage = document.querySelector('#contactPage');

let navBar = document.querySelector('#navBar');

let navArrow = document.querySelector('#navArrow');
let proArrow = document.querySelector('#proArrow');
let proArrow2 = document.querySelector('#proArrow2');
let proArrow3 = document.querySelector('#proArrow3');
let proArrow4 = document.querySelector('#proArrow4');
let proArrowOther = document.querySelector('#proArrowOther');
let abArrow = document.querySelector('#abArrow');
let conArrow = document.querySelector('#conArrow');
let revArrow = document.querySelector('#revArrow');
let revArrow2 = document.querySelector('#revArrow2');
let revArrow3 = document.querySelector('#revArrow3');
let revArrow4 = document.querySelector('#revArrow4');

let lHome = document.querySelector('.lHome');
let lRight = document.querySelector('.lRight');
let lBot = document.querySelector('.lBot');
let lBot2 = document.querySelector('.lBot2');
let lMain = document.querySelector('.lMain');

let products = document.querySelector('.products');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');

let flavour1 = document.querySelector('#flavour1');
let flavour2 = document.querySelector('#flavour2');
let flavour3 = document.querySelector('#flavour3');
let flavour4 = document.querySelector('#flavour4');
let proAll = document.querySelector('#productsAll');

let f1Rev = document.querySelector('#f1Review')
let f2Rev = document.querySelector('#f2Review')
let f3Rev = document.querySelector('#f3Review')
let f4Rev = document.querySelector('#f4Review')

let melon1 = document.querySelector('.melon1');

let aboutMain = document.querySelector('#aboutMain');
let about1 = document.querySelector('#about1');
let about2 = document.querySelector('#about2');
let explore = document.querySelector('.explore');
let dot1 = document.querySelector('.navDot1');
let dot2 = document.querySelector('.navDot2');
let dot3 = document.querySelector('.navDot3');

let botNav = document.querySelector('.botNav');
let conBotArrow = document.querySelector('.conArrowContainer');

function returnHome(){
    homePage.style.display = 'block';
    productPage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'none';

    flavour1.style.display = 'flex';
    flavour2.style.display = 'none';
    flavour3.style.display = 'none';
    flavour4.style.display = 'none';

    f1Rev.style.display = 'none';
    f2Rev.style.display = 'none';
    f3Rev.style.display = 'none';
    f4Rev.style.display = 'none';


    products.style.color = '#E51B6C';
    about.style.color = '#E51B6C';
    contact.style.color = '#E51B6C';

    navArrow.style.display = 'block';
    navArrow.style.left = '72%';
    proArrow.style.display = 'none';
    proArrow2.style.display = 'none';
    proArrow3.style.display = 'none';
    proArrow4.style.display = 'none';
    proArrowOther.style.display = 'none';
    revArrow.style.display = 'none';
    revArrow2.style.display = 'none';
    revArrow3.style.display = 'none';
    revArrow4.style.display = 'none';
    abArrow.style.display = 'none';
    conArrow.style.display = 'none';

    lHome.style.display = 'block';
    lBot.style.display = 'block';
    lBot2.style.display = 'none';
    lRight.style.display = 'block';
    lMain.style.display = 'none';

    navBar.style.display = 'none';
}

function swapArrow1(){
    navArrow.style.display = 'none';
    proArrow.style.display = 'block';
}

function toggleHome(){
    homePage.style.display = 'none';
    productPage.style.display = 'block';
    navArrow.style.left = '90%';

    lHome.style.display = 'none';
    lBot.style.display = 'none';
    lBot2.style.display = 'block';
    lRight.style.display = 'none';
    lMain.style.display = 'block';

    navBar.style.display = 'block';

    products.style.color = '#27AAE1';


    setTimeout(swapArrow1, 200);
}

function proNav(){
    returnHome();
    toggleHome();
}

function proPage2(){
    flavour1.style.display = 'none';
    flavour2.style.display = 'flex';

    proArrow.style.display = 'none';
    proArrow2.style.display = 'block';
}
function proPage3(){
    flavour2.style.display = 'none';
    flavour3.style.display = 'flex';

    proArrow2.style.display = 'none';
    proArrow3.style.display = 'block';
}
function proPage4(){
    flavour3.style.display = 'none';
    flavour4.style.display = 'flex';

    proArrow3.style.display = 'none';
    proArrowOther.style.display = 'block';
}

function proPageAll(){
    flavour4.style.display = 'none';
    proAll.style.display = 'flex';

    proArrowOther.style.display = 'none';
    proArrow4.style.display = 'block';

}

function proRev1(){
    flavour1.style.display = 'none';
    f1Rev.style.display = 'flex';

    proArrow.style.display = 'none';
    revArrow.style.display = 'block';
}
function revReturn1(){
    flavour1.style.display = 'flex';
    f1Rev.style.display = 'none';

    proArrow.style.display = 'block';
    revArrow.style.display = 'none';
}
function proRev2(){
    flavour2.style.display = 'none';
    f2Rev.style.display = 'flex';

    proArrow2.style.display = 'none';
    revArrow2.style.display = 'block';
}
function revReturn2(){
    flavour2.style.display = 'flex';
    f2Rev.style.display = 'none';

    proArrow2.style.display = 'block';
    revArrow2.style.display = 'none';
}
function proRev3(){
    flavour3.style.display = 'none';
    f3Rev.style.display = 'flex';

    proArrow3.style.display = 'none';
    revArrow3.style.display = 'block';
}
function revReturn3(){
    flavour3.style.display = 'flex';
    f3Rev.style.display = 'none';

    proArrow3.style.display = 'block';
    revArrow3.style.display = 'none';
}
function proRev4(){
    flavour4.style.display = 'none';
    f4Rev.style.display = 'flex';

    proArrowOther.style.display = 'none';
    revArrow4.style.display = 'block';
}
function revReturn4(){
    flavour4.style.display = 'flex';
    f4Rev.style.display = 'none';

    proArrowOther.style.display = 'block';
    revArrow4.style.display = 'none';
}

const bottleM = gsap.utils.toArray('#bottleM')[0];
const bottleP = gsap.utils.toArray('#bottleP')[0];
const bottleA = gsap.utils.toArray('#bottleA')[0];
const bottleL = gsap.utils.toArray('#bottleL')[0];

const melon1Move = gsap.utils.toArray('.melon1')[0];
const melon2Move = gsap.utils.toArray('.melon2')[0];
const melon3Move = gsap.utils.toArray('.melon3')[0];

const peach1Move = gsap.utils.toArray('.peach1')[0];
const peach2Move = gsap.utils.toArray('.peach2')[0];
const peach3Move = gsap.utils.toArray('.peach3')[0];

const appleFrontMove = gsap.utils.toArray('.appleFront')[0];
const apple0Move = gsap.utils.toArray('.apple0')[0];
const apple1Move = gsap.utils.toArray('.apple1')[0];
const apple2Move = gsap.utils.toArray('.apple2')[0];
const apple3Move = gsap.utils.toArray('.apple3')[0];

const lemon1Move = gsap.utils.toArray('.lemon1')[0];
const lemon2Move = gsap.utils.toArray('.lemon2')[0];
const lemon3Move = gsap.utils.toArray('.lemon3')[0];
const lemon4Move = gsap.utils.toArray('.lemon4')[0];


window.addEventListener('mousemove', (event) =>{
    const mouseX = -((window.innerWidth / 2) - event.pageX) / 40
    const mouseY = ((window.innerHeight / 2) - event.pageY) / 20

    const mouseXb = -((window.innerWidth / 2) - event.pageX) / 80
    const mouseYb = ((window.innerHeight / 2) - event.pageY) / 40

    gsap.to(bottleM, {
        duration: 1,
        rotationY: mouseXb,
        rotationX: mouseYb,
        ease: 'power2.out'
    })
    gsap.to(bottleP, {
        duration: 1,
        rotationY: mouseXb,
        rotationX: mouseYb,
        ease: 'power2.out'
    })
    gsap.to(bottleA, {
        duration: 1,
        rotationY: mouseXb,
        rotationX: mouseYb,
        ease: 'power2.out'
    })
    gsap.to(bottleL, {
        duration: 1,
        rotationY: mouseXb,
        rotationX: mouseYb,
        ease: 'power2.out'
    })

    gsap.to(melon1Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(melon2Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(melon3Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })

    gsap.to(peach1Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(peach2Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(peach3Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })

    gsap.to(appleFrontMove, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(apple0Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(apple1Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(apple2Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(apple3Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })

    gsap.to(lemon1Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(lemon2Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(lemon3Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    gsap.to(lemon4Move, {
        duration: 0.5,
        rotationY: mouseX,
        rotationX: mouseY,
        ease: 'power2.out'
    })
    
})


new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
  } );








function abPage(){
    productPage.style.display = 'none';
    aboutPage.style.display = 'block';
    contactPage.style.display = 'none';

    aboutMain.style.display = 'flex';
    about1.style.display = 'none';
    about2.style.display = 'none';

    products.style.color = '#E51B6C';
    about.style.color = '#27AAE1';
    contact.style.color = '#E51B6C';

    proArrow.style.display = 'none';
    proArrow2.style.display = 'none';
    proArrow3.style.display = 'none';
    proArrow4.style.display = 'none';
    proArrowOther.style.display = 'none';
    revArrow.style.display = 'none';
    revArrow2.style.display = 'none';
    revArrow3.style.display = 'none';
    revArrow4.style.display = 'none';
    abArrow.style.display = 'block';
    conArrow.style.display = 'none';
}

function abSub1(){
    aboutMain.style.display = 'none';
    about1.style.display = 'flex';
    about2.style.display = 'none';

    dot3.style.backgroundColor = '#E51B6C';
    dot2.style.backgroundColor = '#27AAE1';
    dot3.style.width = '3vh';
    dot3.style.height = '3vh';
    dot2.style.width = '4vh';
    dot2.style.height = '4vh';

}

function abSub2(){
    aboutMain.style.display = 'none';
    about1.style.display = 'none';
    about2.style.display = 'flex';

    dot2.style.backgroundColor = '#E51B6C';
    dot3.style.backgroundColor = '#27AAE1';
    dot2.style.width = '3vh';
    dot2.style.height = '3vh';
    dot3.style.width = '4vh';
    dot3.style.height = '4vh';

    proArrow4.style.display = 'none';
}

function conPage(){
    productPage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'block';


    products.style.color = '#E51B6C';
    about.style.color = '#E51B6C';
    contact.style.color = '#27AAE1';

    proArrow.style.display = 'none';
    proArrow2.style.display = 'none';
    proArrow3.style.display = 'none';
    proArrow4.style.display = 'none';
    proArrowOther.style.display = 'none';
    revArrow.style.display = 'none';
    revArrow2.style.display = 'none';
    revArrow3.style.display = 'none';
    revArrow4.style.display = 'none';
    abArrow.style.display = 'none';
    conArrow.style.display = 'block';
}

let conScroll = document.querySelector('#contactScroll');
let conAnimateL1 = document.querySelector('.conAnimateL1');
let conAnimateL2 = document.querySelector('.conAnimateL2');
let conAnimateL3 = document.querySelector('.conAnimateL3');


gsap.to(conAnimateL1, {
    scrollTrigger: {
        scroller: conScroll,
        trigger: conAnimateL1,
        start: "210vh 200vh",
        end: "832vh 275vh",
        scrub: 2,
        toggleActions: "play pause reverse reset"
    }, 
    x:-1600,
    y:1905,
    duration:6
});

gsap.to(conAnimateL2, {
    scrollTrigger: {
        scroller: conScroll,
        trigger: conAnimateL2,
        start: "210vh 200vh",
        end: "832vh 275vh",
        scrub: 3.5,
        toggleActions: "play pause reverse reset"
    }, 
    x:-1600,
    y:1905,
    duration:6
});

gsap.to(conAnimateL3, {
    scrollTrigger: {
        scroller: conScroll,
        trigger: conAnimateL3,
        start: "210vh 200vh",
        end: "832vh 275vh",
        scrub: 2.5,
        toggleActions: "play pause reverse reset"
    }, 
    x:-1600,
    y:1905,
    duration:6
});

/*
let tl = gsap.timeline({
    ScrollTrigger: {
        scroller: conScroll,
        trigger: '.conBgAnimate',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
    }
});

tl.to('.conAnimateL1', {
    x:0,
    y:600
})

*/


function toggleBotNav(){
    if(botNav.className == ('botNav'), conBotArrow.className == ('conArrowContainer')) {
        botNav.className = 'botNav botNav_Up';
        conBotArrow.className = 'conArrowContainer conArrowContainer_Up';
    }
    else {
        botNav.className = 'botNav';
        conBotArrow.className = 'conArrowContainer';
    }
}

function openTwitter(){
    window.open("https://twitter.com/", "_blank");
}
function openInsta(){
    window.open("https://www.instagram.com/", "_blank");
}
function openFacebook(){
    window.open("https://www.facebook.com/", "_blank");
}