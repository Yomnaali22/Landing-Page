/*
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
/*
 * Define Global Variables
*/

//build navbar items
//storing sections inside variable to iterate over it
let sections = document.querySelectorAll('section');
let fragment = new DocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
*/

//build navbar items
/*
* Declaring the variable counter to add 1 to the id attribute each time the loop iterates.
* Each time the loop iterate it creates a nav items equal to the number of sections and
assign an id attribute to each anchor tag starting from 0. The id will be used for the scrolling later on.
*/
let counter = 0;
sections.forEach(section => {
	const fragment = document.createDocumentFragment();
	const uList = document.querySelector('.nav_List');
    const li = document.createElement('li');
    const link = document.createElement('a');
	const nav  = section.getAttribute('data-nav');
	const id   = section.getAttribute('id');
	link.textContent = nav;
	li.appendChild(link);
	link.setAttribute('href', '#' + id);
	link.setAttribute('id', counter);
	uList.appendChild(li);
	fragment.appendChild(li);
	uList.appendChild(fragment);
	counter = counter + 1;
	});

/*
* This function takes section as parameter and gets the section id adding x to it.
* x is the nummber that will increase by one each time the loop iterate creating different number
* For the the section. then the loop checks each time it iterate, it checks the section visbility
* if it's visable the loop will add your-active-class to the section class, if it's not visable
* the class will be removed and the same goes for the nav items.
*/
	const toggleActiveState = (section, navItem) => {
		for(let x = 1; x < 5; x++){
			let navItem = document.querySelectorAll('a');
			section = document.getElementById("section" + x);
			navItem = document.getElementById("section" + x);
			rect = section.getBoundingClientRect();
			if (rect.top >=-10 && rect.top <= 500){
				section.classList.add("your-active-class")
				navItem.classList.add("item-active-class")
			}else{
				section.classList.remove("your-active-class")
				navItem.classList.remove("item-active-class")
			}};

		}
/*
* Creating an intersection observer to observe each section passing on the screen.
* The sections parameter is set to each section in the forEach loop.
* Inside the for each loop the variable section.taget.src is getting the section
data-nav attribute informatio each time the loop iterates and then unobserve the target.
*/
		options = {threshold: 1.0};
		let observer = new IntersectionObserver(
			(sections, observer) => {
				sections.forEach(section => {
					section.target.src = section.target.dataset.src;
					observer.unobserve(section.target);
				});
			});

		document.querySelectorAll("section").forEach(section => { observer.observe(section) });
/*
scrolling when function is called back adding the classes if the section is detected on the screen
and removing the classes if the section isn't visible on the screen.
*/		window.addEventListener("scroll", toggleActiveState);


/*
* this function takes event as a parameter and then prevent the default action of the event
by using preventDefault()function.
* event.target is used to target the id of each section and then assign it to variable section.
* the event is the anchor tag jumping to the section and instead of jumping right to the section,
* scrollIntoView function is used to create smooth scrolling effect for each section.
*/
		function scrollToSection(event){
			event.preventDefault();
			let section = sections[event.target.id];
			section.scrollIntoView({behavior: "smooth", block: "center"});
		}
/*
iterating over each anchor tag while adding the scrolling action to them
by calling the scrollToSection function;
*/
        let navlink = document.querySelectorAll('a');


		for(let x = 0; x < navlink.length; x++){
		navlink[x].addEventListener("click", scrollToSection);
	}


