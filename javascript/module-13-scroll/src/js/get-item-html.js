import refs from './refs';
import microTemplate from './micro-template';

const templateHTML = refs.itemTemplate.innerHTML;

export default function getItemHTML(photo) {
  return microTemplate(templateHTML, photo);
}
