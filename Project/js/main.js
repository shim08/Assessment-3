gsap.registerPlugin(ScrollTrigger);  //Link GSAP ScrollTrigger Plugin

//Define All Default Variables
//Main Content Pages
let homePage = document.querySelector("#homePage");
let productPage = document.querySelector("#productPage");
let aboutPage = document.querySelector("#aboutPage");
let contactPage = document.querySelector("#contactPage");
//Navigation Bar
let navBar = document.querySelector("#navBar");
let navCon = document.querySelector("#navContainer");
//Navigation Arrows
let navArrow = document.querySelector("#navArrow");
let proArrow = document.querySelector("#proArrow");
let proArrow2 = document.querySelector("#proArrow2");
let proArrow3 = document.querySelector("#proArrow3");
let proArrow4 = document.querySelector("#proArrow4");
let proArrowOther = document.querySelector("#proArrowOther");
let abArrow = document.querySelector("#abArrow");
let conArrow = document.querySelector("#conArrow");
let revArrow = document.querySelector("#revArrow");
let revArrow2 = document.querySelector("#revArrow2");
let revArrow3 = document.querySelector("#revArrow3");
let revArrow4 = document.querySelector("#revArrow4");
//Background Line Elements
let lHome = document.querySelector(".lHome");
let lRight = document.querySelector(".lRight");
let lBot = document.querySelector(".lBot");
let lBot2 = document.querySelector(".lBot2");
let lMain = document.querySelector(".lMain");
//Main Content Page Titles
let products = document.querySelector(".products");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
//Product Page Flavours
let flavour1 = document.querySelector("#flavour1");
let flavour2 = document.querySelector("#flavour2");
let flavour3 = document.querySelector("#flavour3");
let flavour4 = document.querySelector("#flavour4");
let proAll = document.querySelector("#productsAll");
//Product Page Reviews
let f1Rev = document.querySelector("#f1Review");
let f2Rev = document.querySelector("#f2Review");
let f3Rev = document.querySelector("#f3Review");
let f4Rev = document.querySelector("#f4Review");
//ScrollTrigger Animted Background Elements
let conAnimate = document.querySelector(".conBgAnimate");
let f1rAnimate = document.querySelector(".f1rBgAnimate");
let f2rAnimate = document.querySelector(".f2rBgAnimate");
let f3rAnimate = document.querySelector(".f3rBgAnimate");
let f4rAnimate = document.querySelector(".f4rBgAnimate");
//About Page Elements
let aboutMain = document.querySelector("#aboutMain");
let about1 = document.querySelector("#about1");
let about2 = document.querySelector("#about2");
let dot2 = document.querySelector(".navDot2");
let dot3 = document.querySelector(".navDot3");
//Contact Page Bottom Navigation Elements
let botNav = document.querySelector(".botNav");
let conBotArrow = document.querySelector(".conArrowContainer");
//Mobile Hamburger Menu Elements
let hamburger = document.querySelector(".hamburger");
let topLine = document.querySelector(".topLine");
let midLine = document.querySelector(".midLine");
let botLine = document.querySelector(".botLine");
//Mobile Options
let options = document.querySelector(".optionsM");

// !THROUGHOUT THE REST OF THIS SCRIPT setTimeout IS USED FREQUENTLY. UNLESS NOTED OTHERWISE, THIS IS TO STAGGER THE APPEARENCE AND DISAPPEARENCE OF ELEMENTS TO FORM FLUID PAGE TRANSITIONS!

//Toggles the Mobile Navigation Menu on Click/Tap
function mobileMenu() {
	options.style.display = "flex";
	midLine.classList.toggle("midLine_toggled");
	topLine.classList.toggle("topLine_toggled");
	botLine.classList.toggle("botLine_toggled");

	setTimeout(function() {
		options.classList.toggle("options_reveal");
	}, 200);
}
//Through the onClick Process in HTML, All 'Unused' Functions Are Triggered
//Many Functions Below Adjust Various CSS Properties as well as Add or Remove Classes From CSS Elements To Adjust These Elements As Required According to the Function

