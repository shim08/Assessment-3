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
let abArrow = document.querySelector('#abArrow');
let conArrow = document.querySelector('#conArrow');

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

let aboutMain = document.querySelector('#aboutMain');
let about1 = document.querySelector('#about1');
let about2 = document.querySelector('#about2');
let explore = document.querySelector('.explore');
let dot1 = document.querySelector('.navDot1');
let dot2 = document.querySelector('.navDot2');
let dot3 = document.querySelector('.navDot3');

let botNav = document.querySelector('.botNav')

function returnHome(){
    homePage.style.display = 'block';
    productPage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'none';

    flavour1.style.display = 'flex';
    flavour2.style.display = 'none';
    flavour3.style.display = 'none';
    flavour4.style.display = 'none';

    products.style.color = '#E51B6C';
    about.style.color = '#E51B6C';
    contact.style.color = '#E51B6C';

    navArrow.style.display = 'block';
    navArrow.style.left = '72%';
    proArrow.style.display = 'none';
    proArrow2.style.display = 'none';
    proArrow3.style.display = 'none';
    proArrow4.style.display = 'none';
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
    proArrow4.style.display = 'block';
}

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
    abArrow.style.display = 'block';
    conArrow.style.display = 'none';
}

/*function abNav(){
    returnHome();
    toggleHome();
    abSub1();
    abPage();
    proArrow.style.display = 'none';
}*/

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
    abArrow.style.display = 'none';
    conArrow.style.display = 'block';
}

function toggleBotNav(){
    if(botNav.className == ('botNav')) {
        botNav.className = 'botNav botNav_Up';
    }
    else {
        botNav.className = 'botNav';
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