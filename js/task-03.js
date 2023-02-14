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

const list = document.querySelector('.gallery');

const newImages = images
  .map(image => `<li><img src=${image.url} alt= ${image.alt} width= 354px />  </li>`)
  .join(' '); //Biorę każdy element IMAGES i z kazdym z nich robię <li></li>. Otrzymuję tablicę złozoną z 3 elementów <li></li>.Musze dać JOIN zeby to połączyć w string, który moge wrzucić do insertAdjectHTML
// console.log(newImages);

list.insertAdjacentHTML('beforeend', newImages); // beforeend - wewnątrz elem(UL), po wszystkich dzieciach

// stylizacja LIST a nie newImages
list.style.display = 'flex';
list.style.listStyleType = 'none';
list.style.gap = '20px';
list.style.flexDirection = 'column';
list.style.alignItems = 'center';