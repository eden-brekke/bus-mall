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

