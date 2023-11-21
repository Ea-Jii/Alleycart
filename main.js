// if dropdown menu is shown then show the close icon else bars icon wil show and the dropdown is hidden

const menuToggle = document.getElementById('menu__btn');
const menuDropdown = document.querySelector('.dropdown');
const toggleClose = document.querySelector('.menu__icon');
const buttonLabel = document.querySelector('.btn__label');

const toggleButton = () => {
  menuDropdown.classList.toggle('open');
  const isOpen = menuDropdown.classList.contains('open');

  // Update the icon classes
  toggleClose.className = isOpen
    ? 'fas fa-times close__icon'
    : 'fas fa-align-right menu__icon';

  // Toggle the button label text
  if (isOpen) {
    buttonLabel.textContent = '';
  } else {
    buttonLabel.textContent = 'Menu';
  }
};
