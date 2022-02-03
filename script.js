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
  if (prevScrollpos > currentScrollPos || window.pageYOffset <= 75) {
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
};
//---intersection observer-----------------
const images = document.querySelectorAll('.lazy-load');


function preloadImage(image) {
  const dataSource = image.getAttribute('data-src');
  const sourceSet = image.getAttribute('srcset');
  const dataSourceSet = image.getAttribute('data-srcset');
  if(!dataSource && !sourceSet) {
    return;
  } else if (dataSource) {
    image.src = dataSource;
    console.log(image.src);
  } else if (sourceSet) {
    image.srcset = dataSourceSet;
    console.log(image.srcset);
  }
 
};

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px 600px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imageObserver.unobserve(entry.target);
    }
  })
}, imageOptions);

images.forEach((image) => {
  imageObserver.observe(image);
})

// srcsetImages.forEach((srcImage) => {
//   imageObserver.observe(srcImage);
// })