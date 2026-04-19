let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success)
        resolve ("data loaded");
    else 
        reject ("error occurred");
});
promise.then(result => console.log(result)).catch(error => console.log(error)); 
// then tab work karta hai jab problem resolve ho jata hai meanwhile catch tab work karega jab problem reject hoga
// ek statement hai toh arrow function need not use curly brackets

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
getData();

// another method fetch API

fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

// error handling

try {
    var x = y + 10;
} catch(error){
    console.log(error.message);
}

// local storage to store data:

localStorage.setItem("name", "Jeet");

// to retrieve data:

var name1 = localStorage.getItem("name");
console.log(name1);

// remove data:

localStorage.removeItem("name");

// store object:

var user = {name: "Jeet", age: 50};
localStorage.setItem("user", JSON.stringify(user));

// retrieve data:

var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name, data.age);