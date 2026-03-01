// Spread Operator -->

const def = [1,2,4,5]

console.log(...def)//1 2 4 5, It expands (spreads) the array into individual elements.

console.log(Math.max(...def))//5

// if you want to add xyz array's elements to another array as well as its own elements -->
let xyz = [1,2,3,4]

let abc = [xyz[0],xyz[1],xyz[2],xyz[3],5,6,7]//here, you spearded the elements of xyz in abc.
console.log(abc);//[1, 2, 3, 4, 5, 6, 7]


// now, doing this using the speard operator --->

abc = [...xyz,5,6,7]//here the elements of xyz are being spreaded using the spread operator (...)
console.log(abc);//[1, 2, 3, 4, 5, 6, 7]

// ------------------------------------------------------------------

// immutable array copying using the speard operator --->

let a = [11,12,13,14]
let b = [...a]

console.log(b);//[ 11, 12, 13, 14 ]

// here 'b' is a copy array of 'a' separated from array 'a'. so if you manipulate 'b', it wont affect 'a'. this is immutable way of copying an array. because the main array aint changing even if the copy array is.


// ------------------------------------------------------------------


// concating different arrays using the spread operator -->

let array1 = [100,1000,10000]
let array2 = [200,2000,20000]
let array3 = [300,3000,30000]
let concatingArrays = [...array1,...array2,...array3]

console.log(concatingArrays);//[ 100, 1000, 10000, 200, 2000, 20000, 300, 3000, 30000 ]


//----------------------------------------------------------------------------------------//

// NOTE : spread operator works the same for objects as arrays.

let obj1 = {
    num1 : 1, num2 :2
}
let obj2 = {
    num3 : 3, num4 :4
}


// adding an objects's properties to another object as well as its own properties--> 
let obj5 = {
    ...obj2,
    num5 : 5,
    num6 : 6,
}

// immutable object copying using the speard operator --->
let obj4 = {...obj1}

// concating different objects using speard operator --->
let obj3 = {
    ...obj1, ...obj2
}