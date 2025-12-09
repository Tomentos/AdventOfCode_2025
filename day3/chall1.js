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
    var result = 0

    for (let i = 0; i < data.length; i++) {

        var bank = data[i].split('');
        var first = 0;
        var second = 1;

        for (let i = 0; i < bank.length - 1; i++) {
            if (bank[i] > bank[first]) {
                first = i;
                second = i + 1;
            }
        }
        for (let i = second; i < bank.length; i++) {
            if (bank[i] > bank[second]) {
                second = i;
            }
        }
        
        var jolts = `${bank[first]}${bank[second]}`;
        result += parseInt(jolts);
    }

    //Send back result
    process.send(result);
    process.exit(0);
});
