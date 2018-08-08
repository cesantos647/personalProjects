//This is a project that encrypts a message using a caesar cipher

//creates an array for the alphabet and numbers
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Takes message and shift number and creates a variable for the encrypted message
var message;

var shift;

var encryptionWord = [];

var encryption = [];

//Encodes message by the shift number using a caesar cipher
function encode() {

	//Gets message that was submitted
	message = document.getElementById('message').value;

	//Checks if there is a message
	if(typeof(message) === 'undefined' || message === '') {

		alert('Please submit a message');

		return false;

	}

	//Gets shift number that was submitted
	shift = parseInt(document.getElementById('shift').value);

	//Checks if shift number is actually a number
	if(isNaN(shift) === true ) {

		alert('Please submit a number');

		return false;

	}

	//Displays message
	document.getElementById("messages").innerHTML = 'Message: ' + message;

	//Displays shift number
	document.getElementById("shifts").innerHTML = 'Shift Number: ' + shift;

	//Splits message into array of words
	message = message.split(' ');

	//Splits each word in the message into an array of letters
	for(var z = 0; z < message.length; z++) {

		message[z] = message[z].split('');

	}
	//Encodes message word by word
	for(y = 0; y < message.length; y++) {

		//Resets array to prepare for a new word
		encryptionWord = [];

		//Encrypts each letter or number in the word
		for(var i = 0; i < message[y].length; i++) {

			//Resets the search for each letter in the message
			var check = false

			//Checks the alphabet array until the letter is found
			for(var x = 0; x < alphabet.length && check === false; x++){

				//Once the letter is found, the letter is shifted by the amount specified by the user
				if(message[y][i] === alphabet[x]) {

					//Encrypts letter
					encryptionWord.push(alphabet[((x + shift) % alphabet.length)]);

					//Cancels the search
					check = true;

				} else if(message[y][i] === numbers[x % numbers.length]) {

					//Encrypts number
					encryptionWord.push(numbers[((x + shift) % numbers.length)]);

					//Cancels the search
					check = true;

				}

			}

		}
		//Joins the array of encrypted letters into a word 
		encryptionWord = encryptionWord.join('');
		
		//Pushes encrypted word into the encrypted message array
		encryption.push(encryptionWord);

	
	}

	//Joins each item in the array into a single string
	encryption = encryption.join(' ');
	
	//Displays the encrypted message
	document.getElementById("encryption").innerHTML = 'Encrypted Message: ' + encryption;

	return false;

}