"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// function nhan(a:number ,b:number) {
//     return a * b;
// }
// console.log(nhan(2,5))
// Casting 
// let x : unknown = "hello"
// console.log((x as string ).length) // 5
// let x: unknown = 'hello';
// console.log((<string>x).length);
// class 
// class Person {
//     name: string;
// }
// console.log(Person);
//   const person = new Person();
//   person.name = "Tony";
//   console.log(person);
// class Person {
//     private name: string;
//     public constructor(name: string) {
//         this.name = name;
//     }
//     public getName(): string {
//         return this.name;
//     }
// }
// const person = new Person("tony");
// console.log( person.getName())
// interface Shape {
//     getArea: () => number;
//   }
//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}
//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }
//   class Square extends Rectangle {
//     public constructor(width: number) {
//       super(width, width);
//     }
//     // getArea gets inherited from Rectangle
//   }
//   const mySq = new Square(20);
//   console.log(mySq.getArea());
// interface Point {
//     x :number ;
//     y :number ;
// }
// let pointPart : Partial<Point> ={};
// pointPart.x = 10
// console.log(pointPart)
//  TypeScript Readonly
// interface PersonInterface {
//     name: string;
//     age: number;
//   }
// const person: Readonly<PersonInterface> = {
//     name: "Tony",
//     age: 50,
//   };
//   console.log(person.name);
// Lab 
// let username: string = "tony";
// let password: string = "123456";
// let login = (username: string, password: string) => {
//     return username === "tony" && password === "123456";
// };
// console.log(login(username, password)); //true
// let username: string = "tony";
// let age: number =  30 ;
// let isActive: boolean = true;
// let Hobby: string[] = ["sport", "music"];
// console.log("username", username);
// console.log("age", age);
// console.log("isActive", isActive);
// console.log("Hobby", Hobby);
// function grett(name: string, age :number):string {
//     return `hello ${name}. You are ${age} years old.`
// }
// console.log(grett("tony",30))
// console.log(grett("david",35));
// interface Person {
//     name: string;
//     age : number,
//     address : string,
// }
// const person : Person = {
//     name : "tony",
//     age : 30,
//     address : "Ha Noi"
// }
// console.log(person) object
// class Animal {
//     name : string ;
//     constructor(name : string){
//         this.name = name;
//     }
//     speak():void {
//         console.log(`${this.name} makes a sound.`);
//     }
// }
// class Dog extends Animal {
//     bark() : void {
//         console.log(`${this.name} barks.`);
//     }
// }
// class Cat extends Animal {
//     meow() : void {
//         console.log(`${this.name} meows.`);
//     }
// }
// const dog = new Dog("Buddy");
// const cat = new Cat("July");
// // dog.bark();
// // dog.speak();
// cat.meow();
// cat.speak();
//  bai toan phuong tien giao thong
// class Vehicle {
//     brand : string;
//     model : string;
//     year : number;
//     constructor(brand : string , model : string , year : number) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year
//     }
//     getDetais():string {
//         return `${this.brand} ${this.model} ${this.year}`
//     }
// }
// class Car extends Vehicle {
//     numberOfDoors : number;
//     constructor(numberOfDoors :number, brand : string , model : string , year : number) {
//         super(brand , model , year)
//         this.numberOfDoors = numberOfDoors
//     }
//     getDetais(): string {
//         return `${this.brand} ${this.model} ${this.year} ${this.numberOfDoors}`
//     }
// }
// class Bike extends Vehicle {
//     type : string;
//     constructor(type : string, brand : string , model : string , year : number) {
//         super(brand , model , year)
//         this.type = type
//     }
//     getDetais(): string {
//         return `${this.brand} ${this.model} ${this.year} ${this.type}`
//     }
// }
// const car =  new Car(4 , "vinfast" , "Vn" , 2000)
// console.log(car.getDetais());
// bai toan thu vien 
// class Documents {
//     title: string;
//     author: string;
//     publicationYear: number;
//     constructor(title: string, author: string, publicationYear: number) {
//         this.title = title;
//         this.author = author;
//         this.publicationYear = publicationYear
//     }
//     getInfo(): string {
//         return `${this.title} by ${this.author} (${this.publicationYear})`
//     }
// }
// class Book extends Documents {
//     publisher : string;
//     constructor (publisher : string , title: string, author: string, publicationYear: number) {
//         super(title, author, publicationYear)
//         this.publisher = publisher;
//     }
//     getInfo(): string {
//         return `${this.title} by ${this.author} (${this.publicationYear}) published by ${this.publisher}`
//     }
// }
// class Magazine extends Documents {
//     issueNumber : number;
//     constructor(issueNumber : number , title: string, author: string, publicationYear: number) {
//         super(title, author, publicationYear)
//         this.issueNumber = issueNumber;
//     }
//     getInfo(): string {
//         return `${this.title} by ${this.author} (${this.publicationYear}) issue ${this.issueNumber}`
//     }
// }
// const book = new Book("VN" , "Vn" , "tony" , 2000)
// // console.log(book.getInfo());
// function indentity<T>(value: T): T {
//     return value
// }
// console.log(indentity("hello"));
// console.log(indentity(1));
// console.log(indentity(true));
// // Generic Stack
// class Stack<T> {
//     private elements: T[] = []
//     push(element : T): void {
//         this.elements.push(element)
//     }
//     pop(): T | undefined {
//         return this.elements.pop()
//     }
//     peek():T | undefined {
//         return this.elements[this.elements.length - 1]
//     }
//     isEmpty(): boolean {
//         return this.elements.length === 0
//     }
// }
// const stack = new Stack<number>()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// // console.log(stack); output : Stack { elements: [ 1, 2, 3 ] }
// // console.log(stack.peek()); // output : 3
// stack.push(null)
// console.log(stack.isEmpty()); // output : 3
// console.log(stack);
// Generrix Pair
// class Pair<T, U> {
//     constructor(public first: T, public second: U) {}
//     getFirst(): T {
//         return this.first;
//     }
//     getSecond(): U {
//         return this.second;
//     }
// }
// const pair = new Pair<number, string>(1, "hello");
// console.log(pair.getFirst()); // Output: 1
// console.log(pair.getSecond()); // Output: "hello"
// Generrix Queue 
// class Queue<T> {
//     private elements : T[] = []
//     enqueue(element : T): void {
//         this.elements.push(element)
//     }
//     dequeue(): T | undefined {
//         return this.elements.shift()
//     }
//     peek() : T |undefined {
//         return this.elements[0]
//     }
//     isEmpty(): boolean {
//         return this.elements.length === 0
//     }
// }
// const queue = new Queue<number>()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.peek()); // Output: 1
// console.log(queue.dequeue()); // Output: 1
// enum Weekdays {
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY,
//     SATURDAY,
//     SUNDAY
// }
// let today: Weekdays = Weekdays.TUESDAY
// console.log(today)
// enum OrderStatus {
//     Pending = "Pending",
//     Processing = "Processing",
//     Shipped = "Shipped",
//     Delivered = "Delivered",
//     Canceled = "Canceled"
// }
// class Order {
//     id : number;
//     status : OrderStatus;
//     constructor (id : number , status : OrderStatus) {
//         this.id = id;
//         this.status = status
//     }
//     updateStatus(status : OrderStatus) {
//         this.status = status
//     }
//     getStatus() : OrderStatus {
//         return this.status
//     }
// }
// const order1 = new Order(1, OrderStatus.Pending)
// const order2 = new Order(2, OrderStatus.Pending)
// // console.log(order1 , order2);
// order1.updateStatus(OrderStatus.Shipped)
// // console.log(order1.getStatus());
// console.log(order1);
// todo list
// enum TaskStatus {
//     NotStarted = "NotStarted",
//     InProgress = "InProgress",
//     Completed = "Completed"
// }
// class Task {
//     id : number;
//     name : string;
//     status : TaskStatus;
//     constructor(id : number , name : string , status : TaskStatus) {
//         this.id = id;
//         this.name = name;
//         this.status = status   
//     }
//     updateStatus(status : TaskStatus) {
//         this.status = status
//     }
//     getStatus() : TaskStatus {
//         return this.status
//     }
// }
// const task1 = new Task(1, "Learn TypeScript", TaskStatus.NotStarted)
// console.log(task1);
// quan li do uong 
// enum BeverageType {
//     Coffee = "Coffee",
//     Tea = "Tea",
//     Juice = "Juice",
//     Water = "Water"
// }
// class Beverage {
//     name : string;
//     type : BeverageType;
//     constructor(name : string , type : BeverageType) {
//         this.name = name;
//         this.type = type
//     }
//     getDescription() : string {
//         return `${this.name} is a ${this.type}`
//     }
// }
// const coffee = new Beverage("Latte", BeverageType.Coffee)
// console.log(coffee.getDescription())
// quan li mau sac 
// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }
// class ColorBox {
//     color : Color;
//     constructor(color : Color) {
//         this.color = color
//     }
//     getColor() : Color {
//         return this.color
//     }
// }
// const colorBox = new ColorBox(Color.Red)
// console.log(colorBox.getColor())
// lab/studentModule.ts
// const student = new StudentManager([])
// student.addStudent(new Student(1, "tony", 30, "IT"))
// student.addStudent(new Student(2, "david", 20, "QA"))
// student.addStudent(new Student(3, "anana", 18, "SAlE"))
// console.log(student.getStudent(1));
// console.log(student.removeStudent(2));
// const getAll = new Student(1, "admin", 30, "DL")
// console.log(getAll.getDetail());
// let area = calculateArea(5,100)
// console.log(area)
// declare namespace mylib {
//     export function makeGreeting(name: string): string;
//     let numberOfGreetings : number;
// }
// let result = mylib.makeGreeting("Tony");
// console.log(result);
//# sourceMappingURL=test.js.map