let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


let optionF = confirm("Do you want to display the first contact?");
if(optionF){
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
     console.log(`first contact ${optionF}`);
     
}else{console.log(`first contact ${optionF}`);}

let optionL = confirm("Do you want to display the last contact?");
if(!optionF&&optionL){
    alert(`${contacts[2].name} / ${contacts[2].phone} / ${contacts[2].email}`);
    console.log(`last contact ${optionL} && !${optionF}`);
            
}else{console.log(!optionL && !optionF);}
let optionA = confirm("Do you want to add another contact to the list?");
let addName = prompt("What do you want the name to be?","Michael");
let addPhone = prompt("What do you want the phone number to be?","123");
let addEmail = prompt("What do you want the email to be?","realkranda@gmail.com");
let Ncontacts = {name:"", phone:"", email:""};


if(optionA&&!optionF&&!optionL){
//  addName ? addName : false;
//  addPhone ? addPhone :  false;
//  addEmail ? addEmail : false;
    let test = Boolean(addPhone) && Boolean(addName)&& Boolean(addEmail);
    switch(test){
        case true:
            Ncontacts.name = addName;
            Ncontacts.phone = addPhone;
            Ncontacts.email = addEmail;
            contacts.push(Ncontacts);
            console.log(optionA&&!optionF&&!optionL);

            alert(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);
            // console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            break;
        default:
            alert("you inputed something wrong");
    }
        
    
}
            
else{console.log(`adding of contacts ${optionA&&!optionF&&!optionL}`); alert("you inputed something wrong");}