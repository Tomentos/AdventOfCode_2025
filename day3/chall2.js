//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile(process.argv[2], 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        process.send('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        process.exit(1);
    } else if (data === '') {
        process.send('Error when reading input file.\nIt seems the input file is empty.\nPlease make sure it contains the required data');
        process.exit(1);
    }

    //Split the input
    var data = data.split('\r\n');

    // Define global variables
    var result = 0;
    var range = 12;
    
    for (bank of data) {

        var store = -1;
        var on = "";

        for (i = 1; i <= range; i++) {
            store++;

            for (j = store; j < bank.length - range + i; j++) {

                if (bank[j] > bank[store] || bank[store] === undefined) {
                    store = j;
                }
            }

            on += bank[store]
        }

        result += parseInt(on)
    }

    //Send back result
    process.send(result);
    process.exit(0);
});
