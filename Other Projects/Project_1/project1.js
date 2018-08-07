//This is a project that encrypts a message using a caesar cipher

//creates an array for the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Takes message and shift number
var message = prompt("Please enter a message you would like to encode");

var shift = parseInt(prompt("Please enter the the shift number"));

//Encodes message by the shift number
function encode() {

	//splits message into array
	message = message.split("");

	//console.log(message);

	for(var i = 0; i < message.length; i++) {
		
		//resets the search for each letter in the message
		var check = false

		//Checks the alphabet array until the letter is found
		for(var x = 0; x < alphabet.length && check === false; x++){

			//Once the letter is found, the letter is shifted by the amount specified by the user
			if(message[i] === alphabet[x]) {

				message[i] = alphabet[((x + shift) % 26)];

				//cancels the search
				check = true;

			}

		}

	}
	console.log(message);

}

encode();
