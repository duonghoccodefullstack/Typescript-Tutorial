// let firstName = "Dylan";

// console.log( firstName);

// perfect 
// const sum = (x:number , y: number) => {
//     return x + y ;
// }
// console.log("check sum",sum(4,7))

// const numbers = [1, 2, 3]; // inferred to type number[]

// numbers.push(4); 


// console.log(numbers);

// let head: number = numbers[0]; 

// console.log(head);

// Tuples 
// let arr : [number, boolean,string];
// arr = [5,true,"hello"]
// console.log(arr)

// let arr : [number, boolean,string];

// arr=[5,true,"test"]
// arr.push("Fix bug")
// console.log(arr)

// Object Types 

// const car : {type : string, model :string,year:number} = {
//  type : "vinfast",
//  model:"Vn",
//  year:2000
// }
// car.model ="Campuchia"
// console.log(car)

// optional property
// no error 
// const car : {type : string, year?:number} = {
//     type : "vinfast",
//    }
//    car.year = 2000
//    console.log(car)
//  error
// const car : {type : string, year:number} = {
//     type : "vinfast",
//    }
//    car.year = 2000
//    console.log(car)

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// // nameAgeMap.Mark = "Fifty"; // error 

// console.log(nameAgeMap) // { Jack: 25 }


// TypeScript Enums
// Initialized
// enum Test {
//     North = 2,
//     East,
//     South,
//     West
// }
// let currentTest = Test.East
// console.log(currentTest) // Tăng 1 đơn vị định hướng 1 giá trị 

// Fully Initialized
// enum Test {
//     North = 2,
//     East = 300,
//     South = 600 ,
//     West = 200
// }
// let currentTest = Test.East
// console.log(currentTest) // 300 

//Interfaces

// type CarY = number
// type CarT = string
// type CarM = string
// type Car = {
//     year : CarY,
//     type : CarT,
//     model : CarM
// }

// const carYear : CarY = 2000
// const carType : CarT = "Vinfast"
// const carModel : CarM = "Vn"

// const car: Car = {
//     year : carYear,
//     type : carType,
//     model :carModel
// }
// console.log(car)

// interface HCN {
//     height : number ,
//     width : number 
// }
// const hcn : HCN = {
//     height : 20,
//     width: 100
// }
// console.log(hcn)

// interface HCN { // con
//     height : number ,
//     width : number 
// }
// interface Color extends HCN { // cha
//     color : string
// }
// const hcnandcolor : Color = {
//     height : 20,
//     width: 100,
//     color: "red"
// }
// console.log(hcnandcolor)

// Union Types Functions

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
//   printStatusCode(404);
//   printStatusCode('404');

//   function printStatusCode(code: string ) {
//     console.log(`My status code is ${code.toUpperCase()}.`)
//   }

//   printStatusCode('david dang');

// Functions
// function getTime() :number {
//     return new Date().getDate();
// }
// console.log(getTime())

// function printHello(): void {
//     console.log('Hello!');
//   }
// console.log(printHello())

function nhan(a:number ,b:number) {
    return a * b;
}
console.log(nhan(2,5))