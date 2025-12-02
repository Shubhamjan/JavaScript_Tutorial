// for(let i=0;i<=5;i++){
//     console.log(i+" ")
// }


// let i=0
// for(;i<4;){
//     console.log(i)
//     i++
// }
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
console.log(text)