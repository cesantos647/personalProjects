//This is a project that encrypts a message using a caesar cipher

//creates an array for the alphabet and numbers
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
//var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Takes message and shift number and creates a variable for the encrypted message
var message = prompt("Please enter a message you would like to encode");

var shift = parseInt(prompt('Please enter the the shift number'));

var encryption = [];

document.getElementById('message').innerHTML = message;

document.getElementById('shift').innerHTML = shift;

//Encodes message by the shift number
function encode() {

	//splits message into array
	message = message.split('');

	for(var i = 0; i < message.length; i++) {

		//resets the search for each letter in the message
		var check = false

		//Checks the alphabet array until the letter is found
		for(var x = 0; x < alphabet.length && check === false; x++){

			//Once the letter is found, the letter is shifted by the amount specified by the user
			if(message[i] === alphabet[x]) {

				encryption.push(alphabet[((x + shift) % 26)]);

				//cancels the search
				check = true;

			}

		}

	}

	document.getElementById("encryption").innerHTML = encryption;

}

encode();
