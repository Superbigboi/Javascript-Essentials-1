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

let end = false;
do{
	let option = prompt("what do you want to display? (first, last, all, new or quit)?");
switch (option){
    case "first":
        alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case "last":
        let lastContact = contacts.length -1;
        alert(`${contacts[lastContact].name} / ${contacts[lastContact].phone} / ${contacts[lastContact].email}`);
        break; 
    case "all":
    	  for (let number in contacts) {
    		alert(`Contact ${Number(number)+1}:  ${contacts[number].name} / ${contacts[number].phone} / ${contacts[number].email}`);
    		// console.log(number);
		}
		break;
    case "new":
        let addName = prompt("What do you want the name to be?","Michael");
        let addPhone = prompt("What do you want the phone number to be?","(090) 798 00000");
        let addEmail = prompt("What do you want the email to be?","email@domain.com");
        let Ncontacts = {name:"", phone:"", email:""};
        let test = addName && addPhone && addEmail;
        if(test){
            Ncontacts.name = addName;
      Ncontacts.phone = addPhone;
      Ncontacts.email = addEmail;
      contacts.push(Ncontacts);
            // alert(`${contacts[3].name} / ${contacts[3].phone} / ${contacts[3].email}`);
            alert(`contacts added successfully!`);
            console.log(`contacts added successfully!`);
        } 
        else{
             addName = addName? " " : "Name";
             addPhone = addPhone? " " :  "Phone";
             addEmail = addEmail? " " : "Email";
            alert(`you didn't input in the fields: ${addName} ${addPhone} ${addEmail}`);
            console.log(`contacts adding unsuccessful`);
        }
        break;
    	case "quit":
    		end = true;
    		alert("exiting the program")
    		break;
    default:
        alert("invalid choice, please input 'first', 'last' 'all', 'new' or 'quit'");
}
}
while (end===false);