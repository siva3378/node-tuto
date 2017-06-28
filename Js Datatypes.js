/**
 * Primitive data types
 */

var a = "abc"; //string
var a1 = 'abc'; //string
var b = 123 // number
var c = 1.234 // number
var d = true // boolean
var e = false // boolean

// console.log("Primitive >> ",a,a1,b,c,d,e)


/**
 * Arrays
 */

var f = [1, 2, 3, 4, 5] // array of numbers
var g = ["asd", "asd", "asd"] // array of strings
var h = [1, 2, "asd", "23", 23, "asd", 12334] // heterogeneous array

// console.log("Arrays >> ",f,g,h);


/**
 * Object - contains key & value
 * (left side = ) key : value (= right side)
 */

var i = {
    firstName: "Shiva",
    lastName: "Kumar",
    age: 50,
    eyeColor: "black",
    data: h
};

var j = {
    firstName: "Ruchi",
    lastName: "Kumari",
    age: 50,
    eyeColor: "green",
    data: h
};

/**
 * Array of objects
 */

var persons = [
    j,  // index 0 - 1st member
    i,  // index 1 - 2nd member
    {   // index 2 - 3rd member
        firstName: "Crystal",
        lastName: "Kumari",
        age: 5,
        eyeColor: "blue",
        data: h
    }];


console.log(persons[1].firstName, persons[2].eyeColor);

/**
 * 
 */