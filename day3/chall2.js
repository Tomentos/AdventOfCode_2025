//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile('./day3/test.txt', 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        process.send('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        process.exit(1);
    }

    //Split the input
    var data = data.split('\r\n');

    // Define global variables
    var result = 0

    for (let h = 0; h < data.length; h++) {
        var turned = jolts(data[h]);
        console.log(turned);
        result += parseInt(turned);
    }

    //Send back result
    process.send(result);
    process.exit(0);
});


function jolts(data) {
    var bank = data.split('');
    var table = [0,1,2,3,4,5,6,7,8,9,10,11];
    var limiter = 11;
    var threash = 0;
    var applied = false;
    for (let i = 0; i < table.length - 1; i++) {
        var rollback = 0
        for (let j = 0; j < bank.length - limiter; j++) {
            if (bank[table[i]] < bank[j]) {
                table[i] = j;
                applied = true;
                if (i < 11) {
                    table[i + 1] = j + 1;
                }
            }
            rollback++;
        }
        if (applied) {
            limiter -= rollback;
            threash += rollback;
        } else {
            limiter += rollback;
            threash -= rollback;
        }
    }
    var jolts = `${bank[table[0]]}${bank[table[1]]}${bank[table[2]]}${bank[table[3]]}${bank[table[4]]}${bank[table[5]]}${bank[table[6]]}${bank[table[7]]}${bank[table[8]]}${bank[table[9]]}${bank[table[10]]}${bank[table[11]]}`;
    return jolts;
}