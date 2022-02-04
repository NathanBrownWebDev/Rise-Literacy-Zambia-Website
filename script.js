const navCheckbox = document.querySelector(".nav-checkbox");
const navHeader = document.querySelector('.header');

//close nav__list after click on link
function closeMenu(){
    navCheckbox.checked = false; 
}
const navListsItemLinks = document.querySelectorAll(".nav__list__item__link");
navListsItemLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
})

//hide or show nav bar based on window scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.pageYOffset <= 75) { //75px is height of nav bar, so white background doesn't show
    navHeader.classList.add("header-show");
    navHeader.classList.remove("header-hide");
  } else {
    navHeader.classList.add("header-hide");
    navHeader.classList.remove("header-show");
    navCheckbox.checked = false; 
  }
  prevScrollpos = currentScrollPos;
};

//---intersection observer-----------------
 

  //change loading options based on window width
if (window.innerWidth < 550) {
  var imageOptions = {
    rootMargin: "600px 0px 600px 0px"
  };
} else if (window.innerWidth >= 550 && window.innerWidth <= 1440) {
    var imageOptions = {
      rootMargin: "1100px 0px 1100px 0px"
    };
} else {
    var imageOptions = {
      rootMargin: "1400px 0px 1400px 0px"
    };
} 

  //lazy load observed classes
const observedElements = document.querySelectorAll('.observed');
  
  //callback function for intersection observer
const callback = (entries, observer) => {
    entries.forEach((entry) => {
    
        if (!entry.isIntersecting) { 
            return;
        }
        if (entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
        if (entry.target.getAttribute('srcset')) {
            entry.target.srcset = entry.target.dataset.srcset;
            observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('commitment-section')) {
            entry.target.classList.add('commitment-background');
            observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('donate-contact-section')) {
            entry.target.classList.add('donate-contact-background');
            observer.unobserve(entry.target);
        }
    })
}

let observer = new IntersectionObserver(callback, imageOptions);

observedElements.forEach((item) => {
    observer.observe(item);
})  
