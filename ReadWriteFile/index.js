// Import necessary file system functions for reading and writing files using Promises.
import { readFile, writeFile } from 'node:fs/promises';

// Define the file path for the input HTML file.
const filePath = new URL('./index.html', import.meta.url);

// Read the contents of the input HTML file as a string.
let contents = await readFile(filePath, { encoding: 'utf-8' });

// Define the data that will be used for replacing placeholders in the HTML.
const data = {
    name: "vivek",
    company: "GFG",
    age: 25,
}

// Iterate through the data object and replace placeholders in the HTML with corresponding values.
for (const [key, value] of Object.entries(data)) {
    contents = contents.replace(`{{${key}}}`, value);
}

// Define the file path for the output HTML file.
const outputPath = new URL('./newindex.html', import.meta.url);

// Write the modified HTML contents to the output HTML file.
await writeFile(outputPath, contents);

// Log the modified HTML contents to the console.
console.log(contents);
