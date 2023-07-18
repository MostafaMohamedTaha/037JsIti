// (((((((((((((((((js)))))))))))))))))
// req/res 
// client side =>HTMLAllCollection,css,js
// server side backend .net,sql,node,express 
// js interpreted lang 
//oop,event-driven,interpreted lang,browser-dependent,
//browser ->htmlParser=>xml=>node,cssParser,jsEngine
// (((((((((((((((((js)))))))))))))))))
//script internal,external
// alert('hello from main js'
// document.getElementById("hi").innerHTML="hello world"
// document.write("get into pc")
// (((((((((((((((((js variables)))))))))))))))))
//declare let a; intial a=1;,assign a=2; hoisting declare after use var
// scope global,let 
// use strict prevent hoisting 
// let a=()=>{
//     "use strict"
//     let b=1;
//     z=b+1
//     console.log(z)
//     var z;
// }
// console.log(a())
// ===,==
// (((((((((((((((((concate,typeof)))))))))))))))))
// let a='1',b='2'
// console.log(a-b)
// console.log(a+b)
// (((((((((((((((((operator && || > < <> ! >= <= if/else if/else)))))))))))))))))
// let grade=60;
// let test=grade >=60? "pass":'fail'
// console.log(test)
// let a=1,b=2
// console.log(`${a} ,${b}`)
// console.log("object")
// (((((((((((((((((switch)))))))))))))))))
// let a='a'
// switch(a){
//     case "a":
//     case "A":
//         console.log('excellent')
//         break
//     case "b":
//     case "B":
//         console.log('v.good')
//         break
//     default:
//         console.log("good")
// }
// (((((((((((((((((for)))))))))))))))))
// var start=prompt("start","enter number")
// var end=prompt("end","enter number")
// for (let index = start; index <= end; index++) {
//     if(index==2)continue
//     if(index==4)break
//     console.log(index)
// }
// (((((((((((((((((while/doWhile/forIn/builtIn/Array)))))))))))))))))
// alert("Welcome to my site")
// let EnterYourName=prompt("Enter you name","Enter you name")
// let username=EnterYourName
// document.getElementById("welcome").innerHTML=`Welcome mr ${username}`
"use strict"
let sumOfTwoNumbers, firstNumber = 0, secondNumber = 0

let sum = () => {
    let firstNumberInput = prompt("enter first number", "enter first number")
    let secondNumberInput = prompt("enter first number", "enter first number")
    firstNumber = Number(firstNumberInput)
    secondNumber = Number(secondNumberInput)
    sumOfTwoNumbers = firstNumber + secondNumber
    console.log(sumOfTwoNumbers)
}
let temp = () => {
    let tempInter = prompt("enter temperature today", "enter temperature today")
    
    temp = Number(tempInter)
    
    document.getElementById('temp').innerHTML=temp>=30?"hot":"cold"

    
}
let feel = () => {
    let tempInter = prompt("enter temperature today", "enter temperature today")
    let actualFeel = prompt("enter temperature feel today", "enter temperature feel today")
    
    temp = Number(tempInter)
    feel = Number(actualFeel)
    
    let feelShow=temp >=25 && temp <=30  && feel >=25 && feel <=30 
    ? "normal" :temp <25 && feel<25 
    ?"cold" :temp >=25 && temp <=30  && feel >=25 && feel <=30 ? "hot" :"out of nature";
    document.getElementById('feel').innerHTML=feelShow

    
}
let faculty = () => {
    let facultyInter = prompt("enter your faculty", "enter your faculty")
    
    faculty=facultyInter
    switch(faculty){
        case "fci":
        case "FCI":
            document.getElementById('faculty').innerHTML=`You’re eligible to Programming tracks`
            break
        case "fci":
        case "FCI":
            document.getElementById('faculty').innerHTML=`You’re eligible to Programming tracks`
            break
        case "engineering":
        case "ENGINEERING":
            document.getElementById('faculty').innerHTML=`You’re eligible to Network and Embedded tracks`
            break
        case "Commerce":
        case "COMMERCE":
            document.getElementById('faculty').innerHTML=`You’re eligible to Network and Embedded tracks`
            break
        default:
            document.getElementById('faculty').innerHTML=`You’re eligible to Network and Embedded tracks`
            break
    }
    
}
let odd=()=>{
    let startNumberInter = prompt("enter start number", "enter start number")
    let endNumberInter = prompt("enter end number", "enter end number")
    
    let startNumber = Number(startNumberInter)
    let endNumber = Number(endNumberInter)
    for (let index = startNumber; index <= endNumber; index++) {
        if(index%2==0)continue
        console.log(index)
        document.getElementById('faculty').innerHTML=index
    }
}
    let math=()=>{
        let math = prompt("enter your expression", "3+4*5/10*8")
        alert(eval(math))
        
    }
    let user=()=>{
        let usernameInter = prompt("enter your name", "enter your name")
        let birthYear = prompt("enter your age", "enter your age")
        let birthYearInt=Number(birthYear)
        let username =typeof(usernameInter)=='string'?usernameInter:'enter string'
        let year =typeof(birthYearInt)=="number"?birthYearInt:'enter number'
        let age=year>2010?"not access to your age":2023-year
        document.getElementById('user').innerHTML=`
            name : ${username}
            birth year : ${year}
            age : ${age}
        `
    }
    let a =document.getElementById("test").value
    console.log(document.getElementById("test").value)
//     let startNumberInter = prompt("enter start number", "enter start number")
//     let endNumberInter = prompt("enter end number", "enter end number")
    
//     let startNumber = Number(startNumberInter)
//     let endNumber = Number(endNumberInter)
    
//     for (let index = startNumber; index <= endNumber; index++) {
        
//         document.getElementById('odd').innerHTML=
        
//     }


// let firstNumberInput=prompt("enter first number","enter first number")
// let secondNumberInput=prompt("enter first number","enter first number")
// firstNumber=Number(firstNumberInput)
// secondNumber=Number(secondNumberInput)
// sumOfTwoNumbers=firstNumber+secondNumber
// console.log(sumOfTwoNumbers)
