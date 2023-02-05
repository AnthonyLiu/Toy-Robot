import readline from 'readline';
import { Robot } from './src/robot';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const robot = new Robot();

rl.on('line', (input: string) => {
  const [cmd, args] = input.split(' ');

  if (['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'].includes(cmd)) {
    switch (cmd) {
      case 'PLACE':
        if (!args) {
          console.log('Missing parameters.')
        } else {
          displayCmdStatus(cmd, robot.place(args));
        }
        break;
      case 'MOVE':
         displayCmdStatus(cmd, robot.move());
        break;
      case 'LEFT':
         displayCmdStatus(cmd, robot.left());
        break;
      case 'RIGHT':
         displayCmdStatus(cmd, robot.right());
        break;
      case 'REPORT':
         displayCmdStatus(cmd, robot.report());
        break;
    }
  } else {
    console.log('Invalid command.')
  }
})

const displayCmdStatus = (cmdName: string, succeeded: boolean): void => {
  if (succeeded) {
    console.log(`Run '${cmdName}' successfully.`)
  } else {
    console.log(`Run '${cmdName}' failed.`)
  }
}