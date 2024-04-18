let count = 0;

// ! Method 1

setInterval(() => {
    console.log(count++)
}, 1000);

// ! Method 2

function main() {
    console.log(count++)
    setTimeout(() => {
        main()
    }, 1000);
}
main()