import dogs from './dogs.js';

console.log(dogs);
const app = document.querySelector('#app');

const title = document.createElement('h1');
title.textContent = 'Dogs';

const ul = document.createElement('ul');

const dogList = dogs.map((dog) => {
  const li = document.createElement('li');
  li.textContent = dog.name;
  return li;
});

ul.append(...dogList);

app.append(title, ul);
