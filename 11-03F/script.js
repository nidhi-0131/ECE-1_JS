function myFunction() {
    alert("Hello World!");
}

function sayHello(name, age) {
    document.write (name + " is " + age + " years old.");
}

// function return
var res = mul(12, 30);
function mul(x, y) {
    return x*y;
}

// ARROW FUNTION

// normal function

function add(a, b) {
    console.log(a + b);
} 
add (10, 20);

// arrow function
var add2 = (x, y) => {
    console.log(x + y);
} 
add2 (10, 20);