console.log("Closure Demo");

const add = (function (){
    let counter = 0;
    return function () {counter +=1; return counter};
})();

// add();
// add();
// add();
// console.log(add());

var myArray = [1,2,3,4,5];

function times(x){
    return function (y){
        return x*y;
    }
}


console.log(myArray.map(times(2)))
console.log(myArray.filter(function (num){return  num<4}))
console.log(myArray.reduce(function (acc,value){
    return acc+value
},0))