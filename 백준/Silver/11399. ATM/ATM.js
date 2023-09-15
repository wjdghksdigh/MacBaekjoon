const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n;
let peoples;

rl.on('line', (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    peoples = input.split(' ').map(Number);
    solve();
    rl.close();
  }
});

function solve() {
  peoples.sort((a, b) => a - b);

  let answer = 0;

  for (let x = 1; x <= n; x++) {
    answer += peoples.slice(0, x).reduce((acc, curr) => acc + curr, 0);
  }

  console.log(answer);
}