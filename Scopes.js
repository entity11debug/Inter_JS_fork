// Scope = the area where something is accessible.
// Variable = the actual container holding a value.

/*
Scope (the environment / visibility area) --->
Scope defines where code can access variables.

In JavaScript, common scopes are->

// Global scope → accessible everywhere
// Function (local) scope → accessible only inside that function
// Block scope → accessible only inside { } (for let and const)
*/


let xyz = 11;   // variable in global scope
console.log(xyz);

// 'xyz' is a global variable. Because It’s declared outside of any function. It belongs to the global scope. It can be accessed anywhere in the script (including inside functions, if needed).

// xyz → global variable (because it lives in global scope)


function xyz1(){
    let abc = 10; // variable in local (function) scope
    console.log(abc)
    //'abc' is a local variable. It’s declared inside the function xyz1(). It belongs to that function’s local scope. It cannot be accessed outside the function.
    
    // abc → local variable (because it lives in function scope)

    console.log(xyz);
    //NOTE : since 'xyz' is a global variable and in the global scope, its can be accessed within an local scope. however, the 'abc' is on the other hand, a local variable and in the loca local so it cant be accessed globally(outside of the function or inside other functions(local/functional scope) or inside any block scope).

    // if you declare a local variable as same name as the global variable and they will be treated as different variables.

    // you can change a global variable's value in a local/functional or a block scope. for example -
    xyz = 1010 //changing xyz's value from 11 to 1010. and it will be changed both inside and outside of the local/functional or a block scope

    console.log(xyz);//1010, inside its changed
}
console.log(xyz);//1010, outisde its changed as well! that means you can manipulate w global variable's value within a local or block scope.