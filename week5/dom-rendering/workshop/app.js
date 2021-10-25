import dogs from './dogs.js';
import createEl from './create-element.js';

const app = document.querySelector('#app');

const title = createEl('h1', {}, 'Dogs');
// const title = document.createElement('h1');
// title.textContent = 'Dogs';

// const ul = document.createElement('ul');

const dogList = dogs.map((dog) => {
  const h2 = createEl('h2', { textContent: dog.name });
  // const h2 = document.createElement('h2');
  // h2.textContent = dog.name;

  const image = createEl('img', { src: dog.image });
  // const image = document.createElement('img');
  // image.src = dog.image;

  const li = createEl('li', {}, h2, image);
  // const li = document.createElement('li');
  // li.append(h2, image);
  console.log(li);
  return li;
});

const ul = createEl('ul', {}, ...dogList);
// ul.append(...dogList);

app.append(title, ul);
