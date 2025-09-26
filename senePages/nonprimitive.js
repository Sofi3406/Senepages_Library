// // function square(num){

// //     return num*num;
// // }
// // console.log(square(4))
// // const sqr= (num)=>num*num;

// let num = prompt("Enter a number:");
// num = Number(num);
// if(num > 0) {
//     console.log("The number is posetive.");
// } 
// else if (num < 0) {
//     console.log("The number is negative.");
// } 
// else {
//     console.log("The number is zero.")
// }

// let age = prompt("Enter your age:");
// age = Number(age);

// if (age < 13) {
//     console.log("You are a child.");
// } else if (age >= 13 && age <= 19) {
//     console.log("You are a teenager.");
// } else {
//     console.log("You are an adult.");
// }
// let dayNum = prompt("Enter a number (1-7):");
// dayNum = Number(dayNum);

// switch (dayNum) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wedensday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid number. Please enter 1-7.");
// }
 //Array
 let fruits = ["Apple", "Banana", "Mango"];
 //add at the bigning
 fruits.unshift("orange");
 //add at the end
 fruits.push("pinapple");

 console.log(fruits)

 let fruit = ["Mango","Banana", "Apple","Pinapple"]
//remove the last element
fruit.pop();
console.log("updated array:",fruit);

 let frui = ["Mango","Banana", "Apple","Pinapple"]
//find to search
 let searchFruit = "Banana";
 //find to index
 let index = frui.indexOf(searchFruit);
 if (index !== -1) {
    console.log(`${searchFruit}is found at index ${index}`);
 } else{
    console.log(`${searchFruit} is not in the array`);
 }
 




