// task1
// let age=Number(window.prompt("Enter number:"));
// if(age>0 && age<125 ){
//     if( age>=65){
//         console.log("Pensiya yashina chatib");
//     }
// }
// else{
//     console.log("invalid number");
// }


// task2
// let a=Number(window.prompt("Enter number:"));
// if(a==0){
//     console.log("zero");
// }
// else if(a%2==0){
//     console.log("eded cutdur");
// }
// else{
//     console.log("eded tekdir");
// }


// task3
// let season=(window.prompt("Enter month:"));
// switch (season) {
//     case "December":
//         case "january":
//             case "February":
//                console.log("Winter");
      
//       break;

//       case "march":
//         case "april":
//             case "may":
//                console.log("spring");
      
//       break;
   
//       case "june":
//         case "july":
//             case "august":
//                 console.log("summer");
      
//       break;
//       case "september":
//         case "october":
//             case "november":
//                 console.log("autumn");
      
//       break;
   


//task4
// let a=Number(window.prompt("Enter number:"));
// if(a/3 && a/5){
//     console.log("divided");
// }
// else{
//     console.log("not divided");
// }
   

//task5
// let a=Number(window.prompt("Enter number:"));
// let reminder=a%2;
// if(a%2==0){
//     console.log("tam bolunur");
// }
// else {
//     console.log(reminder);
// }
     
//task6 
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// if(a*b>0){
//     console.log("musbetdir");
// }
// else{
//     console.log("menfidir");
// }

//task8
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// let c=Number(window.prompt("Enter number:"));
// if(a>b && a>c){
//     console.log("a boyukdur");
// }
// else if(b>a && b>c){
//     console.log("b boyukdur");
// }
// else{
//     console.log("c boyukdur");
// }

// task7
// let a=Number(window.prompt("Enter number:"));

//     if(a>=1 && a<=100){
//        window.alert("daxilindedir");
//     }
//     else{
//         window.alert("daxilinde deyil");
//     }

// task10
// let a=Number(window.prompt("Enter number:"));

//  if(a>=90 && a<=100 && a>0){
//     window.alert("A");
//  }
//  else if (a>=80 && a<=89  && a>0 ){
//     window.alert("B");
//  }
//  else if(a>=70 && a<=79  && a>0){
//     window.alert("C");
//  }
//  else if(a>=60 && a<=59&& a>0){
//     window.alert("D");
//  }
//  else {
//         window.alert("F");
     
//  }

//task11

// let age=Number(window.prompt("Enter number:"));
// if(age<18){
//     window.alert("Yeniyetme");
// }
// else if(age>18 && age<64){
//     window.alert("Yetkin");
// }
// else{
//     window.alert("Yashli");
// }


// task13
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// let operation=(window.prompt("Enter operation:"));

// switch (operation) {
//     case "+":
//         window.alert(a+b);
         
//         break;
//         case "-":
//             window.alert(a-b);
            
//             break;
//             case "*":
//         window.alert(a*b);
        
//         break;
//         case "/":
//         window.alert(a/b);
//         break;
    
// }

//task14
// let i;
// for( i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//task15
// let temp=Number(window.prompt("ENTER:"));
// let i;
// for(i=0;i<=temp;i++){
//     if(temp%i==0){
//         console.log(i);
//     }
// }


// TASK16
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// let c=Number(window.prompt("Enter number:"));

// if(a**2+b**2==c**2 || b**2+c**2==a**2 || c**2+a**2==b**2){
//     console.log("Duzbucaqli ucbucaqdir");
// }

// else{
//     console.log("Deyil");
// }

//task17
// let num=Number(window.prompt("Enter number:"));
// let a,b,c;
// a=parseInt(num/100);
// b=parseInt(num/10%10);
// c=parseInt(num%10);
// console.log(a,b,c);


//task18
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// let c=Number(window.prompt("Enter number:"));
// if(a==b || b==c || a==c){
//     console.log("beraberyanlidir");
// }
// else{
//     console.log("beraberyanli deyil");
// }

//task19
// let a=Number(window.prompt("Enter number:"));
// let b=Number(window.prompt("Enter number:"));
// let c=Number(window.prompt("Enter number:"));

// if((a+b>c && Math.abs(a-b)<c)| (a+c>b && Math.abs(a-b)<c)| (b+c>a && Math.abs(a-b)<c)){
//     console.log("ucbucagin terefidir")
// }

// else{
//     console.log("ucbucagin terefi deyil")
// }

//task20
// let month=window.prompt("Enter number:");
// switch (month) {
//     case "January":
//       console.log("january has 31 days");
//       break;
//     case "February":
//         console.log("February has 28 days");
//       break;
//     case "December":
//         console.log("February has 30 days");
//       break;
//     case "March":
//         console.log("February has 31 days");
//       break;
//     case "May":
//         console.log("February has 30 days");
//       break;
//     case "April":
//         console.log("February has 31 days");
//       break;
//     case  "June":
//         console.log("February has 31 days");
//       case  "July":
//         console.log("February has 31 days");
//         case  "August":
//             console.log("February has 31 days");
//             case  "October":
//                 console.log("February has 31 days");
//                 case  "November":
//                     console.log("February has 31 days");
                    
//   }

