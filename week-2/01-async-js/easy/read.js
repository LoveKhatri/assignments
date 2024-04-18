// const fs = require('fs');

// fs.readFile('easy/1-counter.md', 'utf-16le', async (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     const d = data
//     console.log(d)
// })

// let sum = 0
// for (let i = 0; i < 100000; i++) {
//     sum += i
// }

// fs.writeFile('easy/1-counter.md', "## Create a counter in JavaScript\n\nWe have already covered this in the second lesson, but as an easy recap try to code a counter in JavascripnIt should go up as time goes by in intervals of 1 second", (err, data) => {
//     console.log(data)
// })

// const fs = require('fs');

// Function to read file contents and print to console
// function readFileAndPrint(filename) {
//     fs.readFile(filename, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }

//         console.log('File content:');
//         console.log(data);

//         // Perform an expensive operation after reading the file
//         performExpensiveOperation();
//     });
// }

// // Function simulating an expensive operation
// function performExpensiveOperation() {
//     console.log('Starting expensive operation...');
//     // Simulating an expensive operation by looping for a large number
//     let sum = 0;
//     for (let i = 0; i < 100000000; i++) {
//         sum += i;
//     }
//     console.log('Expensive operation completed. Sum:', sum);
// }

// // Read file and print its contents
// readFileAndPrint('easy/1-counter.md');


const fs = require('fs');

// Function to read file contents synchronously and print to console
function readFileAndPrint(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        console.log('File content:');
        console.log(data);

        // Simulate expensive operation
        console.log('Starting expensive operation...');
        // Simulating an expensive operation by looping for a large number
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        console.log('Expensive operation completed. Sum:', sum);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

// Read file synchronously and print its contents
readFileAndPrint('easy/1-counter.md');
