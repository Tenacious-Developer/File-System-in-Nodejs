// Required dependencies
const fs = require('fs');
const TransformStream = require('stream').Transform;

// Create a readable stream to read from 'run.txt' in the current directory
const readstream = fs.createReadStream(__dirname + '/run.txt');

// Create a writable stream to write transformed data to 'write.txt' in the current directory
const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// Create a transform stream to convert data to uppercase and introduce a delay
const transFormedStream = new TransformStream({
    transform(chunk, enc, cb) {
        // Transform the data to uppercase
        this.push(chunk.toString().toUpperCase());

        // Simulate a delay of 3 seconds before calling the callback
        setTimeout(cb, 3000);
    }
});

// Create a writable stream to display transformed data on the console (stdout)
const writeStream = process.stdout;

// Pipe the transformed data from the readable stream to the transform stream
const outputSteam = readstream.pipe(transFormedStream);

// Pipe the transformed data to both the console and the 'write.txt' file
outputSteam.pipe(writeStream);
outputSteam.pipe(fileWriteStream);
