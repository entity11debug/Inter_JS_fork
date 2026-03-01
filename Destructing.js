// Destructuring --->

// it works for both array and object.


// OBJECT DESTRUCTING ---->

const user = {
    name : "JW", 
    age : 11,
    education : {
        degree : "kindargarten"
    }
}
// if you want take a key and store it an another variable so that you can use it somewhere else ->

// the normal way of doing this ->

let xyz = user["name"]
console.log(xyz);//JW

// but in this way, it would get really troublesome for accessing keys from nested objects.

// now, doing the same using Destructuring->

// syntax -> const/let {the propery-name/key you want to access from that object}  = name of the main object (on the right side)

const {name} = user;//its takeing the key name 'name' and storing it at the same named variable called 'name'
console.log(name);//JW

// if you want to store the key into a different named variable ->

const {age : ageVariable} = user;//here the age property from the user object, has been stored in a variable called 'ageVariable'.
console.log(ageVariable);//11


// for nested object ->
const {education : {degree}} = user;
console.log(degree);//kindargarten

// storing in a different mamed variable->
const {education : {degree : degreeVariable}} = user;
console.log(degreeVariable);//kindargarten


// ARRAY DESTRUCTING------>
let array = [1,2,3,4,5]

// syntax -> let/const [variable name] = name of the array

let  [a] = array // the first element of the array will be stored in the 'a' vairable
console.log(a)

let [a1,b,c,d,e] = array
console.log(a1,b,c,d,e)//1 2 3 4 5

// the elements get stored to the corresponding variable from first to last.

// now if you want a particular element to get stored in a particular vairable (instead of the default first to last sequence) ->

let numbers = [11,12,13,14,15]

// lets say you want to store 14 in 'x' and 12 in 'y' ->
let [,y,,x,] = numbers//you skip the variable of which you dont the corresponding element for.
console.log(x)//14
console.log(y)//12

// for nested array --->

let numbers2 = [1,2,[3,10,11,12],4,5]

// lets say you want 10 and 11-

let [,,[,num1,num2,],,] = numbers2

console.log(num1)//10
console.log(num2)//11