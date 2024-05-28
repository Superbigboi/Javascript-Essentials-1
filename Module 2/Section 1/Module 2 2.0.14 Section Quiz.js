let name1 = " Maxwell Wright";
let name2 = " Raja Villarreal";
let name3 = " Helen Richards";
let phone1 = " (0191) 719 6495";
let phone2 = " 0866 398 2895";
let phone3 = " 0800 1111";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";
let email2 = "posuere.vulputate@sed.com";
let email3 = "libero@convallis.edu";

let v = prompt("do you want to see version 1 or 2?");
if(v==1){
	console.log("Name: " +name1+",  Phone Number: "+ phone1 + ",  Email Address: " + email1);
console.log("Name: " +name2+",  Phone Number: "+ phone2 + ",  Email Address: " + email2);
console.log("Name: " +name3+",  Phone Number: "+ phone3 + ",  Email Address: " + email3);
}
else if(v==2){
console.log(name1+"/"+phone1+"/"+email1);
console.log(name2+"/"+phone2+"/"+email2);
console.log(name3+"/"+phone3+"/"+email3);
}
else{
console.log("make sure your input is either 1 or 2");
}


