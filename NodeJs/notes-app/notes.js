const fs = require('fs');
console.log("node.js");

const getNotes = function () {
    console.log("your notes...");
    fs.mkdir('output', { recursive: true }, (err) => {
        if (err) throw err;
      });
    fs.writeFileSync('output/note.txt', 'this is my first notes');

    fs.appendFileSync('output/note.txt', '\nthis is the appended liness');
    return null;
}

module.exports = getNotes