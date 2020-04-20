import resultTemplate from '../templates/search-result.hbs';
import countryTemplate from '../templates/country.hbs';
import refs from './refs';
import showErrorNotify from './show-error-notify.js';

export default function renderResultMarkup(data) {
  refs.country.innerHTML = '';
  if (data.length === 1) {
    refs.country.innerHTML = countryTemplate(data);
  } else if (data.length >= 2 && data.length <= 10) {
    refs.country.innerHTML = resultTemplate(data);
  } else if (data.length > 10) {
    showErrorNotify(
      'Too many matches found. Please enter a more specific query!',
    );
  }
}
