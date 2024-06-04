

// // ---------------------------------------------------------ex1

let namee = prompt("enter your name");
let genderr ;
while(true){
    let gender = prompt("enter your gender (male/female)");
    if(gender === "male"){
        alert("welcome mr "+ namee);
        genderr = "male";
        break;
        
    }
    else if(gender === "female"){
        alert("welcome ms "+ namee);
        genderr ="female";
        break;
    }
}
let the_order2;
if(buying === true){
    let the_order = prompt("write your order");
    the_order2=the_order;
    alert("the order getting prepared");
    console.log(namee +the_order);
}
else if(buying === false){
    alert("thanks for visit us");
}

let listt = [namee,genderr,the_order2];
for(let i =0;i<=listt.length;i++){
    console.log(listt[i]);
}

let buying = confirm("do you want to buy coffee or donut");

// // -------------------------------------------------q1


// console.log(-5*3);
// console.log('JavaScript' + 50  );
// console.log(17 % 5  );
// console.log(5 % 17  );
// console.log( 5/10 );
// console.log(4==="4");
// console.log(4 != 5);
// console.log( 7 <= 8);
// console.log( "Hello" + 5);
// console.log( Math.ceil(5) - Math.floor(25) );
// console.log( Math.pow(44,2));


// // ------------------------------------------------------------------ q2
// let q2 = prompt("write a number");
// alert("the number is" + q2);


// //-----------------------------------------------------------------------q3

// let firstnumber = prompt("write the first number");
// let secondnumber = prompt("write the seconde number");

// if(firstnumber >secondnumber){
//     alert(secondnumber +"   "+ firstnumber);
// }
// else (
// alert(firstnumber + "   " +secondnumber)
// )

// // -------------------------------------q4
// let firstnumbers = prompt("write the first number");
// let secondnumbers = prompt("write the seconde number");

// if(firstnumbers >secondnumbers){
//     alert(firstnumbers);
// }
// else (
// alert(secondnumbers)
// )
// // -----------------------------------q5
// let firstnumber3 =Number( prompt("write the first number"));
// let secondnumber3 =Number( prompt("write the seconde number"));

// console.log(firstnumber3 + secondnumber3);

// // -----------------------------------q6
// let theswitchnumber = Number(prompt("enter"));
// let the_numbbb;
// switch (theswitchnumber) {
//     case 1:
//        the_numbbb="one"
//         break;
//     case 2:
//         the_numbbb="two"
//         break;
   
//     case 3:
//         the_numbbb="three"
//         break;
//     case 4: 
//     the_numbbb="four"
//     break;
//     case 5:
//         the_numbbb="five"
//         break;
//     case 6:
//         the_numbbb="six"
//         break;
//     case 7:
//         the_numbbb="seven"
//         break;
//     case 8 :
//         the_numbbb="eight"
//         break;
//     case 9 :
//         the_numbbb="nine" 
//     break;
//    default:
//     the_numbbb ="PLEASE TRY AGAIN"
       
// }
// console.log(the_numbbb);
