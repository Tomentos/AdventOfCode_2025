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
    var result = 0;
    var range = 12;
    var start = 0;
    var count = 0;
    
    for (let i = 0; i < data.length; i++) {
        console.log(`\nCurrent bank\t\t\t${data[i]}`)
        var bank = data[i]
        var limit = bank.length - (range - i);
        var turned = "";
        
        for (let j = 0; j < range; j++) {
            limit = limit - count;
            console.log(`Current Limit\t\t\t${limit}`)
            var store = -1;
            for (let k = start; k < limit; k++) {
                console.log(`Current Loop\n\tStarting Point\t\t${start}\n\tLoop Index\t\t${k}\n\tCurrent Limit\t\t${limit}`)
                if (bank[k] > bank[store] || bank[store] === undefined) {
                    store = bank[k];
                    start = k+1;
                    console.log(`New Number found\n\tNew Number\t\t${bank[i]}\n\tNumber Index\t\t${k}\n\tNext start\t\t${k+1}`)
                }
            }
            turned += bank[store];
            count++;
            console.log(`Current Count\t\t\t${count}`)
        }

        result += parseInt(turned);
        console.log(`Final Number\t\t\t${turned}`);
    }

    //Send back result
    process.send(result);
    process.exit(0);
});


// function jolts(data) {
//     var bank = data.split('');
//     var table = [0,1,2,3,4,5,6,7,8,9,10,11];
//     var limiter = 11;
//     var start = 0;
//     var applied = false;
//     for (let i = 0; i < table.length; i++) {
//         console.log(`\nCurrent Numer\t\t\t${i}\nCurrent limiter\t\t\t${limiter}\nCurrent Start\t\t\t${start}`)
//         var rollback = 0
//         if (start < table[i]) {
//             start = table[i]+1;
//         }
//         for (let j = start; j < bank.length - limiter; j++) {
//             console.log(`Looping through bank\t\t${j} / ${bank.length} - ${limiter}`)
//             console.log(`Comparing numbers\t\t${bank[table[i]]} < ${bank[j]} (Index ${i}) < Index ${j})`)
//             if (bank[table[i]] < bank[j]) {
//                 console.log(`Larger number found for number ${i}\t${bank[j]} > ${bank[table[i]]}`)
//                 table[i] = j;
//                 start = j + 1;
//                 applied = true;
//                 if (i < 11) {
//                     console.log(`Updating next number starting point\t${i} (${table[i + 1]}) = ${j+1}`)
//                     table[i + 1] = j + 1;
//                 }
//             }
//             rollback++;
//         }
//         if (applied) {
//             console.log(`Subtracting from limiter\t${limiter} - ${rollback} = ${limiter - rollback}`)
//             console.log(`Increasing threashhold\t\t${start} + ${rollback} = ${start + rollback}`)
//             limiter -= rollback;
//             start += rollback;
//         } else {
//             limiter--;
//             start++;
//         }
//     }

//     var jolts = `${bank[table[0]]}${bank[table[1]]}${bank[table[2]]}${bank[table[3]]}${bank[table[4]]}${bank[table[5]]}${bank[table[6]]}${bank[table[7]]}${bank[table[8]]}${bank[table[9]]}${bank[table[10]]}${bank[table[11]]}`;
//     console.log(`Resulting jolts are ${jolts}`)
//     return jolts;
// }


    // var data = '234234234234278'
    // var bank = data.split('');
    // var table = [0,1,2,3,4,5,6,7,8,9,10,11];
    // var limiter = 12;
    // var start = 0;
    // var applied = false;
    // for (let i = 0; i < table.length; i++) {
    //     console.log(`\nCurrent Numer\t\t\t${i}\nCurrent limiter\t\t\t${limiter}\nCurrent Start\t\t\t${start}`)
    //     var rollback = 0
    //     if (start < table[i]) {
    //         start = table[i]+1;
    //     }
    //     // if (limiter > 11 - table[i]) {
    //     //     limiter = 11 - table[i];
    //     // }
    //     for (let j = start; j < bank.length - limiter; j++) {
    //         console.log(`Looping through bank\t\t${j} / ${bank.length} - ${limiter}`)
    //         console.log(`Comparing numbers\t\t${bank[table[i]]} < ${bank[j]} (Index ${i}) < Index ${j})`)
    //         if (bank[table[i]] < bank[j]) {
    //             console.log(`Larger number found\t\tNumber ${i} = ${bank[j]} > ${bank[table[i]]}`)
    //             table[i] = j;
    //             start = j + 1;
    //             applied = true;
    //         }
    //         rollback++;
    //     }
    //     if (applied) {
    //         console.log(`Subtracting from limiter\t${limiter} - ${rollback} = ${limiter - rollback}`)
    //         console.log(`Increasing threashhold\t\t${start} + ${rollback} = ${start + rollback}`)
    //         limiter -= rollback;
    //         start += rollback;
    //     } else {
    //         limiter--;
    //         start++;
    //     }
    // }

    // var jolts = `${bank[table[0]]}${bank[table[1]]}${bank[table[2]]}${bank[table[3]]}${bank[table[4]]}${bank[table[5]]}${bank[table[6]]}${bank[table[7]]}${bank[table[8]]}${bank[table[9]]}${bank[table[10]]}${bank[table[11]]}`;
    // console.log(`Resulting jolts are ${jolts}`)
    // return jolts;
