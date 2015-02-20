/**
 * Created by williambjohnson on 2/14/15.
 */

//find the only item that occurs an even number of times in an array
//if there is more than one item that occurs an even number of items,
//just return one of them, if ther are no items that occur an even number of times, return null.

var evenOccurance = function(array){
  var i = array.length,
    results = {}; //var once then comma out the next new variables - works the same as having var before each new variable
    keys,
    j;
  while (i--){ //loop starting at last item in array and moves up through array
    results[array[i]] = (results[array[i]] || 0) + 1; //verifies there is a "truthy" item at each item in array and tags it as a "1"
  } //each item in array gets a "1" added to it, unless its a duplicate, then it adds a "2" or "3" or however many are there
  keys = Object.keys(results);
  j = keys.length;
  while (j--) {
    if(results[keys[j]] % 2 === 0) { // % 2 = it divides by 2 then returns the remainder
      return parseInt(keys[j]);
    }
  }
  return null;
};


//
//same as above only using a for loop
//
var evenOccurance = function(array){
  var i = 0,
    length = array.length,
    counter,
    j;
  for (i; i < length; i++){
    j = 0;
    counter = 0;
    for (j; j < length; j++){
      if (array[j] === array[i]){
        counter++;
      }
    }
    if (counter % 2 === 0){
      return array[i];
    }
  }
  return null;
};

var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven); //4

var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
console.log(onlyEven); //null


