const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector(".gallery");

const makeGalleryList = images
  .map(
    (img) =>
      `<li><img class = "picture" src = ${img.url} alt = ${img.alt}  width="300"></img></li>`
  );

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryList.join(''));

galleryEl.style.cssText = `list-style: none;
display: flex;
flex-direction: column;
gap: 70px`;