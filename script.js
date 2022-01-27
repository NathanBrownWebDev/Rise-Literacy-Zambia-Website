//hide/show nav bar on scroll
const navCheckbox = document.querySelector(".nav-checkbox");
const navHeader = document.querySelector('.header');

let prevScrollpos = window.pageYOffset;

//close nav menu after click on link
function closeMenu(){
    navCheckbox.checked = false; 
}
const navListsItemLinks = document.querySelectorAll(".nav__list__item__link");
navListsItemLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
})
//hide or show nav bar based on window scroll
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.pageYOffset <= 5) {
    navHeader.classList.add("header-show");
    navHeader.classList.remove("header-hide");
//   } else if (for (let link of navListsItemLinks) {link.clicked == true})  {
//     navHeader.classList.add("header-hide");
//     navHeader.classList.remove("header-show");
//     navCheckbox.checked = false;
//     console.log(link);
  } else {
    navHeader.classList.add("header-hide");
    navHeader.classList.remove("header-show");
    navCheckbox.checked = false; 
  }
  prevScrollpos = currentScrollPos;
}
//---intersection observer-----------------
