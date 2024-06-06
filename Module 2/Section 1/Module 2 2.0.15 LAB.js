// Rose – unit price: 8 , quantity: 70 , value: 560
// Lily – unit price: 10 , quantity: 50 , value: 500
// Tulip – unit price: 2 , quantity: 120 , value: 240
// Total: 1300

// Question 1

let SRose = 8;
let QRose = 70;
let MRose = 560;
let SLily = 10;
let QLily = 50;
let MLily = 50;
let STulip = 2;
let QTulip = 150;
let MTulip = 240;

let Q1 = ()=>{
    console.log("Rose – unit price: " + SRose + ", quantity: " + QRose + ", value: " + MRose);
    console.log("Lily – unit price: " + SLily + ", quantity: " + QLily + ", value: " + MLily);
    console.log("Tulip – unit price: " + STulip + ", quantity: " + QTulip + ", value: " + MTulip);
};





// Question 2

const SRose1 = 8;
const QRose1 = 50;
const MRose1 = 560;
const SLily1 = 10;
const QLily1 = 20;
const MLily1 = 50;
const STulip1 = 2;
const QTulip1 = 150;
const MTulip1 = 240;

let Q2 = ()=>{
    console.log("Rose – unit price: " + SRose1 + ", quantity: " + QRose1 + ", value: " + MRose1);
    console.log("Lily – unit price: " + SLily1 + ", quantity: " + QLily1+ ", value: " + MLily1);
    console.log("Tulip – unit price: " + STulip1 + ", quantity: " + QTulip1 + ", value: " + MTulip1);
    
};

let QD = prompt("do you want to see question 1 or 2? (answer should be 1 or 2)");
if(QD==1){
    Q1();
}
if(QD==2){
    Q2();
}