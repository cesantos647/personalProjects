//This is an algorithm that sorts an unsorted array of numbers

let unsortedList = [1,2,4,6,3];

let sortedList = [];

var check = true;

function sort() {

	//checks if the first number in the unsorted array is a number
	if(typeof(unsortedList[0]) === "number") {

		//pushes the first number into the sorted array
		sortedList.push(unsortedList[0]);

	} else {

		//does nothing
		return false;

	}

	//checks the whole list
	for(var i = 1; i < unsortedList.length; i++) {

		check = true;

		//checks if the number in the unsorted array is a number
		if(typeof(unsortedList[i]) === "number") {

			//checks if greater than the number and goes on until it find a place where it is greater than all previous areas
			while(check === true) {

				for(var z = 0; z < sortedList.length && check === true; z++) {

					if(unsortedList[i] > sortedList[z]) {
						
						//pushes the item in the correct place
						sortedList.splice(z, 0, unsortedList[i]);

						//stops cycle
						check = false

					} else {

						check = true
					
					}

			}

		}

		} else {
		
			//Does nothing
			return false
		
		}
	
	}

}

sort();

console.log(unsortedList);

console.log(sortedList);