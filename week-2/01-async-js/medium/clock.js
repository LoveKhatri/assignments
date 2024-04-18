let hour = 0;
let minute = 0;
let seconds = 0;

// Seconds
setInterval(() => {
    if (seconds++ >= 60) {
        seconds = 0
        if (minute++ >= 60) {
            minute = 0
            hour++;
        }
    }

    console.log(`${hour}:${minute}:${seconds}`)
}, 1000);