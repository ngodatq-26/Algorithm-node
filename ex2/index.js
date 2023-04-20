const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isValid(str) {
    var brackets = [];

    //using hashmap 
    var map = new Map();
    var arr = str.split('');
    map.set('[', ']');
    map.set('{', '}');
    map.set('(', ')');

    for (let i in arr) {
        if (map.has(arr[i])) {
            //using stack 
            brackets.push(arr[i]);
        } else {
            let pop = brackets.pop();
            if (map.get(pop) !== arr[i]) {
                return false;
            }
        }
    }

    return brackets.length === 0;
}

function main() {
    let n;
    let testCases = [];

    rl.question('input N: ', (answer) => {
        n = parseInt(answer);

        rl.on('line', (input) => {
            testCases.push(input);

            if (testCases.length === n) {
                rl.close();
                for (let i of testCases) {
                    console.log(isValid(i));
                }
            }
        });
    });
}

main();