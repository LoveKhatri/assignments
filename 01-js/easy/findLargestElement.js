/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggest = numbers[0]
    for (let num of numbers) {
        if (num > biggest) {
            biggest = num
        }
    }
    return biggest
    // Implementing Quick Sort in JS

    // function partition(arr, low, high) {
    //     const pivot = arr[high];

    //     let i = low - 1;

    //     for (let j = low; j <= high - 1; j++) {
    //         if (arr[j] < pivot) {
    //             i++;

    //             // SWAP
    //             [arr[i], arr[j]] = [arr[j], arr[i]]
    //         }
    //     }

    //     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

    //     return i + 1;
    // }

    // function quickSort(arr, low, high) {
    //     if (low < high) {
    //         let pi = partition(arr, low, high)

    //         quickSort(arr, low, pi - 1);
    //         quickSort(arr, pi + 1, high)
    //     }
    // }

    // quickSort(numbers, 0, numbers.length - 1)

    // return numbers[numbers.length - 1]
}

module.exports = findLargestElement;