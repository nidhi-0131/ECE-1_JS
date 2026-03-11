// CONTROL FLOW STATEMENTS
var i;
for (i=0; i<3; i++) {
    console.log(i);
}

// for
var count;
document.write("Starting Loop" + "<br/>");
for (count = 0; count < 10; count++) {
    document.write("Current Count: " + count + "<br/>");
}
document.write("Loop stopped!" + "<br/>");

// for in
const person = {
    fname: "Ajay",
    lname: "Singh",
    age: 25,
};
for (let x in person) {
    console.log ("person details: " + x + " : " + person[x] + "<br/>")
}

// while
var count = 0;
document.write("Starting Loop" + "<br/>");
while (count < 10) {
    document.write("Current Count: " + count + "<br/>");
    count++;
}
document.write("Loop stopped!" + "<br/>");

// CONDITIONAL STATEMENTS

// if
var age = 20;
if (age > 18) {
    document.write("<b>You are eligible to cast the vote.</b>")
}

// if and else
let age = 20;
if ( age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// switch case
var grade = 'A';
document.write("Entering witch block<br/>");
switch (grade) {
    case 'A': document.write("Good job<br/>");
    break;
    case 'B': document.write("Pretty good<br/>");
    break;
    case 'C': document.write("Passed<br/>");
    break;
    case 'D': document.write("Not so good<br/>");
    break;
    case 'E': document.write("Below average<br/>");
    break;
    case 'F': document.write("Failed<br/>");
    break;
    default: document.write("Invalid grade<br/>");
    break;
}