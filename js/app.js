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

let retrieveItems = localStorage.getItem('items');
console.log('Retrieved Items', retrieveItems);

let parsedItems = JSON.parse(retrieveItems);
console.log('Parsed Items', parsedItems);

// Constructor

function Items(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.selected = 0;
  this.src = `assets/${name}.${fileExtension}`;

  allItems.push(this);
}

if (retrieveItems) {
  allItems = parsedItems;
} else {
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
}

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

    // step 1: get our data and stringify the data
    let stringifiedItems = JSON.stringify(allItems);
    console.log('Stringified Items', stringifiedItems);

    localStorage.setItem('items', stringifiedItems);
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
          'rgba(230, 204, 255, 0.5)',
          'rgba(206, 153, 255, 0.5)',
          'rgba(217, 102, 255, 0.5)',
          'rgba(181, 102, 255, 0.5)',
          'rgba(156, 51, 255, 0.5)',
          'rgba(153, 0, 153, 0.5)',
        ],
        borderColor: [
          'rgba(230, 204, 255, 1)',
          'rgba(206, 153, 255, 1)',
          'rgba(217, 102, 255, 1)',
          'rgba(181, 102, 255, 1)',
          'rgba(156, 51, 255, 1)',
          'rgba(153, 0, 153, 1)',
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: itemViews,
        backgroundColor: [
          'rgba(204, 245, 255, 0.5)',
          'rgba(153, 235, 255, 0.5)',
          'rgba(102, 224, 255, 0.5)',
          'rgba(26, 209, 255, 0.5)',
          'rgba(0, 184, 230, 0.5)',
          'rgba(0, 143, 179, 0.5)',
        ],
        borderColor: [
          'rgba(204, 245, 255, 1)',
          'rgba(153, 235, 255, 1)',
          'rgba(102, 224, 255, 1)',
          'rgba(26, 209, 255, 1)',
          'rgba(0, 184, 230, 1)',
          'rgba(0, 143, 179, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // changes the axis neat
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





