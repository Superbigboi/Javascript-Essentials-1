let Boo1 = true;
let No1 = 1;
let BI1 = 12;
let S1 = "12";
let U;


let Boo2 = Boolean(true);
let No2 = Number(2);
let BI2 = BigInt(42);
let S2 = String("twelve");

let q = prompt("which question do you want to see?");
if(q==1){
console.log(Boo1);
console.log(No1);
console.log(S1);
console.log(U);

console.log(Boo2);
console.log(No2);
console.log(BI2);
console.log(S2);
console.log(S2);
}
else if(q==2){
  console.log(`${Boo1} [${typeof Boo1}]`);
  console.log(`${Boo2} [${typeof Boo2}]`);

  console.log(`${No1} [${typeof No1}]`);
  console.log(`${No2} [${typeof No2}]`);
  console.log(`${S1} [${typeof S1}]`);
  console.log(`${S1} [${typeof S1}]`);
}
else if(q==3){
  let xS = "1234";
  let xN = Number(xS);
  let xBI = BigInt(xN);
  let xB = Boolean(xBI);
  console.log(xS);
  console.log(xN);
  console.log(xBI);
  console.log(xB);
}
else if(q==4){
  console.log("100"+1);
  console.log("100"+true);
  console.log("100"+null);
  console.log(1+null);
  console.log(1+true);
  console.log(1+true);
}
else if(q==5){
  const str1 = 42 + +"1";
  console.log(str1);
}