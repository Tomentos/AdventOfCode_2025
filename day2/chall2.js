//Import required libraries
const { subscribe } = require('diagnostics_channel');
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

    data:
    for (let i = 0; i < data.length; i++) {
        var range = data[i].split('-');
        var start = parseInt(range[0]);
        var end = parseInt(range[1]);

        range:
        for (let j = start; j <= end; j++) {
            var value = String(j);
            
            regex:
            for (let k = 1; k <= value.length/2; k++) {

                substring = value.substring(0, k);
                reg = new RegExp(`(${substring})*`);
                seq = value.match(reg);

                if (seq[0].length == value.length) {
                    result += parseInt(j);
                    continue range;
                }
            }
        }
    }
    console.log(result);
});