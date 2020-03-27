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
const themeSwitcher = () => {
  if (refs.input.checked) {
    localStorage.setItem('theme', theme.DARK);
    changeBodyCLass();
    refs.body.classList.remove(theme.LIGHT);
  } else {
    localStorage.setItem('theme', theme.LIGHT);
    changeBodyCLass();
    refs.body.classList.remove(theme.DARK);
  }
};

changeBodyCLass();
refs.input.addEventListener('change', themeSwitcher);

const markup = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);
