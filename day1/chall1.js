//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile('./day1/input.txt', 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        process.send('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        process.exit(1);
    }

    //Split the input into it's seperate lines
    data = data.split('\n');

    //Prepare the fixed variables
    var result = 0;
    var lock = 50;

    //Loop through all the data
    for (line of data) {

        //Define important variables
        var direction = line[0];
        var amount = parseInt(line.substring(1));

        //Rotate either Left or right
        switch(direction) {
            case 'L':
                lock -= amount;

                //If the number goes below 0, add onto it until it is in range again
                while(lock < 0) {
                   lock += 100;
                }

                break;
            
            case 'R':
                lock += amount;

                //If the number goes above 99, subtract from it until it is in range again
                while(lock > 99) {
                    lock -= 100;
                }

                break;
        }

        //Add to the result if the number was exactly 0
        if (lock == 0) {
            result++;
        }
    }

    //Send back result
    process.send(result);
    process.exit(0);
});
