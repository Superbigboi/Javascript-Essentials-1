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
                console.log(`${number.name} / ${number.phone} / ${number.email}`);
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
function sName(){
    // for(number in contacts){
    //     let tC = contacts[number];
    //     // let eN = contacts[number].name;


    //     // console.log(eN);
    //     // alert(eN);
    // }
}
function sPhone(){
    // if()

    // for(let number in contacts){
    //     contacts[number].sort((a, b) => a - b);
    // } 
    // console.log(r)
    
    // for(let number in contacts){
        let x = contacts.sort(function (a, b) {
            let retVal = 0;
            if (a > b) {
                retVal = 1;
            } else {
                retVal = -1;
            }
            return retVal;
       });
        alert(x);
        console.log(x);
    } 
    // console.log(r)
// }
function sEmail(){

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
            else{alert("invalid input");break;}
            
            // sortType(type)
        case "quit":
            end = true; 
            break;
        case null:
            end=true;
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