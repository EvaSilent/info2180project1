


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(contacts.lastName === contacts[i].lastname)
		printPerson(contacts[i]);
}
}
search("Jones");
function add(firstName, lastName, phoneNumber, email) {
var person = new Object();
person.firstName = firstName;
person.lastName = lastName;
person.phoneNumber = phoneNumber;
person.email = email;

contacts[contacts.length] = person;    
}

firstName = prompt("what is your first name?");
lastName = prompt("what is your last name?");
email = prompt("what is your email address?");
phoneNumber = prompt("what is your telephone number?");
add(firstName, lastName, phoneNumber, email);
list();