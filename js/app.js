'use strict';

// Global Variables

let selectionsAllowed = 25; // decrement to end item selection
// let selectionsAllowed = 0; to end item selection

// item storage
let allItems = [];

// Dom windows
let myContainer = document.getElementById('container');

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let ctx = document.getElementById('myChart').getContext('2d');


// Constructor

function Items(name, fileExtension = 'jpg') {
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
function getRandomIndex() {
  return Math.floor(Math.random() * allItems.length);
}

// render imgs (only 2 for now)
let randomIndexes = [];
// think of an array as a queue if you have 3 num in there that gives 1 round then if you wanted to make sure you had 2 rounds, you could have 6  so you could push in from behind and shift from the front :O :O :O
function renderImgs() {

  while (randomIndexes.length < 6) {
    let randoNum = getRandomIndex();
    while (!randomIndexes.includes(randoNum)) {
      //includes returns a boolean
      randomIndexes.push(randoNum);
    }
  }
  let itemOneIndex = randomIndexes.shift();
  let itemTwoIndex = randomIndexes.shift();
  let itemThreeIndex = randomIndexes.shift();


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


function handleClick(event) {
  selectionsAllowed--;

  let imgClicked = event.target.alt;

  for (let i = 0; i < allItems.length; i++) {
    if (imgClicked === allItems[i].name) {
      allItems[i].selected++;
    }
  }
  renderImgs();

  if (selectionsAllowed === 0) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

function renderChart() {
  let itemNames = [];
  let itemSelections = [];
  let itemViews = [];

  for (let i = 0; i < allItems.length; i++) {
    itemNames.push(allItems[i].name);
    itemSelections.push(allItems[i].selected);
    itemViews.push(allItems[i].views);
  }

  let chartObject = {
    type: 'bar',
    data: {
      labels: itemNames,
      datasets: [{ // this is an object you can add it within the array of datasets again, so you get double bars. Number of clicks vs number of views in the label
        label: '# of Votes',
        data: itemSelections,
        backgroundColor: [
          'rgba(117, 123, 200, 0.2)',
          'rgba(129, 135, 220, 0.2)',
          'rgba(142, 148, 242, 0.2)',
          'rgba(159, 160, 255, 0.2)',
          'rgba(173, 167, 255, 0.2)',
          'rgba(187, 173, 255, 0.2)',
          'rgba(203, 178, 254 , 0.2)',
          'rgba(218, 182, 252 , 0.2)',
          'rgba(221, 189, 252 , 0.2)',
          'rgba(224, 195, 252 , 0.2)',
          'rgba(117, 123, 200, 0.5)',
          'rgba(129, 135, 220, 0.5)',
          'rgba(142, 148, 242, 0.5)',
          'rgba(159, 160, 255, 0.5)',
          'rgba(173, 167, 255, 0.5)',
          'rgba(187, 173, 255, 0.5)',
          'rgba(203, 178, 254 , 0.5)',
          'rgba(218, 182, 252 , 0.5)',
          'rgba(221, 189, 252 , 0.5)',
          'rgba(224, 195, 252 , 0.5)',
        ],
        borderColor: [
          'rgba(117, 123, 200, 1)',
          'rgba(129, 135, 220, 1)',
          'rgba(142, 148, 242, 1)',
          'rgba(159, 160, 255, 1)',
          'rgba(173, 167, 255, 1)',
          'rgba(187, 173, 255, 1)',
          'rgba(203, 178, 254 , 1)',
          'rgba(218, 182, 252 , 1)',
          'rgba(221, 189, 252 , 1)',
          'rgba(224, 195, 252 , 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: itemViews,
        backgroundColor: [
          'rgba(102, 255, 242, 0.2)',
          'rgba(110, 230, 239, 0.2)',
          'rgba(118, 205, 235, 0.2)',
          'rgba(125, 180, 232, 0.2)',
          'rgba(133, 155, 229, 0.2)',
          'rgba(141, 130, 225, 0.2)',
          'rgba(149, 105, 222, 0.2)',
          'rgba(156, 80, 219, 0.2)',
          'rgba(164, 55, 215, 0.2)',
          'rgba(172, 30, 212, 0.2)',
          'rgba(102, 255, 242, 0.5)',
          'rgba(110, 230, 239, 0.5)',
          'rgba(118, 205, 235, 0.5)',
          'rgba(125, 180, 232, 0.5)',
          'rgba(133, 155, 229, 0.5)',
          'rgba(141, 130, 225, 0.5)',
          'rgba(149, 105, 222, 0.5)',
          'rgba(156, 80, 219, 0.5)',
          'rgba(164, 55, 215, 0.5)',
          'rgba(172, 30, 212, 0.5)',
        ],
        borderColor: [
          'rgba(102, 255, 242, 1)',
          'rgba(110, 230, 239, 1)',
          'rgba(118, 205, 235, 1)',
          'rgba(125, 180, 232, 1)',
          'rgba(133, 155, 229, 1)',
          'rgba(141, 130, 225, 1)',
          'rgba(149, 105, 222, 1)',
          'rgba(156, 80, 219, 1)',
          'rgba(164, 55, 215, 1)',
          'rgba(172, 30, 212, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, chartObject); //eslint-disable-line
}




// grab what we want to listen to
myContainer.addEventListener('click', handleClick);





