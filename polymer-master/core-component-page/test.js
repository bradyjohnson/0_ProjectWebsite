/**
 * Created by williambjohnson on 1/31/15.
 */
var replaceAllX = function() {
  var inpStr = prompt("enter a string");
  var inpArr = inpStr.split('');
  for (var i = 0; i < inpArr.length; i++){
    if (inpArr[i] === 'x'){
      inpArr.splice(i, 1, 'y');
    }
  }
  var final = inpArr.join('');
  console.log(final);
};


var replaceAllXv2 = function(inputStr){
  var newStr = inputStr.split('');
  for (var i = 0; i < newStr.length; i++){
    if (newStr[i] === 'x') {
      newStr[i] = 'y';
    }
  }
  return newStr.join('');
};


//* Using recursion...
//* This looks at each next character and replaces or returns. When finished, pushes each character together and returns as string...
var replaceAllXv3 = function(){
  if(str.length <= 1){
    if(str[0] === 'x'){
      return 'y';
    }else{
      return str;
    }
  }
  if(str[0] === 'x'){
    return 'y' + replaceAllXv3(str.slice(1));
  }else{
    return str[0] + fn(str.slice(1));
  }
};



//Callback function to log something only certain number of times...
var callbackReturnsN = function(cb, n){
  return cb(n);
};

var callbackFn = function(n){
  return function(){
    n--;
    if(n > 0){
      console.log('weeeee');
    }else{
      console.log('stop');
    }
  }
};

var inner = callbackReturnsN(callbackFn, 3);

inner();

