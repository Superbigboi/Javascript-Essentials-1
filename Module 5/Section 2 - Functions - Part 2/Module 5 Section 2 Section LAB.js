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

let showContact = (contacts,index) =>{
    if(contacts instanceof Array){
        console.log(true);
    }
    else{
        console.log(false)
    }
}
function showAllContacts(){}
function addNewContact(){}

console.log(showContact(contacts[1]))