//Methods of creating functions in JavaScript
//Function call is always the same no matter the declarative method used
//Function Declaration mode
function saayHello(){    
    console.log("Hello World");
}
saayHello();

let user = "Wisdom"
function sayHello(name){    
    console.log("Hello", name);
}

sayHello("Dave");
sayHello("John");
sayHello(user);
sayHello();

// A rest operator is used in javascript for functions without a defined numbers of parameters

function calcAverage(...x){
    console.log(x);
}

calcAverage(1, 2, 3, 4, 5);

function addNumber(x, y){
    const z = x + y ;
    return  [z, x];
}
const result = addNumber(9, 1);
console.log(result)

//Function Expression
const nice = function(){
    console.log("nice");
}
nice();

// Arrow syntax
const fresh = () => {
    console.log("fresh");
}

fresh()

//When using a single parameter you can choose to not put it in any parenthesis
const sayHello2 = (name) => {
    console.log("Hello", name);
}
sayHello2("Jake");

//When using the arrow syntax, you can choose to remove curly braces if it's just one statement, but  the value of that expression will be returned automatically
const addNumber2 = (x, y) => x + y
console.log(addNumber2(2, 3));

const cube = x => x * x * x
console.log(cube(5));