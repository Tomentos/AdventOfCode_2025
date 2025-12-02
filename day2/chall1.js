//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile('./day2/input.txt', 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        console.log('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        return;
    }

    //Split the input
    var data = data.split(',');

    // Define global variables
    var result = 0

    for (let i = 0; i < data.length; i++) {
        var range = data[i].split('-');
        var start = parseInt(range[0]);
        var end = parseInt(range[1]);

        for (let j = start; j <= end; j++) {
            let value = String(j);
            var first = value.substring(0, value.length / 2);
            var second = value.substring(value.length / 2);

            if (first == second) {
                result += parseInt(j);
            }
        }
    }
    console.log("\n"+result);
});