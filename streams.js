const fs = require('fs');

// Create a read stream from the blog3.txt file
const readStream = fs.createReadStream('./docs/blog3.txt', 'utf8');

// Create a write stream to the blog4.txt file
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Listen for the 'data' event on the read stream, which fires when we get a chunk of data
readStream.on('data', (chunk) => {
    console.log('New chunk:');
    console.log(chunk);  // Log each chunk of data to the console
});

// Pipe the read stream into the write stream
readStream.pipe(writeStream);

console.log('Piping data from blog3.txt to blog4.txt...');
