import dogs from './dogs.js';
import createEl from './create-element.js';

const app = document.querySelector('#app');

// const title = createEl('h1', {}, 'Dogs');
// const title = document.createElement('h1');
// title.textContent = 'Dogs';

// const ul = document.createElement('ul');

// const dogList = dogs.map((dog) => {
// const h2 = createEl('h2', { textContent: dog.name });
// const h2 = document.createElement('h2');
// h2.textContent = dog.name;

// const image = createEl('img', {
//   src: dog.image,
//   alt: '',
//   width: 500,
//   height: 300,
// });
// const image = document.createElement('img');
// image.src = dog.image;

// const li = createEl('li', {}, h2, image);
// const li = document.createElement('li');
// li.append(h2, image);
// console.log(li);

//   return `<li>
//   <h2>${dog.name}</h2>
//   <img src="${dog.image}"></img>
//   </li>`;
// });

// app.innerHTML = `
// <h1>Dogs</h1>
// <ul>
// ${dogList}
// </ul>
// `;
// const ul = createEl('ul', {}, ...dogList);
// // ul.append(...dogList);

// app.append(title, ul);

// Challenge3- stretch
// Template

// const template = document.querySelector('#homeTemplate');
// const clone = template.content.cloneNode(true);
// const liTemplate = document.querySelector('#listTemplate');

// const dogList = dogs.map((dog) => {
//   const liClone = liTemplate.content.cloneNode(true);

//   liClone.querySelector('h2').append(dog.name);
//   liClone.querySelector('img').src = dog.image;
//   return liClone;
// });

// clone.querySelector('.title').append('DOGS');

// clone.querySelector('.list-container').append(...dogList);

// app.append(clone);

// Defining template in JS

const templateOne = document.createElement('template');
templateOne.innerHTML = /*html*/ `
<h1 class="title"></h1>
<ul>

</ul>
`;
const clone = templateOne.content.cloneNode(true);

const templateTwo = document.createElement('template');
templateTwo.innerHTML = /*html*/ `
<li>
<h2 class="name"></h2>
<img class="img"/>
</li>
`;

const dogList = dogs.map((dog) => {
  const clone = templateTwo.content.cloneNode(true);

  clone.querySelector('h2').append(dog.name);
  clone.querySelector('img').src = dog.image;
  return clone;
});

clone.querySelector('.title').textContent = 'DOGS';
clone.querySelector('ul').append(...dogList);

app.append(clone);
