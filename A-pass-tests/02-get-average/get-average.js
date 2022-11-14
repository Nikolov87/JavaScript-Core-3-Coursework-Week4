// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let result = numbers.filter((element) => typeof element === 'number')
    console.log(result)
    let average = result.reduce((a, b) => a + b) / result.length
    return average
}
console.log(average([13, 10, 12, "i", "a"]));
module.exports = average;
