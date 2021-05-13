//1.
const getSum = (n) => {
	let sum = 0;
	while (n >= 0) {
		sum += n;
		n--;
	}
	return sum;
};

//2.
const arr = [1, 25, 7, -7, -3, 12, -22, 0];
function bubbleSort(array) {
	let done = false;
	while (!done) {
		done = true;
		for (let i = 1; i < array.length; i += 1) {
			if (array[i - 1] > array[i]) {
				done = false;
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;
			}
		}
	}

	return array;
}

function sortAbs(array) {
	let done = false;
	while (!done) {
		done = true;
		for (let i = 1; i < array.length; i += 1) {
			if (array[i - 1] ** 2 === array[i] ** 2) {
				if (array[i - 1] > array[i]) {
					let temp = array[i - 1];
					array[i - 1] = array[i];
					array[i] = temp;
				}
			}
			if (array[i - 1] ** 2 > array[i] ** 2) {
				done = false;
				let temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;
			}
		}
	}
	return array;
}
console.log(sortAbs(arr));

//3.
let tests = [
	{
		input: "https://cdn.shopify.com/e.jpg?v=15",
		output: "https://cdn.shopify.com/e_100x.jpg?v=15",
		size: "100x",
	},
	{
		input: "https://cdn.shopify.com/e_100x200.jpg?v=15",
		output: "https://cdn.shopify.com/e_x200.jpg?v=15",
		size: "x200",
	},
	{
		input: "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
		output: "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
		size: "100x",
	},
	{
		input:
			"https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
		output:
			"https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
		size: "x100",
	},
	{
		input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
		output: "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
		size: "100x200",
	},
];

let replaceSize = function () {
	let results = [];

	tests.forEach((test) => {
		const regex = /((_((....)?\d+.))?\.jpg\?)/g;
		const output = test.input.replace(regex, "_" + test.size + ".jpg?");
		results.push(output);
	});

	return results;
};

// console.log(replaceSize());
