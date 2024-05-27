import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

renderGallery(galleryItems);

function renderGallery(galleryItems) {
  const markup = galleryItems
    .map(
      ({ original, preview, description }) => ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
}
const lightBox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',

  captionDelay: 250,
});
