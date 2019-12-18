// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.innerText = 'one';
li2.innerText = 'two';
li3.innerText = 'three';
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
div.appendChild(list);
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/250';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const newDiv = `
  <div>
    <p>P1</p>
    <p>p2</p>
  </div>
`;
div.insertAdjacentHTML('afterbegin', newDiv);

// add a class to the second paragraph called warning
const p2 = document.querySelector('.wrapper').firstElementChild
  .firstElementChild.nextElementSibling;
p2.classList.add('warning');
// remove the first paragraph
document.querySelector('.wrapper').firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
  </div>
  `;
  const fragment = document.createRange().createContextualFragment(html);
  return fragment;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('.cards');

// Have that function make 4 cards
const card1 = generatePlayerCard('John', 20, 6);
console.log(card1);
const card2 = generatePlayerCard('Sue', 25, 5.5);
const card3 = generatePlayerCard('Blonno', 34, 5.7);
const card4 = generatePlayerCard('Fry', 31, 5.11);

// append those cards to the div
cardsDiv.append(card1);
cardsDiv.append(card2);
cardsDiv.append(card3);
cardsDiv.append(card4);
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
