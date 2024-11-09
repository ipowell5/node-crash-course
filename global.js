// Log the global object to the console
console.log(global);

// Use setTimeout to log a message after 3 seconds
setTimeout(() => {
    console.log("In the timeout");
}, 3000);

// Use setInterval to log a message every second, and clear it after 3 seconds
const interval = setInterval(() => {
    console.log("In the interval");
}, 1000);

// Clear the interval after 3 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 3000);

// Log the current directory path using __dirname
console.log("Current directory:", __dirname);

// Log the current file path using __filename
console.log("Current file:", __filename);
