'use strict';

// Global Variables

let selectionsAllows = 25;

// item storage
let allItems =[];

// Dom windows
let myContainer = document.getElementById('container');

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('show-results-btn');

let showResults = document.getElementById('show-results-list');

// Constructor

function Items(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.selected = 0;
  this.src = `img/${name}.${fileExtension}`;

  allItems.push(this);
}

new Items('bag');
new Items('banana');
new Items('bathroom');
new Items('boots');
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
