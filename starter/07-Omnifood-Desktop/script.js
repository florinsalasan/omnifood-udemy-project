const yearEle = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEle.textContent = currentYear;

var menuButton = document.querySelector(".nav-menu-btn")
var navBar = document.querySelector(".navbar")
var navLinks = document.querySelectorAll('.navbar-link')

menuButton.addEventListener('click', () => {
  if (navBar.classList.contains('nav-open')) {
    navBar.classList.remove('nav-open')
  }
  else {
    console.log(navBar.classList.add("nav-open"))
  }
})

for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', () => {
    if (navBar.classList.contains('nav-open')) {
      navBar.classList.remove('nav-open')
    }
  })
}