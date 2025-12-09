//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile('./day2/input.txt', 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        process.send('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        process.exit(1);
    }

    //Split the input
    var data = data.split(',');

    // Define global variables
    var result = 0

    //Start a counting for loop for the ranges
    data:
    for (let i = 0; i < data.length; i++) {

        //Extract relevant information
        var range = data[i].split('-');
        var start = parseInt(range[0]);
        var end = parseInt(range[1]);

        //Loop through every number of the range
        range:
        for (let j = start; j <= end; j++) {

            //Parse the current number into a string
            var value = String(j);
            
            //Start a loop until half the values length
            regex:
            for (let k = 1; k <= value.length/2; k++) {

                //Extract a part of the value as a substring
                substring = value.substring(0, k);

                //Test the substring against a regex query
                reg = new RegExp(`(${substring})*`);
                seq = value.match(reg);

                //If the value was repeated until the end of the string add the value to the result and continue the values for loop
                if (seq[0].length == value.length) {
                    result += parseInt(j);
                    continue range;
                }
            }
        }
    }

    //Send back result
    process.send(result);
    process.exit(0);
});
