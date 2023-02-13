/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Start Global Variables

const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
const menuLinks = document.getElementsByClassName('navbar__menu');
const activeClass = 'your-active-class';
const menuLinkHover = 'menu__link__hover';
// End Global Variables

// Requirment:build the nav
// Start build the nav
function buildNav(){
    sections.forEach(section => {
        //Create the li elements that contained inside the ul
         navButton = document.createElement('li');
         //Modify Code as per Review to include a more dynamic way rather then hardcode href
         let links = document.createElement("a");
         links.classList.add("menu__link");
         links.textContent = section.attributes.getNamedItem("data-nav").value;
         links.setAttribute("data-link", section.attributes.getNamedItem("id").value);

        navButton.appendChild(links);

        navList.appendChild(navButton);

        //scrollBehavior Function Invoke
        scrollBehavior(navButton, section);
    });
    //Append the ul to the nav
    navBar.appendChild(navList);
}

//Build Nav Function Invoke
buildNav();

//End build the nav


// Requirement:Scroll to anchor ID using scrollTO event
// Start of Scroll to anchor ID using scrollTO event
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}
// End of Scroll to anchor ID using scrollTO event

//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    let scroll_Bar_Pos = document.documentElement.scrollTop;
    for (section of sections) {
        if (scroll_Bar_Pos >= section.offsetTop - 350 &&
            scroll_Bar_Pos <= section.offsetTop + section.offsetHeight - 380) {
            viewedSectionId = section.attributes.id.value;
            removeStyle();
            document.getElementById(viewedSectionId).classList.add(activeClass);
            addStyle(viewedSectionId);
        };
    };
});

function removeStyle() {
    for (section of sectionList) {
        section.classList.remove(activeClass);
    };
    for (menuLink of menuLinks) {
        menuLink.classList.remove(menuLinkHover);
    };
};

function addStyle(id) {
    for (menuLink of menuLinks) {
        if (menuLink.attributes.getNamedItem("data-link").value === id) {
            menuLink.classList.add(menuLinkHover);
        };
    };
};

//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 

// Requirement:Start of GO UP Button
//Create the div element for the button 
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
// Scroll to top of the Landing Page using scrollTO event
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});


