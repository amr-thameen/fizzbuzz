const fizzbuzz = (num) => {
        if (num%5 === 0 && num %3 === 0){
            return "fizzbuzz";
        } else if (num % 5 === 0){
            return "buzz";
        } else if (num%3 === 0){
            return "fizz";
        } else {
            return num;
        }
}


module.exports = fizzbuzz;


// const fizzbuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//       if (i%5 === 0 && i%3 === 0){
//         console.log("fizzbuzz");
//       } else if (i % 5 === 0){
//        console.log("buzz");
//       } else if (i%3 === 0){
//         console.log("fizz");
//       } else {
//         console.log(i);
//       }
//     }
// }