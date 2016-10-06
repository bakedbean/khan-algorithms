var displayArray = function(array) {
  textFont(createFont("monospace"), 12);
  fill(255, 0 0);
  text("Hello", 100, 100);
};

var selectionSort = function(array) {
  displayArray(array);
};

var array = [2, 1];
array = selectionSort(array);
