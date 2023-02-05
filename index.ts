import readline from 'readline';
import { Robot } from './src/robot';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input: string) => {
  const [cmd, args] = input.split(' ');
  const robot = new Robot();

  if (cmd === 'EXIT') {
    rl.close();
  } else if (['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'].includes(cmd)) {
    switch (cmd) {
      case 'PLACE':
        robot.place(args);
        break;
      case 'MOVE':
        robot.move();
        break;
      case 'LEFT':
        robot.left();
        break;
      case 'RIGHT':
        robot.right();
        break;
      case 'REPORT':
        robot.report()
        break;
    }
  }
})