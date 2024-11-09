// Import the built-in fs module
const fs = require('fs');

// Write new content to the file (overwriting previous content)
fs.writeFile('./docs/blog1.txt', 'Hello World', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('File was written');
    }
});

// Create a directory called 'assets'
fs.mkdir('./assets', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Folder created');
    }
});

// Delete a file (delete-me.txt) from the docs folder
fs.unlink('./docs/delete-me.txt', (error) => {
    if (error) {
        console.log(error);  // If the file doesn't exist, log the error
    } else {
        console.log('File deleted');
    }
});
