
// let firstName= "ali";
//  let lastName= "Nur"
//  let age= "22";
//  let isEnrolled= true;
//  let email= null;
//  console.log(firstName + ' ' + lastName + ' ' + "is" + ' ' + age + ' ' + 'years old and enrolled:' +  isEnrolled + ' ' + 'email:' + email);

//  let demo= "hellow world";
//  let replace= "hellow Awoliya"
//  console.log(demo.length);
//  //replace
//  console.log(demo.replace('world', 'Awolia'));
//  //remove
// console.log(demo.concat("student"))
//  console.log(demo.toString())

//  alert(demo.toUpperCase())
//  alert(demo.replace('world','your  name'))
 
//  let num1=12
//   let num2=4
//  console.log(num1+num2);

//  let x= 20;
//  let y=3
//  console.log(x%y);
//  console.log(x**y);
// // //function of Math
//  let h=3.2;
//  let a=2.9
//  let H=7.8
//  let increment=5;
//  console.log(Math.ceil(h))
//  console.log(Math.floor(a))
//  console.log(Math.round(H))
//  console.log(Math.max(H, a))
//  console.log(Math.min(a, H))
//  console.log(Math.random()*5)
//  //++Increment
//  //--Decrement
//  console.log(10+increment);
//  console.log(10-increment);
// //comparison operators
//  console.log(Boolean(5>6))
//  console.log(Boolean(87))
//  console.log(Boolean(null))
//  console.log(Boolean(0))
//  console.log(Boolean(6.9072))
//  //logical operator And=&&, OR=//, NOT=!
//  let isStudent=true
//  let isDocter=false
//  console.log(Boolean(isStudent))
//       //if statment
// let yourGender = prompt('enter your gender')
// if(yourGender=='male' || 'M'|| 'MALE' || 'Male' ){
//     alert("you are male")
// }
//     else if(yourGender=='female' || 'F' || 'FEMALE' || 'Female'){
//         alert("you are female")
//     }
//     else if(yourGender=='unknown'){
//         alert("you gender is unknown")
//     }
//         //switch statment
//         let yourgender = prompt('get your gender')
//         switch(yourGender){
//             case 'm':
//             case 'M':
//             case 'Male': 
//             alert("you are male")
//             break;
//             case 'f':
//                 case'F':
//                 case 'Female':
//                     alert("you are Female")  
//                     break;
//                     default:
//                         alert("your question is invaluable")
//         }

//  let AGE= 78
//   switch(true){
//     case(AGE>18):
//         alert('you are allowed to play the game')
//         break;
//     case(AGE>13 && AGE<=18):
//         alert('you are under age to allowed the game')
//         break;
//     case(AGE<=13 && AGE<=0):
//         alert('you are child')
//     default:
//         alert('invalued value')

//   }
//         //array
//   let color=['red', 'yellow', 'blue', 'black']
//   console.log(color[0]);
//   let name = 'ahmed'
//   console.log(`my name is ,${name}`)

// //   evenNumber['6', '2', '4', '8', '2']
// //   color.pop();
// //   color.pop();
// //   color.pop();
// //   color.push('gray');
// // console.log(evenNumber.length)
// //   console.log(evenNumber)
//         //repeat
// let Name= "hikma"
//    console.log(Name.repeat(2))

// // let =u;
// // for(u=0, u<50, u++)
// //   if(u%2==0){
// // // console.log(u)
// // //   }   
// let cars=['bmw', 'v8', 'corola', 'corola']
//    //for in loop
//  for(let car in cars){
//     console.log(car[cars])}
     //function

// let sum=();
//  function Sum(){
//  sum=4+5;
//  return sum;
//  }
//  sum();

// function sayhellow(name){
//     console.log(`hellow ${name}`)
// }
//  let name=prompt('what ia your name')
// sayhellow(name);

//  let cars=['bmw', 'v8', 'corola', 'corola', 'toyota', 'vitz']

// function order(cars){
//     if(cars.length=0){
//         cars.sort()
//          console.log(cars)
//         console.log(cars.sort(cars))
//         console.log(cars.pop(cars))
//   
//     else{
//         alert('empty car')
//     }
// }
//order in car
// function determineGrade(score) {
//      if(score>= 90 && score<=100){
//           return 'A'
//      }else if(score >= 75){
//           return 'B'
//      }else if(score >= 60){
//           return 'C'
//      }else if(score >= 45){
//           return 'D'
//      }else {
//           return 'F'
//      }

// }
// function getscore() {
//      let scores= [];
//      for (let i = 1; i <= 3; i++){
//           let score = parseFloat(prompt("Enter score of subject" + i + "(out of 100):"));
//           scores.push(score);
//      }
//      return scores;
// }

// function calculateAverage(score) {
//      let sum = 0;
//      for (let i = 0; i < score.length; i++)
//      {
//           sum += score[i];
//      }
//      return sum / score.length
// }

// function getGrade(average) {
//      if (average >= 90)
//           return 'A';
//      else if(average >= 75)
//           return 'B';
//      else if(average >= 60)
//           return 'C';
//      else if(average >= 45)
//           return 'D';
//      else 
//           return 'fail';
// }

// function displayResult (average, grade) {
//      console.log("   Average score:" + average.toFixed(2));

//      console.log("Grade:" + grade)
//      if(average >= 50){
//        console.log("Statuse: passed");
//      }else {
//           console.log("Statuse: Faild")
//      }
// }

// let scores = getscore();
// let average = calculateAverage(scores);
// let grade = getGrade(average);
// displayResult(average, grade);

// function yourClass(yourClasss){
//   let yourClass = prompt('get your class')
//         switch(yourClass){
//             case 10:
//             alert("you ar grade 10");
//             break;
//             case 11:
     
//                     alert("you are grade 11");
//                     break;
//                     default:
//                         alert("your grade is unavaluable");
//         }
//      }



