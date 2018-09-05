//This is an algorithm that sorts an unsorted array of numbers
//fixed system
let unsortedList = [];

let sortedList = [];

var check = true;

function sort() {

	unsortedList = document.getElementById('message').value.split('');

	console.log(unsortedList);

	//checks if the first number in the unsorted array is a number
	if(typeof(parseInt(unsortedList[0])) === "number") {

		//pushes the first number into the sorted array
		sortedList.push(parseInt(unsortedList[0]));

	}

	//checks the whole list
	for(var i = 1; i < unsortedList.length; i++) {

		unsortedList[i] = parseInt(unsortedList[i]);
		
		//resets sorting method
		check = true;

		//checks if the number in the unsorted array is a number
		if(typeof(parseInt(unsortedList[i])) === "number") {

			//checks if greater than the number and goes on until it find a place where it is greater than all previous areas
			while(check === true) {

				//checks each item in the array until var check is false
				for(var z = 0; z < sortedList.length && check === true; z++) {

					if(unsortedList[i] > sortedList[z] || z === (sortedList.length) || unsortedList[i] === sortedList[z]) {
						
						//pushes the item in the correct place
						sortedList.splice(z, 0, unsortedList[i]);

						//stops cycle
						check = false;

					} else if(z === (sortedList.length - 1)) {

						//pushes the item in the correct place
						sortedList.push(unsortedList[i]);

						//stops cycle
						check = false;

					}

				}

			}
		
		}
	
	}

}
