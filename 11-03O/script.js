var person = {
    name: 'Jatin',
    age: 30,
    isMarried: true,
    address: {
        street: 'Vijay Nagar',
        flatNo: 201,
    }
};
console.log(person);

var person2 = new Object();
person2.name = 'Krishna Kant'; // to add properties to this object
person2.age = 32;
person2.isMarried = true;
person2.address = {}; // first we are defining ki person2.address apne aap mein is an object
person2.address.street = "Nagar Road";
person2['address']['flatNo'] = 33;
console.log(person2);