//Function to Reset All Elements to Default and Return to the Initial Page
function returnHome() {
	homePage.style.display = "block";
	homePage.classList.remove("homePage_hidden");
	productPage.style.display = "none";
	productPage.classList.add("productPage_hidden");
	aboutPage.style.display = "none";
	aboutPage.classList.add("aboutPage_initial");
	aboutPage.classList.remove("aboutPage_hidden");
	contactPage.style.display = "none";
	contactPage.classList.add("conPage_initial");

	options.style.display = "none";
	options.classList.remove("options_reveal");
	midLine.classList.remove("midLine_toggled");
	topLine.classList.remove("topLine_toggled");
	botLine.classList.remove("botLine_toggled");
	hamburger.classList.remove("hamburger_reveal");

	flavour1.style.display = "flex";
	flavour1.classList.remove("flavour1_hidden");
	flavour1.classList.remove("flavour1_hidden2");
	flavour2.style.display = "none";
	flavour2.classList.add("flavour2_initial");
	flavour2.classList.remove("flavour2_hidden");
	flavour2.classList.remove("flavour2_hidden2");
	flavour3.style.display = "none";
	flavour3.classList.add("flavour3_initial");
	flavour3.classList.remove("flavour3_hidden");
	flavour3.classList.remove("flavour3_hidden2");
	flavour4.style.display = "none";
	flavour4.classList.add("flavour4_initial");
	flavour4.classList.remove("flavour4_hidden");
	flavour4.classList.remove("flavour4_hidden2");
	proAll.style.display = "none";
	proAll.classList.add("proAll_initial");
	proAll.classList.remove("proAll_hidden");

	f1Rev.style.display = "none";
	f1Rev.classList.add("f1Review_hidden");
	f2Rev.style.display = "none";
	f2Rev.classList.add("f2Review_hidden");
	f3Rev.style.display = "none";
	f3Rev.classList.add("f3Review_hidden");
	f4Rev.style.display = "none";
	f4Rev.classList.add("f4Review_hidden");
	hideRAnimate();

	products.style.color = "#E51B6C";
	about.style.color = "#E51B6C";
	contact.style.color = "#E51B6C";

	navArrow.style.display = "block";
	navArrow.style.left = "72%";
	proArrow.style.display = "none";
	proArrow2.style.display = "none";
	proArrow3.style.display = "none";
	proArrow4.style.display = "none";
	proArrowOther.style.display = "none";
	revArrow.style.display = "none";
	revArrow2.style.display = "none";
	revArrow3.style.display = "none";
	revArrow4.style.display = "none";
	abArrow.style.display = "none";
	conArrow.style.display = "none";

	lHome.style.display = "block";
	lHome.classList.remove("lHome_hidden");
	lBot.style.display = "block";
	lBot.classList.remove("lBot_hidden");
	lBot2.style.display = "none";
	lRight.style.display = "block";
	lRight.classList.remove("lRight_hidden");
	lMain.style.display = "none";

	navBar.style.display = "none";
	navBar.classList.add("navBar_hidden");
	navCon.classList.add("navCon_hidden");
}
//Function to Switch the Intial Navigation Arrow to the Next (I did it this way as i wanted each click to be linked to a different function, which would have been very difficult to do using only 1 navigation arrow. In future, arrows are switched within their respective page swapping function to make the code more concise.)
function swapArrow1() {
	navArrow.style.display = "none";
	proArrow.style.display = "block";
}
//Function Reveals the ScrollTrigger Animated Background Elements for the Product Review Pages. This is Triggered by the Functions that Reveal the Review Pages. (The reason these functions are not automatically visible is because in some page transitions they could be seen at the corners of the screen.)
function revealRAnimate() {
	f1rAnimate.classList.add("f1rBgAnimate_reveal");
	f2rAnimate.classList.add("f2rBgAnimate_reveal");
	f3rAnimate.classList.add("f3rBgAnimate_reveal");
	f4rAnimate.classList.add("f4rBgAnimate_reveal");
}
//Function Undo's What the Previous Does. This is Triggered Below When Required.
function hideRAnimate() {
	f1rAnimate.classList.remove("f1rBgAnimate_reveal");
	f2rAnimate.classList.remove("f2rBgAnimate_reveal");
	f3rAnimate.classList.remove("f3rBgAnimate_reveal");
	f4rAnimate.classList.remove("f4rBgAnimate_reveal");
}
//Funtion to Reveal the Products Page and Hide the Home Page. Ensures Only The Required Elements Are Shown.
function proNavEx() {
	homePage.style.display = "none";
	navBar.style.display = "block";
	navBar.classList.remove("navBar_hidden");
	navCon.classList.remove("navCon_hidden");
	homePage.classList.add("homePage_hidden");
	aboutPage.classList.add("aboutPage_initial");
	aboutPage.classList.remove("aboutPage_hidden");
	contactPage.classList.add("conPage_initial");

	conAnimate.classList.remove("conBgAnimate_reveal");

	products.style.color = "#27AAE1";
	about.style.color = "#E51B6C";
	contact.style.color = "#E51B6C";

	flavour1.style.display = "flex";
	flavour1.classList.remove("flavour1_hidden");
	flavour1.classList.remove("flavour1_hidden2");
	flavour2.style.display = "none";
	flavour2.classList.add("flavour2_initial");
	flavour2.classList.remove("flavour2_hidden");
	flavour2.classList.remove("flavour2_hidden2");
	flavour3.style.display = "none";
	flavour3.classList.add("flavour3_initial");
	flavour3.classList.remove("flavour3_hidden");
	flavour3.classList.remove("flavour3_hidden2");
	flavour4.style.display = "none";
	flavour4.classList.add("flavour4_initial");
	flavour4.classList.remove("flavour4_hidden");
	flavour4.classList.remove("flavour4_hidden2");
	proAll.style.display = "none";
	proAll.classList.add("proAll_initial");
	proAll.classList.remove("proAll_hidden");

	proArrow.style.display = "block";
	proArrow2.style.display = "none";
	proArrow3.style.display = "none";
	proArrow4.style.display = "none";
	proArrowOther.style.display = "none";
	revArrow.style.display = "none";
	revArrow2.style.display = "none";
	revArrow3.style.display = "none";
	revArrow4.style.display = "none";
	abArrow.style.display = "none";
	conArrow.style.display = "none";

	f1Rev.style.display = "none";
	f1Rev.classList.add("f1Review_hidden");
	f2Rev.style.display = "none";
	f2Rev.classList.add("f2Review_hidden");
	f3Rev.style.display = "none";
	f3Rev.classList.add("f3Review_hidden");
	f4Rev.style.display = "none";
	f4Rev.classList.add("f4Review_hidden");

	lHome.style.display = "none";
	lHome.classList.add("lHome_hidden");
	lBot.style.display = "none";
	lBot.classList.add("lBot_hidden");
	lBot2.style.display = "block";
	lRight.style.display = "none";
	lRight.classList.add("lRight_hidden");
	lMain.style.display = "block";
}
//Function That Handles Some Elements Required When Returning to The Products Page From the Navigation Bar, But Not When Accessing The Products Page Through the Navigation Arrow. This is Triggered by the Below Function, 'ProNav'.
function toggleHome() {
	homePage.classList.add("homePage_hidden");
	aboutPage.classList.add("aboutPage_initial");
	lHome.classList.add("lHome_hidden");
	lBot.classList.add("lBot_hidden");
	lRight.classList.add("lRight_hidden");
	navArrow.style.left = "90%";
	productPage.style.display = "block";
	navBar.style.display = "block";
	revealRAnimate();

	options.style.display = "none";
	options.classList.remove("options_reveal");

	setTimeout(function() {
		homePage.style.display = "none";

		productPage.classList.remove("productPage_hidden");

		midLine.classList.remove("midLine_toggled");
		topLine.classList.remove("topLine_toggled");
		botLine.classList.remove("botLine_toggled");
		hamburger.classList.add("hamburger_reveal");

		conAnimate.classList.remove("conBgAnimate_reveal");

		navBar.classList.remove("navBar_hidden");
		navCon.classList.remove("navCon_hidden");

		lHome.style.display = "none";
		lBot.style.display = "none";
		lBot2.style.display = "block";
		lRight.style.display = "none";
		lMain.style.display = "block";
		products.style.color = "#27AAE1";

	}, 600);
	setTimeout(swapArrow1, 600);
}
//Function Triggering Both the Intial Products Page Function and The 'toggleHome' Function. Triggered When Accessing Products From the Navigation Bar.
function proNav() {
	proNavEx();
	toggleHome();
}
//Funtion to Reveal the Next Flavour. Ensures Only The Required Elements Are Shown.
function proPage2() {
	flavour1.classList.add("flavour1_hidden");
	flavour2.style.display = "flex";
	flavour2.classList.remove("flavour2_hidden");

	setTimeout(function() {
		flavour2.classList.remove("flavour2_initial");
		flavour1.style.display = "none";
	}, 200);
	proArrow.style.display = "none";
	proArrow2.style.display = "block";
}
//Funtion to Reveal the Next Flavour. Ensures Only The Required Elements Are Shown.
function proPage3() {
	flavour2.classList.add("flavour2_hidden");
	flavour3.style.display = "flex";

	setTimeout(function() {
		flavour3.classList.remove("flavour3_initial");
		flavour2.style.display = "none";
	}, 200);
	flavour3.classList.remove("flavour3_hidden");
	proArrow2.style.display = "none";
	proArrow3.style.display = "block";
}
//Funtion to Reveal the Next Flavour. Ensures Only The Required Elements Are Shown.
function proPage4() {
	flavour3.classList.add("flavour3_hidden");
	flavour4.style.display = "flex";

	setTimeout(function() {
		flavour4.classList.remove("flavour4_initial");
		flavour3.style.display = "none";
	}, 200);
	proArrow3.style.display = "none";
	proArrowOther.style.display = "block";
}
//Funtion to Reveal the All Products Page. Ensures Only The Required Elements Are Shown.
function proPageAll() {
	flavour4.classList.add("flavour4_hidden");
	proAll.style.display = "flex";

	setTimeout(function() {
		proAll.classList.remove("proAll_initial");
		flavour4.style.display = "none";
	}, 200);
	proArrowOther.style.display = "none";
	proArrow4.style.display = "block";
}
//Funtion to Reveal the First Review Page. Ensures Only The Required Elements Are Shown.
function proRev1() {
	f1Rev.style.display = "flex";
	flavour1.classList.add("flavour1_hidden2");
	proAll.style.display = "none";

	setTimeout(function() {
		f1Rev.classList.remove("f1Review_hidden");
		flavour1.style.display = "none";
	}, 200);
	proArrow.style.display = "none";
	revArrow.style.display = "block";
}
//Funtion to Return to Products from the First Review Page. Ensures Only The Required Elements Are Shown.
function revReturn1() {
	flavour1.style.display = "flex";
	f1Rev.classList.add("f1Review_hidden");

	setTimeout(function() {
		f1Rev.style.display = "none";
		flavour1.classList.remove("flavour1_hidden2");

	}, 500);
	proArrow.style.display = "block";
	revArrow.style.display = "none";
}
//Funtion to Reveal the Second Review Page. Ensures Only The Required Elements Are Shown.
function proRev2() {
	f2Rev.style.display = "flex";
	flavour2.classList.add("flavour2_hidden2");
	proAll.style.display = "none";

	setTimeout(function() {
		f2Rev.classList.remove("f2Review_hidden");
		flavour2.style.display = "none";
	}, 200);
	proArrow2.style.display = "none";
	revArrow2.style.display = "block";
}
//Funtion to Return to Products from the Second Review Page. Ensures Only The Required Elements Are Shown.
function revReturn2() {
	flavour2.style.display = "flex";
	f2Rev.classList.add("f2Review_hidden");

	setTimeout(function() {
		f2Rev.style.display = "none";
		flavour2.classList.remove("flavour2_hidden2");

	}, 500);
	proArrow2.style.display = "block";
	revArrow2.style.display = "none";
}
//Funtion to Reveal the Third Review Page. Ensures Only The Required Elements Are Shown.
function proRev3() {
	f3Rev.style.display = "flex";
	flavour3.classList.add("flavour3_hidden2");
	proAll.style.display = "none";

	setTimeout(function() {
		f3Rev.classList.remove("f3Review_hidden");
		flavour3.style.display = "none";
	}, 200);
	proArrow3.style.display = "none";
	revArrow3.style.display = "block";
}
//Funtion to Return to Products from the Third Review Page. Ensures Only The Required Elements Are Shown.
function revReturn3() {
	flavour3.style.display = "flex";
	f3Rev.classList.add("f3Review_hidden");

	setTimeout(function() {
		f3Rev.style.display = "none";
		flavour3.classList.remove("flavour3_hidden2");
	}, 500);
	proArrow3.style.display = "block";
	revArrow3.style.display = "none";
}
//Funtion to Reveal the Fourth Review Page. Ensures Only The Required Elements Are Shown.
function proRev4() {
	f4Rev.style.display = "flex";
	flavour4.classList.add("flavour4_hidden2");
	proAll.style.display = "none";

	setTimeout(function() {
		f4Rev.classList.remove("f4Review_hidden");
		flavour4.style.display = "none";
	}, 200);
	proArrowOther.style.display = "none";
	revArrow4.style.display = "block";
}
//Funtion to Return to Products from the Fourth Review Page. Ensures Only The Required Elements Are Shown.
function revReturn4() {
	flavour4.style.display = "flex";
	f4Rev.classList.add("f4Review_hidden");

	setTimeout(function() {
		f4Rev.style.display = "none";
		flavour4.classList.remove("flavour4_hidden2");

	}, 500);
	proArrowOther.style.display = "block";
	revArrow4.style.display = "none";
}
//Define All Variable Required For the GSAP Background Animations on the Products Pages. These are Defined Here To Clearly Represent That They Are Related to This Animation.
const bottleM = gsap.utils.toArray("#bottleM")[0];
const bottleP = gsap.utils.toArray("#bottleP")[0];
const bottleA = gsap.utils.toArray("#bottleA")[0];
const bottleL = gsap.utils.toArray("#bottleL")[0];

