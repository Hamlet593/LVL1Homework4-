/*Given an object. Write a recursive function that creates a deep copy of it. (Note: Without additional param).
Input Output
var a = { a: ‘1’, b: { a: 2} };
var b = deepCopy(a);

a.b.a = 123;
console.log(b.b.a !== 123); true

Solution*/

let a = {
  a: 1,
  b: {
    a: 2,
  },
}

function deepCopy(a) {
  let clone = {};
  for(let key in a){
    if(typeof a[key] !== 'object'){
      clone[key] = a[key]
    }
    else{
      clone[key] = deepCopy(a[key]);
    }
  }
  return clone;
};

let b = deepCopy(a);
a.b.a = 123;
console.log(b.b.a !== 123)

/*Write recursive function range(x,y) to get the integers in range (x,y) where x and y are also integers.
For example if  x = 5 and y = 10 output will be [6, 7, 8, 9]. (Note: Without using additional param).

Solution*/

let arr = [];
function range(x, y){
  if(++x === y){
    return arr;
  }
  else{
    arr.push(x);
    return range(x, y);
  }
}
console.log(range(5, 10))

/*Given an array which element are integers in range (x, y) not including x and y 
where x and y are also integers. Write a function to sort array without any 
comparison.(Hint: Use Map).

Solution*/

function sortInMyRange(arrExample, min, max){
  let result = [];
  let possibleElements = max - min + 1;
  let frequency = new Array(possibleElements).fill(0);
  for (let i = 0; i < arrExample.length; i++){
    frequency[arrExample[i] - min]++;
  }
  for (let i = 0; i < possibleElements; i++){
    for (let j = 0; j < frequency[i]; j++){
      result.push(i + min);
    }
  }
  return result;
}
console.log(sortInMyRange([9, 7, 8, 5, 9, 5, 6, 4], 4, 10));

/*Հ.Գ. Կխնդրեի սրա map-ովը նայեինք դասի ժամանակ, կամ եթե դասին չեք նախատեսել, լուծումը ուղարկեք, ես ինքս ուսումնասիրեմ:*/

/*4. Վերջինը չեմ կարողացել*/