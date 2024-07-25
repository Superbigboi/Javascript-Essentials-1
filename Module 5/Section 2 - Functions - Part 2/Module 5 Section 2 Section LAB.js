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


let choice = prompt("what do you want to display? (first, last, all, new or quit)?");

let showContact = (contacts,index) =>{
    if(contacts instanceof Array && contacts[index]){
        // console.log(true);
        console.log(`${contacts[index].name}/${contacts[index].phone}/${contacts[index].email}`);
        // console.log(contacts[1])
    }
    else{
        console.log("bad input");
    }
};
function showAllContacts(tc){
    if(tc instanceof Array){
           for(number of contacts){
            // console.log(number)
            console.log(`${number.name} / ${number.phone} / ${number.email}`);

            // console.log(number)
        // console.log(`${contacts[number].name}/${contacts[number].phone}/${contacts[number].phone}`);
    }
   }
   else{console.log('input contacts')}
}
function addNewContact(contacts, name, phone, email){
    if(contacts instanceof Array && name && phone && email){
            contacts.push({name:name, phone:phone, email:email});
                        console.log("contact added successfully")
        
    }else{(console.log("contact adding unsuccessful"))}
}


// console.log(showAllContacts(contacts))
// console.log(showContact(contacts,0));
console.log(addNewContact(contacts,'Michael',090,'realkranda@gmail.com'))
console.log(showAllContacts(contacts))