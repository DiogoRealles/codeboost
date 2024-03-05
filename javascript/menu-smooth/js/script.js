const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');
const navbar = document.querySelector('[data-js="navbar"]');

function openDropdown(e){
  e.preventDefault();
  dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);

const allLinks = document.querySelectorAll('a[href^="#"]');

function handleLink(e){
  e.preventDefault();
  const href= e.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  
  const sectioTop = section.offsetTop;
  window.scrollTo({
    behavior: 'smooth',
    top: sectioTop - 78
  });
}

allLinks.forEach((item) => {
  item.addEventListener('click', handleLink);
});

function fixedMenu(){
  if(window.pageYOffset > 80){
    navbar.classList.add('fixed-menu');
  } else {
    navbar.classList.remove('fixed-menu');
  }
}

document.addEventListener('scroll', fixedMenu);

const btnMenu = document.querySelector('[data-js="btn-menu"]');
const overlayMenu = document.querySelector('[data-js="overlay"]');

function openMenuMobile(){
  document.documentElement.classList.toggle('menu-opened');
}

btnMenu.addEventListener('click', openMenuMobile);

overlayMenu.addEventListener('click', openMenuMobile);