const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function countWays(x, y) {
    return combination(x+y, x);
}

//tinh to hop
function combination(n, k) {
    if (k === 0 || n === k) {
        return 1;
    }
    return combination(n - 1, k - 1) + combination(n - 1, k);
}

function main() {
    let n;
    let testCases = [];

    rl.question('input N: ', (answer) => {
        n = parseInt(answer);

        rl.on('line', (input) => {
            let [x, y] = input.split(' ').map(Number);
            testCases.push([x, y]);

            if (testCases.length === n) {
                rl.close();

                for (let i of testCases) {
                    console.log(countWays(i[0], i[1]));
                }
            }
        });
    });
}

main()

