var arrayTasks = {

	concat: function (arr1, arr2) {
		arr2.forEach(function(element){
			arr1.push(element);
		})
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var array = arr.map(function(number){
			number ** 2
		}
		return array;

	},

	sum: function (arr) {
		var total = 0;

		arr.forEach(function(element) {
			total += element;
		})

		return total;

	},

	findDuplicates: function (arr) {
		var duplicates = [];
		arr.forEach(function(element){
			for(number of arr){
				if (number ==)
			}
		})

	},

	removeAndClone: function (arr, valueToRemove) {
		filter

	},

	findIndexesOf: function (arr, itemToFind) {


	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var

		filter

	}

}

module.exports = arrayTasks