const melon1Move = gsap.utils.toArray(".melon1")[0];
const melon2Move = gsap.utils.toArray(".melon2")[0];
const melon3Move = gsap.utils.toArray(".melon3")[0];

const peach1Move = gsap.utils.toArray(".peach1")[0];
const peach2Move = gsap.utils.toArray(".peach2")[0];
const peach3Move = gsap.utils.toArray(".peach3")[0];

const appleFrontMove = gsap.utils.toArray(".appleFront")[0];
const apple0Move = gsap.utils.toArray(".apple0")[0];
const apple1Move = gsap.utils.toArray(".apple1")[0];
const apple2Move = gsap.utils.toArray(".apple2")[0];
const apple3Move = gsap.utils.toArray(".apple3")[0];

const lemon1Move = gsap.utils.toArray(".lemon1")[0];
const lemon2Move = gsap.utils.toArray(".lemon2")[0];
const lemon3Move = gsap.utils.toArray(".lemon3")[0];
const lemon4Move = gsap.utils.toArray(".lemon4")[0];
//This Event Listener is Able to Track the Position of the Cursor in Two Ways. Applying These To the Background Elements Allows them to Move Relative to the Cursor. The First Two Variables (mouseX, mouseY) are Applied to the Background Elements and Rotate Them Towards the Cursor Quite Aggressively. The Second Two (mouseXb, mouseYb) are Applied to the Bottle Product Images and Rotate These Images Less Aggressively.
window.addEventListener("mousemove", (event) => {
	const mouseX = -((window.innerWidth / 2) - event.pageX) / 40;
	const mouseY = ((window.innerHeight / 2) - event.pageY) / 20;

	const mouseXb = -((window.innerWidth / 2) - event.pageX) / 80;
	const mouseYb = ((window.innerHeight / 2) - event.pageY) / 40;
//GSAP Animation is Applied to the Bottles. Defining the Duration, Ease, and Rotation Properties Using The Second Two Constants Above. 
	gsap.to(bottleM, {
		duration: 1,
		rotationY: mouseXb,
		rotationX: mouseYb,
		ease: "power2.out"
	});
	gsap.to(bottleP, {
		duration: 1,
		rotationY: mouseXb,
		rotationX: mouseYb,
		ease: "power2.out"
	});
	gsap.to(bottleA, {
		duration: 1,
		rotationY: mouseXb,
		rotationX: mouseYb,
		ease: "power2.out"
	});
	gsap.to(bottleL, {
		duration: 1,
		rotationY: mouseXb,
		rotationX: mouseYb,
		ease: "power2.out"
	});
//GSAP Animation is Applied to the Background Elements. Defining the Duration, Ease, and Rotation Properties Using The First Two Constants Above. 
	gsap.to(melon1Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(melon2Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(melon3Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(peach1Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(peach2Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(peach3Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(appleFrontMove, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(apple0Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(apple1Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(apple2Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(apple3Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(lemon1Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(lemon2Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(lemon3Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
	gsap.to(lemon4Move, {
		duration: 0.5,
		rotationY: mouseX,
		rotationX: mouseY,
		ease: "power2.out"
	});
});
// Background Scroll Animation for all 4 product reviews pages
// Define all product reviews scrollable areas 
let f1rScroll = document.querySelector("#f1RScroll");
let f2rScroll = document.querySelector("#f2RScroll");
let f3rScroll = document.querySelector("#f3RScroll");
let f4rScroll = document.querySelector("#f4RScroll");
// Define all product review background animated elements for flavour 1 reviews. Build and apply scrolltrigger animations. 
let f1rAnimateL1 = document.querySelector(".f1rAnimateL1");
let f1rAnimateL2 = document.querySelector(".f1rAnimateL2");
let f1rAnimateL3 = document.querySelector(".f1rAnimateL3");
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller. There are Three gsap.to Functions for Each Scroller as There Are Three Layers of Animated Elements.
gsap.to(f1rAnimateL1, {
	scrollTrigger: {
		scroller: f1rScroll,
		trigger: f1rAnimateL1,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f1rAnimateL2, {
	scrollTrigger: {
		scroller: f1rScroll,
		trigger: f1rAnimateL2,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 3.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f1rAnimateL3, {
	scrollTrigger: {
		scroller: f1rScroll,
		trigger: f1rAnimateL3,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
// Define all product review background animated elements for flavour 2 reviews. Build and apply scrolltrigger animations. 
let f2rAnimateL1 = document.querySelector(".f2rAnimateL1");
let f2rAnimateL2 = document.querySelector(".f2rAnimateL2");
let f2rAnimateL3 = document.querySelector(".f2rAnimateL3");
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f2rAnimateL1, {
	scrollTrigger: {
		scroller: f2rScroll,
		trigger: f2rAnimateL1,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f2rAnimateL2, {
	scrollTrigger: {
		scroller: f2rScroll,
		trigger: f2rAnimateL2,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 3.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f2rAnimateL3, {
	scrollTrigger: {
		scroller: f2rScroll,
		trigger: f2rAnimateL3,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
// Define all product review background animated elements for flavour 3 reviews. Build and apply scrolltrigger animations.
let f3rAnimateL1 = document.querySelector(".f3rAnimateL1");
let f3rAnimateL2 = document.querySelector(".f3rAnimateL2");
let f3rAnimateL3 = document.querySelector(".f3rAnimateL3");
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f3rAnimateL1, {
	scrollTrigger: {
		scroller: f3rScroll,
		trigger: f3rAnimateL1,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f3rAnimateL2, {
	scrollTrigger: {
		scroller: f3rScroll,
		trigger: f3rAnimateL2,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 3.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f3rAnimateL3, {
	scrollTrigger: {
		scroller: f3rScroll,
		trigger: f3rAnimateL3,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
// Define all product review background animated elements for flavour 4 reviews. Build and apply scrolltrigger animations.
let f4rAnimateL1 = document.querySelector(".f4rAnimateL1");
let f4rAnimateL2 = document.querySelector(".f4rAnimateL2");
let f4rAnimateL3 = document.querySelector(".f4rAnimateL3");
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f4rAnimateL1, {
	scrollTrigger: {
		scroller: f4rScroll,
		trigger: f4rAnimateL1,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f4rAnimateL2, {
	scrollTrigger: {
		scroller: f4rScroll,
		trigger: f4rAnimateL2,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 3.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(f4rAnimateL3, {
	scrollTrigger: {
		scroller: f4rScroll,
		trigger: f4rAnimateL3,
		start: "287vh 277vh",
		end: "419vh 180vh",
		scrub: 2.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//Function That Reveals The About Page Whilst Hiding All Other Elements.
function abPage() {
	aboutPage.style.display = "block";
	conAnimate.classList.remove("conBgAnimate_reveal");
	hideRAnimate();
	productPage.classList.add("productPage_hidden");
	proAll.classList.add("proAll_initial");
	contactPage.classList.add("conPage_initial");

	options.style.display = "none";
	options.classList.remove("options_reveal");
	midLine.classList.remove("midLine_toggled");
	topLine.classList.remove("topLine_toggled");
	botLine.classList.remove("botLine_toggled");

	products.style.color = "#E51B6C";
	about.style.color = "#27AAE1";
	contact.style.color = "#E51B6C";

	setTimeout(function() {
		aboutPage.classList.remove("aboutPage_initial");
		aboutPage.classList.remove("aboutPage_hidden");
		contactPage.style.display = "none";

		productPage.style.display = "none";
	}, 400);

	aboutMain.style.display = "flex";
	about1.style.display = "none";
	about2.style.display = "none";

	proArrow.style.display = "none";
	proArrow2.style.display = "none";
	proArrow3.style.display = "none";
	proArrow4.style.display = "none";
	proArrowOther.style.display = "none";
	revArrow.style.display = "none";
	revArrow2.style.display = "none";
	revArrow3.style.display = "none";
	revArrow4.style.display = "none";
	abArrow.style.display = "block";
	conArrow.style.display = "none";
}
//Function That Hides All About Page Elements Aside From the First Sub Page.
function abSub1() {
	aboutMain.style.display = "none";
	about1.style.display = "flex";
	about2.style.display = "none";

	dot3.style.backgroundColor = "#E51B6C";
	dot2.style.backgroundColor = "#27AAE1";
	dot3.style.width = "3vh";
	dot3.style.height = "3vh";
	dot2.style.width = "4vh";
	dot2.style.height = "4vh";
}
//Function That Hides All About Page Elements Aside From the Second Sub Page.
function abSub2() {
	aboutMain.style.display = "none";
	about1.style.display = "none";
	about2.style.display = "flex";

	dot2.style.backgroundColor = "#E51B6C";
	dot3.style.backgroundColor = "#27AAE1";
	dot2.style.width = "3vh";
	dot2.style.height = "3vh";
	dot3.style.width = "4vh";
	dot3.style.height = "4vh";

	proArrow4.style.display = "none";
}
//Function Revealing the Contact Page And Hiding All Elements That Are Not Required.
function conPage() {
	conAnimate.classList.remove("conBgAnimate_reveal");
	hideRAnimate();
	contactPage.style.display = "block";
	aboutPage.classList.add("aboutPage_hidden");
	productPage.classList.add("productPage_hidden");
	products.style.color = "#E51B6C";
	about.style.color = "#E51B6C";
	contact.style.color = "#27AAE1";

	options.style.display = "none";
	options.classList.remove("options_reveal");
	midLine.classList.remove("midLine_toggled");
	topLine.classList.remove("topLine_toggled");
	botLine.classList.remove("botLine_toggled");

	setTimeout(function() {
		contactPage.classList.remove("conPage_initial");
		aboutPage.style.display = "none";
		productPage.style.display = "none";
	}, 600);
	setTimeout(function() {
		conAnimate.classList.add("conBgAnimate_reveal");
	}, 1400);

	proArrow.style.display = "none";
	proArrow2.style.display = "none";
	proArrow3.style.display = "none";
	proArrow4.style.display = "none";
	proArrowOther.style.display = "none";
	revArrow.style.display = "none";
	revArrow2.style.display = "none";
	revArrow3.style.display = "none";
	revArrow4.style.display = "none";
	abArrow.style.display = "none";
	conArrow.style.display = "block";
}
// Define all Contact Page background animated elements for flavour 3 reviews. Build and apply scrolltrigger animations.
let conScroll = document.querySelector("#contactScroll");
let conAnimateL1 = document.querySelector(".conAnimateL1");
let conAnimateL2 = document.querySelector(".conAnimateL2");
let conAnimateL3 = document.querySelector(".conAnimateL3");
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(conAnimateL1, {
	scrollTrigger: {
		scroller: conScroll,
		trigger: conAnimateL1,
		start: "210vh 200vh",
		end: "832vh 275vh",
		scrub: 2,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(conAnimateL2, {
	scrollTrigger: {
		scroller: conScroll,
		trigger: conAnimateL2,
		start: "210vh 200vh",
		end: "832vh 275vh",
		scrub: 3.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//GSAP Animations That Change the Position of the Animated Background Elements Based on the Position of the Targeted Scroller.
gsap.to(conAnimateL3, {
	scrollTrigger: {
		scroller: conScroll,
		trigger: conAnimateL3,
		start: "210vh 200vh",
		end: "832vh 275vh",
		scrub: 2.5,
		toggleActions: "play pause reverse reset"
	},
	x: -1600,
	y: 1905,
	duration: 6
});
//Function That Toggles The Bottom Navigation Section on The Contact Page. This is Triggered with onClick in HTML On A Small Handle On the Contact Page
function toggleBotNav() {
	if (botNav.className == ("botNav"), conBotArrow.className == ("conArrowContainer")) {
		botNav.className = "botNav botNav_Up";
		conBotArrow.className = "conArrowContainer conArrowContainer_Up";
	} else {
		botNav.className = "botNav";
		conBotArrow.className = "conArrowContainer";
	}
}
//Three Very Simple Functions That Open the Respective Social Media Website in a New Window. These Are Triggered With onClick in HTML When the User Clicks on The Respective Social Media Icon.
function openTwitter() {
	window.open("https://twitter.com/", "_blank");
}

function openInsta() {
	window.open("https://www.instagram.com/", "_blank");
}

function openFacebook() {
	window.open("https://www.facebook.com/", "_blank");
}