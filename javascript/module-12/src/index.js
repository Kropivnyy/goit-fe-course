import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountries from './js/fetch-countries';
import renderResultMarkup from './js/render-result-markup';
import showErrorNotify from './js/show-error-notify.js';

refs.input.addEventListener(
  'input',
  debounce(() => {
    fetchCountries(refs.input.value)
      .then(renderResultMarkup)
      .catch(() => {
        showErrorNotify('No matches found! Try again');
      });
  }, 500),
);

refs.country.addEventListener('click', event => {
  refs.input.value = '';
  fetchCountries(event.target.textContent.trim()).then(renderResultMarkup);
});
