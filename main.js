// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

// let age = prompt('Enter your age')
// let children = age <= 12
// let teenagers =  age > 12 && age <= 17
// let adults  =age >= 18

// if (children) {
//     console.log('Your ticket price will be 10$')
// }
// else if (teenagers) {
//     console.log('Your ticket price will be 15$')
// }
// else {
//     console.log('Your ticket price will be 18$')
// }

// // Weather Clothing Adviser: Develop a program that asks the user for the current temperature and whether it is raining or not. Based on this information, advise the user on what clothing to wear


// let temperature = prompt('Enter the current temprature')
// let hot = temperature > 25
// let normal = temperature < 25 && temperature > 15
// let cold = temperature < 15

// if (hot) {
//     console.log('You need to wear summer cloths its hot outside , dont forget the sunscreen !')
// }
// else if (normal) {
//     console.log('The weather outside is cool , dont panick no need to a jacket')
// }
// else {
//     console.log('Its freezing outside take a jacket with you :)')
// }

// // *******************************************************************

// function fibonacci(n) {
   
//     if (n <= 0) return 0;
//     else if (n == 1) {
//         return 1};

 
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }


// console.log(fibonacci(4));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(7)); 

// ****************************************************************************

function power(base, exponent) {
  
    if (exponent == 0) return 1;
  
    return base * power(base, exponent - 1);
  }

  console.log(power(4,2))


