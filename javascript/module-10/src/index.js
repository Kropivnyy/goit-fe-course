import theme from './js/theme';
import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';
import './styles.css';

const refs = {
  input: document.querySelector('.js-switch-input'),
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
};

if (localStorage.getItem('theme') === theme.DARK) {
  refs.input.checked = true;
}

const changeBodyCLass = () => {
  refs.body.classList.add(localStorage.getItem('theme'));
};
const changeLocalStorage = (set, del) => {
  localStorage.setItem('theme', set);
  changeBodyCLass();
  refs.body.classList.remove(del);
};
const themeSwitcher = () => {
  if (refs.input.checked) {
    changeLocalStorage(theme.DARK, theme.LIGHT);
  } else {
    changeLocalStorage(theme.LIGHT, theme.DARK);
  }
};

changeBodyCLass();
refs.input.addEventListener('change', themeSwitcher);

const markup = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);
