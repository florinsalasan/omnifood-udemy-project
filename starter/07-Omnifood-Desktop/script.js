const yearEle = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEle.textContent = currentYear;

var menuButton = document.querySelector(".nav-menu-btn")
var navBar = document.querySelector(".navbar")
var navLinks = document.querySelectorAll('.navbar-link')

menuButton.addEventListener('click', () => {
  // Can use classList.toggle instead of creating the if else block
  // if (navBar.classList.contains('nav-open')) {
  //   navBar.classList.remove('nav-open')
  // }
  // else {
  //   console.log(navBar.classList.add("nav-open"))
  // }
  navBar.classList.toggle('nav-open')
})

// Use forEach to apply eventlisteners instead of loops, better practice, or event delegation for an even cleaner method.

navBar.eve

for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', () => {
    if (navBar.classList.contains('nav-open')) {
      navBar.classList.remove('nav-open')
    }
  })
}


///////////////////////////////////////////////////////////
// Smooth scrolling behaviour

const allLinks = document.querySelectorAll("a:link")

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href')

    // Scroll to top of page
    if (href === '#') window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Scroll to other sections of the page
    if (href !== "#" && href.startsWith("#")) {
      const sectionEle = document.querySelector(href)
      sectionEle.scrollIntoView({ behavior: "smooth" })
    }
  })
})

///////////////////////////////////////////////////////////
// Making the navbar sticky

const sectionHeroEle = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  console.log(ent)
  if (ent.isIntersecting === false) {
    sectionHeroEle.classList.add("sticky-active")
    document.querySelector('.navbar').classList.add('sticky')
  }
  if (ent.isIntersecting === true) {
    sectionHeroEle.classList.toggle("sticky-active")
    document.querySelector('.navbar').classList.toggle('sticky')
  }
}, {
  //In the viewport
  root: null,
  // when there is 10% of the hero element left in the viewport
  threshold: 0.1
})
obs.observe(sectionHeroEle)



///////////////////////////////////////////////////////////
// The code below is from the starter code in the optimization folder

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/