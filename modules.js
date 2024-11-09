// Importing the people and ages arrays from people.js
const { people, ages } = require('./people');  // Destructuring the import
console.log(people);
console.log(ages);

// Importing the built-in 'os' module to get system information
const os = require('os');
console.log(os.platform());  // Logs the platform you're running on (e.g., 'win32' for Windows)
console.log(os.homedir());   // Logs the home directory
