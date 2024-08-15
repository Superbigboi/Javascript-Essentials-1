let contacts = [{
    name: "Maxwell Wright",
    phone: "0191 719 6495",
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
        if(contacts instanceof Array && contacts[index]){
            // console.log(true);
            console.log(`${contacts[index].name}/${contacts[index].phone}/${contacts[index].email}`);
            alert(`${contacts[index].name}/${contacts[index].phone}/${contacts[index].email}`);
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
                // console.log(`${number.name} / ${number.phone} / ${number.email}`);
                alert(`${number.name} / ${number.phone} / ${number.email}`);
    
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




// function sortType(t){
//     if (t=="name"){sName()}
//     else if (t=="phone"){}
//     else if (t=="email"){}
//     else{return "input name, phone, or email"}
// }

function sName() {
    contacts.sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    console.log("Contacts sorted by name:");
    showAllContacts(contacts);
  }

function sPhone(){

    // // for(number of contacts){
    // //     let No = contacts[number];
    // //     // contacts[number].sort((a, b) => a - b);
    // // };
    // contacts.sort(function(a, b) {
    //   return a - b;
    // });
    // showAllContacts(contacts)
    // // console.log(contacts);
    contacts.sort((a, b) => {
        if (a.phone > b.phone) return 1;
        else if (a.phone < b.phone) return -1;
        else return 0;
      });
      console.log("Contacts sorted by name:");
      showAllContacts(contacts);
}
function sEmail(){
    contacts.sort((a, b) => {
        if (a.email > b.email) return 1;
        else if (a.email < b.email) return -1;
        else return 0;
      });
      console.log("Contacts sorted by email address:");
      showAllContacts(contacts);
    }



let end = false;


do{
    let choice = prompt("what do you want to display? (first, last, all, new, sort, or quit)?");
    switch(choice){
        case "first":
            showContact(contacts,0);
            break;
        case "last":
            showContact(contacts,contacts.length-1);
            break;
        case "all":
            showAllContacts(contacts);
            break;
        case "new":
            let name = prompt("Enter name:","Michael");
            let phone = prompt("Enter phone:","090 971 00909");
            let email = prompt("Enter email:","email@domain.com");
            addNewContact(contacts, name, phone, email);
            break;
        case "sort":
            let type = prompt("do you want to sort by name, email, or phone?");
            if (type=="name"){sName()} 
            else if (type=="email"){sEmail()}
            else if (type=="phone"){sPhone()}
            else{alert("invalid input")};
            break;
        case "quit":
            end = true; 
            break;
        case null:
            end=true;
            break;
        case "r":
            end=true;
            location.reload();
            break;
        default:
            alert("Invalid option");
            break;
     
    }
}
    

while(end==false)



// console.log(showAllContacts(contacts))
// console.log(showContact(contacts,0));
// console.log(addNewContact(contacts,'Michael',090,'realkranda@gmail.com'))
// console.log(showAllContacts(contacts))