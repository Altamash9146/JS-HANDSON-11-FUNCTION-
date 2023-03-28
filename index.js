
//Answer to Q1//
const Q1 = function (){
    let x ='Answer to Q1'
    console.log(x)
}()


//Answer to Q2//
const add = function (a,b){
    return a+b
}

console.log(5+7)

//Answer to Q3//
const Multi = (a,b) => a*b;
const result = Multi(12,5);
console.log(result);

//Answer to Q4//
var x = 21;
        var girl = function () {
            console.log(x);
            var x = 20;
        };
        girl ();

//Answer to Q5//
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}


//Answer to Q6//
var x = 21;
a();
b();

function a() {

x = 20;
console.log(x);
};
function b() {

    x = 40;
console.log(x);
};


//Answer to Q7//
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
    let num = 6;
  console.log(factorial(num))