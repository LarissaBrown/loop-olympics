"use strict";

let numArr = [0,1,2,3,4,5,6,7,8,9]
let newArray = [];
const numbers = function() {
    for(let i = 0; i < 9; i++) {
        newArray.push(i);
        console.log(i);
       
    } console.log(newArray);
}

numbers();





const numBackwards = function() {
for(let i = 9; i >= 0; i--) {



    console.log(i)

    }
}
numBackwards();






let fruit = ["banana", "orange","apple","kiwi"];

const listFruit = function() {
    for(let i =0 ; i < fruit.length; i++) {
    console.log(fruit[i])
    }
}

listFruit();





let evenArray = [];
const evenToOneHundred= function() {
for(let i = 0; i<= 100; i++) {
    if (i % 2 === 0) {
        
        
     } evenArray.push(i);
}

console.log(evenArray);
}

evenToOneHundred()




let fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let fruitArr = [];
const everyOtherFruit = function() {
    for(let i = 0;i < fruits.length; i++) {
        if(i % 2 === 0) {
            fruitArr.push(fruits[i]);
        } 
        
    } console.log(fruitArr)
}
everyOtherFruit()



let peopleArr = ["Steve", "Larissa", "Oliver"]
let occupationArr = ["dentist", "programmer", "teacher"]
const listOfNames = function() {
    for(let i = 0; i < peopleArr.length; i++) {
        
        
    } 
    peopleArr.push("Robert");
    occupationArr.push("artist");
    console.log(peopleArr)
    console.log(occupationArr)
}

listOfNames();

//Gold 



const arrZeros = []
const nestedZeros = function () {
    
    for(let i = 0; i < 3; i++) {
        const innerZeros = []
        for (let j = 0; j < 3; j++) {
            innerZeros.push(0)
           
        }   
           arrZeros.push(innerZeros)  
    } 
    console.log(arrZeros)
}

nestedZeros()



const arrZeros2 = []
const nestedZeros2 = function () {
    
    for(let i = 0; i < 3; i++) {
        const innerZeros2 = []
        for (let j = 0; j < 3; j++) {
            if(i === 0) {
                innerZeros2.push(0)  
            } else if (i === 1) {
                innerZeros2.push(1)
            }else if (i === 2) {
                innerZeros2.push(2)
            }
            
    } arrZeros2.push(innerZeros2) 
    
}console.log(arrZeros2)
}
nestedZeros2()



const arrSequence = []
const nestedSequence = () => {
    for(let i = 0; i < 3; i++) {
        const innerSequence = []
        for(let j = 0; j < 3; j++) {
            if(j === 0) {
                innerSequence.push(0)
            }else if(j === 1) {
                innerSequence.push(1)
            }else if(j === 2) {
                innerSequence.push(2)
            }    
        } arrSequence.push(innerSequence)
    }console.log(arrSequence)
}
nestedSequence()


const arrX = []
const nestedX = (n) => {
    for(let i = 0; i < n; i++) {
        const innerX = []
        for(let j = 0; j < n; j++) {
            innerX.push("x")
            }   
            arrX.push(innerX)
        } 
        
        console.log(arrX)
    } 

nestedX(3)