//Import required libraries
const fs = require('fs');

//Read input data
fs.readFile('./day1/input.txt', 'utf8', (err, data) => {

    //Error event for readFile function
    if (err) {
        console.log('Error when reading input.txt File.\nMake sure the file exists and contains the correct contents.\n' + err);
        return;
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

        if (direction == 'L') {

            //Couldn't figure out what the error was with my original idea, so im doing the dumb version now.
            //Incrementing every click in the direction and checking the value each and every click.
            for (let i = 0; i != amount; i++) {
                lock -= 1;

                if (lock == 0) {
                    result++;
                }

                if (lock == -1) {
                    lock += 100;
                }
            }
        }
        else if (direction == 'R') {

            //Couldn't figure out what the error was with my original idea, so im doing the dumb version now.
            //Incrementing every click in the direction and checking the value each and every click.
            for (let i = 0; i != amount; i++) {
                lock += 1;

                if (lock == 100) {
                    lock -= 100;
                }

                if (lock == 0) {
                    result++;
                }
            }
        }
    }

    //Send back result
    process.send(result);
    process.exit(0);
});
