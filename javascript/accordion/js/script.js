const navTabLink = document.querySelectorAll('[data-js="navTabLink"]');

const tabPane = document.querySelectorAll('[data-js="tabPane"]');


navTabLink.forEach((navLink, index) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();

    navTabLink.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    tabPane.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    navLink.classList.add('active');
    tabPane[index].classList.add('active');
  });
});
