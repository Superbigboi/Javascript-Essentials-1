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

let showContact = (contacts,index,sort) =>{
    let order;
    if(sort == "name"){contacts.sort(sort)}
    if(sort =="phone"){}
    if(sort == "email"){}

    if(contacts instanceof Array ){
    // if(sort == "name"){order = ["name", "phone", "email"];}
    // else if(sort =="phone"){order = ["phone", "name", "email"];}
    // else if(sort == "email"){order = ["email", "name", "phone"];}
        console.log(`${contacts[index].order[0]}/${contacts[index].order[1]}/${contacts[index].order[32]}`);
    }
    else{
        console.log("wrong input");
    }

}
function showAllContacts(tc){
    if(tc instanceof Array){
           for(let number in contacts){
            console.log(number)
        console.log(`${contacts[number].name}/${contacts[number].phone}/${contacts[number].phone}`);

    }
   }
   else console.log('input contacts')
}
function addNewContact(contacts, name, phone, email,sort){
    if(contacts instanceof Array && name && phone && email){
            contacts.push({name:name, phone:phone, email:email});
                        console.log("contact added successfully");
        
    }else{(console.log("contact adding unsuccessful"))}
}

console.log(showContact(contacts,1))
// console.log(showAllContacts(contacts))
// console.log(showContact(contacts,1));
// console.log(showAllContacts(contacts));
// console.log(addNewContact(contacts,'Michael',090,'realkranda@gmail.com'));
