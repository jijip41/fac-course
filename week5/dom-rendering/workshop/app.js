import dogs from './dogs.js';

const app = document.querySelector('#app');

const title = document.createElement('h1');
title.textContent = 'Dogs';

const ul = document.createElement('ul');

const dogList = dogs.map((dog) => {
  const li = document.createElement('li');

  const h2 = document.createElement('h2');
  h2.textContent = dog.name;

  const image = document.createElement('img');
  image.src = dog.image;

  li.append(h2, image);
  return li;
});

ul.append(...dogList);

app.append(title, ul);
