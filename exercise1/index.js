const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculateGold(m, d, k, c) {
    let kills = m;
    let durability = d;
    let gold = 0;

    while (kills > 0) {
        if (durability <= 0) {
            return -1;
        }

        if (kills * k <= durability) {
            break;
        }

        let timesToRepair = Math.ceil((kills * k - durability) / d);

        if (timesToRepair * c > gold) {
            return -1;
        }

        gold -= timesToRepair * c;
        durability = d;
        kills -= Math.floor(durability / k);
        durability -= Math.floor(durability / k) * k;
    }

    return gold;
}

function main() {
    let m, d, k, c;

    rl.question('Nhập số con quái vật trong map (m): ', (answer) => {
        m = parseInt(answer);

        rl.question('Nhập độ bền của thanh kiếm (d): ', (answer) => {
            d = parseInt(answer);

            rl.question('Nhập số đơn vị độ bền bị giảm khi giết một con quái vật (k): ', (answer) => {
                k = parseInt(answer);

                rl.question('Nhập số tiền để sửa một lần thanh kiếm (c): ', (answer) => {
                    c = parseInt(answer);

                    const result = calculateGold(m, d, k, c);
                    console.log(result);

                    rl.close();
                });
            });
        });
    });
}

main();