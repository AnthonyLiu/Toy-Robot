import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input: string) => {
  const [cmd, args] = input.split(' ');

  if (cmd === 'EXIT') {
    rl.close();
  } else if (['PLACE'].includes(cmd)) {
    console.log(`Command input: ${cmd}`)
    console.log(`args inputs: ${args}`)
  }
})