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
// End Global Variables

// Requirment:build the nav
// Start build the nav
function buildNav(){
    sections.forEach(section => {
        //Create the li elements that contained inside the ul
        const navButton = document.createElement('li');
        //Insert the html text to  the li
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        //Append the li to the ul
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

// Requirment:Add class 'active' to section when near top of viewport
// Start of Set the Section class 'active' when it near to the top of viewport
function activeSection (){
    // Select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{
        //Get the boundingrect for each section 
        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport accourding to top and bottom boundings
            //add 'your-active-class' class to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End of Set the Section class 'active' when it near to the top of viewport

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
    activeSection();
})
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


