// function declaration & definition (both happen at the same time in js)--->

function addNumbers1(num1,num2){
    return (num1+num2)
}
console.log(addNumbers1(1,1))

//function expression -->
let addNumbers2 = function (num1,num2){
    return (num1+num2)
}
console.log(addNumbers2(1,1))

// arrow function (if multiple ines)--->

let addNumbers3 = (num1,num2) =>{
    return (num1+num2)
};
console.log(addNumbers3(1,1))

// if its only one line ->

let addNumbers4 = (num1,num2) => (num1+num2) //dont have to use return or curly braces.
console.log(addNumbers3(1,1))
