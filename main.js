//Import Modules
const { fork } = require('child_process');
const prompt = require('prompt');

//Define Prompt Scheme
const schema = {
    properties: {
        day: {
            pattern: /\b(0?[1-9]|[12][0-9]|3[01])\b/g,
            message: 'Please enter the Number of the puzzle for which you want to run the script for.',
            required: true
        },
        challenge: {
            pattern: /\b[1-2]/g,
            message: 'There are two challenges per day, pick either 1 or 2.',
            required: true
        }
    }
};

//Open Prompt
prompt.start();
prompt.get(schema, function (err, input) {

    //Error event for prompt
    if (err) {
        console.log(`Error found in prompt result.\n${err}`);
        return;
    }

    //Create path from user input
    var path = `./day${input.day}/chall${input.challenge}.js`;

    //Execute script as child process
    var timer = Date.now();
    const child = fork(path);

    //Print returned process messages
    child.on('message', (msg) => {
        console.log(`\nOutput: ${msg}`);
    });
    child.on('close', (code) => {
        console.log(`Script finished with code ${code}\nExecuted in ${Date.now() - timer}ms`);
    });

});
