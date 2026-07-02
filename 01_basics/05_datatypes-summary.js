// Types of  datatypes

// Mainly two types 

// primitive datatypes ( pass by value )
// 7 types
// string, Number, Boolean, Null, Undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

// const isLoggedin = false
// const isLoggedin = true
// let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log( id === anotherId); // dono number same hai pr output false dega kyuki symbol ka use kise number ko unquie banane ke liye use hota haii 


const bigNumber = 9783774385789859084n

// non-primitive datatypes ( Reference type)
// Array, Objects, Functions

const heros = [ " shaktiman", "spiderman", "ironman"]

 let myObj = {
    name: " akash ",
    age: 22,

}

const myFunction = function(){

    console.log( " Hello World")
}

console.log( typeof heros)