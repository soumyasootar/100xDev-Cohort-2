// function sum(num1, num2 = 2, num3 = 2) {
//     return num1 + num2 + num3;
// }
// let values = [1, 5];
// let total = sum(4, ...values);
// console.log("total: ", total);


// ------------------------------------------------------
// console.log(Boolean(false));
// ------------------------------------------------------
// let animals = [ { type : "lion"},"tiger"]
// let clone = animals.slice()

// clone[0].type = "bear" 
// clone[1] = "sheep"

// console.log(animals[0].type,clone[0].type);
// console.log(animals[1],clone[1]);


// ------------------------------------------------------
// const myFunc = () => {
//     const a = 2;
//     return () => console.log(`this is ${a}`)
// }

// const a = 1
// const test = myFunc()
// test()


// ------------------------------------------------------
// let bear = {
//     sound: 'roar',
//     roar() {
//         console.log(this.sound);
//     }
// }

// bear.sound = "grunt"
// let bearSound = bear.roar
// console.log("bearSound: ", bearSound);
// bearSound()


// ------------------------------------------------------

// var sound = "grunt"
// var bear = { sound: "roar" }
// function roar() {
//     console.log(this.sound);
// }
// roar.apply(bear)


// ------------------------------------------------------
// var start = 1
// function x() {
//     var end = 10
// }
// x()
// console.log("end: ", end);
// ------------------------------------------------------
// var v = 1;
// function f1() {
//     console.log(v);
// }

// var f2 = function () {
//     var v = 2;
//     f1();
// }

// f2()