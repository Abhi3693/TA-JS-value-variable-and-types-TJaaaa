// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = Number(prompt(`Enter a number`));

if (number % 2 === 0) {
  alert(`This number is even`)
} else {
  alert(`This number is odd`)
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number(prompt(`Enter your number`));

if(num1>101) {
  alert(`Max value 100`)
} 
let num2 = Number(prompt(`Enter your second number`));
if(num2>201) {
  alert(`Max value 200`)
}

// 3. Convert the above code using`?` terniary operator

let num3 = Number(prompt(`Enter your number`));
num3 < 501 
  ? alert(`It is ${num3}`)
  : alert(`Max value 500`)

let num4 = Number(prompt(`Enter your second number`));
num4 < 1001 
  ? alert(`It is ${num4}`)
  : alert(`Max value 1001`)


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`Name of your house?`)

// if else


if (houseName === "stark") {
  alert(`Winter is coming`)
} else if (houseName === "lannister") {
  alert(`A lannister always pays his debt`)
} else {
  alert(`All men must die`)
}

// switch 

switch(houseName) {
  case "stark" :
    alert(`Winter is coming`)
    break;
  case "lannister" :
    alert(`A lannister always pays his debt`)
    break;
  default : 
  alert(`All men must die`)
}

// terniary operator


houseName === "stark"
  ? alert(`Winter is coming`)
  : houseName === "lannister"
    ? alert(`A lannister always pays his debt `)
    : alert(`all men must die`)

  

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
 

let monthNumber = Number(prompt(`Enter Number of month`))

  switch(monthNumber){
    case 1:
     alert(`January ,days - 31`)
     break;
    case 2:
      alert(`February ,days - 28`)
      break;  
    case 3:
      alert(`March ,days - 31`)
      break;
    case 4:
      alert(`April ,days - 30`)
      break;
    case 5:
      alert(`May ,days - 31`)
      break;
    case 6:
      alert(`June ,days - 30`)
      break;
    case 7:
      alert(`July ,days - 30`)
      break;
    case 8:
      alert(`August ,days - 31`)
      break;
    case 9:
      alert(`September ,days - 30`)
      break;
    case 10:
      alert(`October ,days - 31`)
      break;
    case 11:
      alert(`November ,days - 30`)
      break;
    case 12:
      alert(`December ,days - 30`)
      break;
    default :
    alert(`This is not month number`)
 }


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/


let salary = Number(prompt(`Enter your salary`));

// switch

switch(true) {
  case salary <= 20000 :
    alert(`In hand amount is ${salary - (salary * 10) / 100}`)
    break;
  case salary <= 40000 :
    alert(`In hand amount is ${salary - (salary * 20) / 100}`)
    break;
  case salary > 50000 :
    alert(`In hand amount is ${salary - (salary * 30) / 100}`)
    break;
}


//  terniary operator 

salary <= 20000 
  ? alert(`Inhand salary is ${salary- (salary * 10) / 100 }`) 
  : salary <= 40000 
    ? alert(`In hand amount is ${salary - (salary * 20) / 100}`)
    : salary > 50000 
      ? alert(`In hand amount is ${salary - (salary * 30) / 100}`)
      : alert(" Range not found ")

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/


let mark = Number(prompt(`Enter your mark`))

// if else

  if ( mark > 100 ) {
    alert(`Markes can't be greater than 100`)
  } else if ( mark > 80 ) {
    alert( `Grade A` )
  } else if ( mark > 50 ) {
    alert( `Grade B` )
  } else if ( mark < 50) {
    alert( `Grade C` )
  }


  // Switch

switch(true) {
  case mark > 100 :
    alert(`Markes can't be greater than 100`)
    break;
  case mark > 80 :
    alert(`Grade A`)
    break;
  case mark > 50 :
    alert(`Grade B`)
    break;
  case mark < 50 :
    alert(`Grade C`)
    break;
}



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

// if else


let weather = prompt(`How is weather today?`)
  if (weather == "sunny") {
  alert(`wear a t-shirt`)
} else if( weather == "rainy" ) {
  alert(`Dont forget to take your rain coat`)
} else if ( weather == "hot" ) {
  alert( `Get a hanky`)
} else if ( weather == "freezing" ) {
  alert(`Get your sweeter on`)
} else {
  alert(`Not valid`)
}



// switch 


switch(weather) {
  case "sunny" :
    alert(`wear a t-shirt`)
    break;
  case "rainy" :
    alert(`Dont forget to take your rain coat`)
    break;
  case "hot" :
    alert( `Get a hanky`)
    break;
  case "freezing" :
    alert(`Get your sweeter on`)
    break;
  default :
    alert(`Not valid`)
}

//  terniary operator 


weather == "sunny" 
? alert(`wear a t-shirt`)
: weather == "rainy" 
? alert(`Dont forget to take your rain coat`)
: weather == "hot" 
? alert( `Get a hanky`)
: weather == "freezing" 
? alert(`Get your sweeter on`)
: alert(`Not valid`)