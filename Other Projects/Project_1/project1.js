//This is a project that encrypts a message using a caesar cipher

//creates an array for the alphabet and numbers
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Takes message and shift number and creates a variable for the encrypted message
var message = prompt("Please enter a message you would like to encode");

var shift = parseInt(prompt('Please enter the the shift number'));
var encryptionWord = [];
var encryption = [];

document.getElementById('message').innerHTML = 'Message: ' + message;

document.getElementById('shift').innerHTML = 'Shift Number: ' + shift;

//Encodes message by the shift number using a caesar cipher
function encode() {

	//splits message into array of words
	message = message.split(' ');

	//splits each word into an arra
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}

	for(y = 0; y < message.length; y++) {

		encryptionWord = [];

		for(var i = 0; i < message[y].length; i++) {

			//resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					encryptionWord.push(alphabet[((x + shift) % alphabet.length)]);

					//cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					encryptionWord.push(numbers[((x + shift) % numbers.length)]);

					check = true;

				}

			}

		}

		encryptionWord = encryptionWord.join('');

		encryption.push(encryptionWord);

	
	}

	encryption = encryption.join(', ');
	
	document.getElementById("encryption").innerHTML = 'Encrypted Message: ' + encryption;

}

encode();
