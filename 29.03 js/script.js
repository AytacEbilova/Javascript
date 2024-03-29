//task1
// function printFullName(fname,lname){
//     return `I am ${fname} ${lname}`
// }
// console.log(printFullName("Aytac","Ebilova"));

//task2

// function square(num){
//    return num*num;
// }
// console.log(square(5));

//task3
//  function calcSum(num1,num2){
//     return num1+num2;
//  }
//  function calcMult(num1,num2){
//     return num1*num2;
//  }
//  function calcDivide(num1,num2){
//     return num1/num2;
//  }
//  function calcSubt(num1,num2){
//     return num1-num2;
//  }
//  console.log(calcSum(2,3));
//  console.log(calcDivide(2,3));
//  console.log(calcMult(2,3));
//  console.log(calcSubt(2,3));

//task 4
// function calcNum(num1,num2,operator) {
//     if(operator=="+"){
//         return num1+num2
//     }
//     else if(operator=="-"){
//         return num1-num2
//     }
//     else if(operator=="*"){
//         return num1*num2
//     }
//     else{
//         return num1/num2
//     }
//     }
//     console.log(calcNum(2,5,"-"));

//task 5
// const getSum = (array) => {
//     return array[0]+array[array.length-1];
// }
// console.log(getSum([1, 2, 3]));

//task6
// let sum=0;
// const getSum = (array) => {

//      for (let i=0;i<array.length;i++){
//         sum+=array[i];
//      }
//      return sum;
//  }
//  console.log(getSum([1, 2, 3]))

//task7

// const getSum = (array) => {
//     let max=array[0];
//      for (let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i];
//         }
//      }
//      return max;
//  }
//  console.log(getSum([5, 7, 3]))

//task8

// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// function filterEmployees(array) { 
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].salary > 60000) {
//       console.log(array[i]);
//     }
//   }
// }

// filterEmployees(employees);

//task9

//   function findElement(arr, number) {
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]==number){
//            return`${number} arrayinn elementidir`
//         }
//     }
    
    //   return`${number} arrayinn elementidir`
//   }
//   console.log(findElement([33, 28, 45, 17], 45)); 
//   console.log(findElement([33, 28, 45, 17], 38)); 


//task10
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// function whiteSpace(str){
//     let count=0;
//     for(let i=0;i<=str.length;i++){
//         if(str[i]==" "){
//         count++;
//         }
//     }
//     return count;
// }
// console.log(whiteSpace(sampleNews));
//task11
    // function concatArray(arr1,arr2){
    
    //     for(i=0;i<=arr2.length;i++){
    //     arr1.push(arr2[i]);
    //     }
        
    //     return arr1
    // }
    // console.log(concatArray([1,2,3,4,5],[6,7,8,9]));

//task12
// function arrayFilled(num1,num2){
//     let arr=[];
//     for(let i=0;i<=num1;i++){
//         arr+=num2;
//     }
//     return arr;
// }
// console.log(arrayFilled(6, 0));

//task13

// function move(arr,num){

// }
// console.log(move([10, 20, 30, 40, 50], 0, 2));