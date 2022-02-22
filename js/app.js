'use strict';

// Global Variables

let selectionsAllowed = 25; // decrement to end item selection
// let selectionsAllowed = 0; to end item selection

// item storage
let allItems =[];

// Dom windows
let myContainer = document.getElementById('container');

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('show-results-btn');

let showResults = document.getElementById('show-result-list');

// Constructor

function Items(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.selected = 0;
  this.src = `assets/${name}.${fileExtension}`;

  allItems.push(this);
}

new Items('bag');
new Items('banana');
new Items('bathroom');
new Items('boots');
new Items('breakfast');
new Items('bubblegum');
new Items('chair');
new Items('cthulhu');
new Items('dog-duck');
new Items('dragon');
new Items('pen');
new Items('pet-sweep');
new Items('scissors');
new Items('shark');
new Items('sweep', 'png');
new Items('tauntaun');
new Items('unicorn');
new Items('water-can');
new Items('wine-glass');

console.log(allItems);

// random number between 0 and length of items array -1
function getRandomIndex(){
  return Math.floor(Math.random()* allItems.length);
}

// render imgs (only 2 for now)

function renderImgs(){
  let itemOneIndex = getRandomIndex();
  let itemTwoIndex = getRandomIndex();
  let itemThreeIndex = getRandomIndex();


  while (itemOneIndex === itemTwoIndex){
    itemTwoIndex = getRandomIndex();
  }
  while (itemOneIndex === itemThreeIndex || itemTwoIndex === itemThreeIndex){
    itemThreeIndex = getRandomIndex();
  }
 


  imgOne.src = allItems[itemOneIndex].src;
  imgOne.alt = allItems[itemOneIndex].name;
  allItems[itemOneIndex].views++;

  imgTwo.src = allItems[itemTwoIndex].src;
  imgTwo.alt = allItems[itemTwoIndex].name;
  allItems[itemTwoIndex].views++;

  imgThree.src = allItems[itemThreeIndex].src;
  imgThree.alt = allItems[itemThreeIndex].name;
  allItems[itemThreeIndex].views++;
}

renderImgs();

// Event listeners


function handleClick(event){
  selectionsAllowed--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allItems.length; i++){
    if(imgClicked === allItems[i].name){
      allItems[i].selected++;
    }
  }
  renderImgs();

  if(selectionsAllowed === 0){
    myContainer.removeEventListener('click', handleClick);
  }
}

function handleShowResults(event){  //eslint-disable-line
  // if no more votes - then render a list

  if(selectionsAllowed === 0){
    for(let i = 0; i < allItems.length; i++){
      let li = document.createElement('li');
      li.textContent = `${allItems[i].name} was viewed ${allItems[i].views} times, and was voted for ${allItems[i].selected} times.`;
      showResults.appendChild(li);
    }
  }
}

// grab what we want to listen to
myContainer.addEventListener('click', handleClick);

resultBtn.addEventListener('click', handleShowResults);
