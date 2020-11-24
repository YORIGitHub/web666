// var apple = 20;
// var orange = "橘子";

// let lemon = "柠檬";
// let banana = 30;

// const pear = 40;

// var apple1 = {}

// console.log(typeof apple1)

// var apple2 = Object.create(null);

// console.log(typeof apple2 + " apple2 ");

// var apple3 = function bigApple(){
//     console.log("this is apple3 big apple");
// }
// function smallApple(){
//     console.log("this is small apple");
// }
// apple3()
// bigApplebig()
// smallApple()

//// 匿名函数
// var apple4 = function (){
//     console.log("this is apple3 big apple");
// }

// apple4();


////es6 箭头函数
// var apple5 = ()=>{
//     console.log("this is arrow function");
// }

// apple5()


// var apple6 = ()=>console.log("this is arrow function");

// apple6()


// var apple7 = ()=>{
//     return ()=>{
//         return ()=>{
//             console.log("this is arrow function apple7");
//         }
//     }
// }
// apple7()()()



// var apple10 = (x,y)=>{
//     console.log("this is apple10 == " + (x+y));
//     return (x,y)=>{
//           console.log("this is apple11 == " + (x+y))
//     }
// }
////NaN  not a number
// apple10(4,5)(8,9);


// var apple12 = ()=>console.log("10");console.log("13");console.log("15")
// apple12();


// function apple13(){
//     var name = "苹果13";
//     function apple13Son(){
//         console.log("this is apple 13 son")
//     }
//     apple13Son()
//     console.log("this is apple13")
//     return {
//         test:apple13Son
//     }
// }
// apple13().test();


// var apple14 = function(){
//     console.log("this is apple14....")
//     return 100;
// }()

// console.log(apple14);


var apple15 = function(){
    console.log("this is apple15")
    return 200;
}()

console.log(typeof apple15)