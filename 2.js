

const itp = require('image-to-pdf')
const fs = require('fs')
const path = require('path')

const pages = fs.readdirSync('./grabs').map((page) => path.join(__dirname,'grabs',page))

console.log(pages)
// Custom sorting function to sort file paths in numerical order
function numericalSort(a, b) {
    const numA = parseInt(a.match(/\d+/)[0], 10); // Extract numeric part from file path
    const numB = parseInt(b.match(/\d+/)[0], 10);
    return numA - numB;
  }
  
  // Sort the file paths using the custom sorting function
  pages.sort(numericalSort);

// second arg is resolution, be sure to verify
itp(pages, [500, 655])
    .pipe(fs.createWriteStream('output.pdf'))