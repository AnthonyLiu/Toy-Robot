# Toy Robot

#### Table Of Contents
- [Requirements](#requirements)
- [Configuration and Instruction](#configuration-and-instruction)
- [Testing Instructions](#testing-instructions)


### Requirements

- Simulate a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface. The robot is free to roam around the surface of the table but must be prevented from falling to destruction.
- Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
- All commands should be discarded until a valid place command has been executed.

### Configuration and Instruction

Install dependencies,
```
$ npm ci
```

Start the robot,
```
$ npm start
```

All supported commands:
- PLACE X,Y,DIRECTION\
X and Y are integers that indicate a location on the tabletop.\
DIRECTION is a string indicating which direction the robot should face. It it one of the four cardinal directions: NORTH, EAST, SOUTH or WEST.
- MOVE\
Instructs the robot to move 1 square in the direction it is facing.
- LEFT\
Instructs the robot to rotate 90° anticlockwise/counterclockwise.
- RIGHT\
Instructs the robot to rotate 90° clockwise.
- REPORT\
Outputs the robot's current location on the tabletop and the direction it is facing.

Here is a sample test for commands,
```
PLACE 1,0,NORTH => Run 'PLACE' failed.
PLACE 1,1,NORTH => Run 'PLACE' successfully.
REPORT          => Run 'REPORT' successfully. && Display table
MOVE            => Run 'MOVE' successfully.
LEFT            => Run 'LEFT' successfully.
MOVE            => Run 'MOVE' failed.
RIGHT           => Run 'RIGHT' successfully.
RIGHT           => Run 'RIGHT' successfully.
MOVE            => Run 'MOVE' successfully.
REPORT          => Run 'REPORT' successfully. && Display table
```

### Testing Instructions

Run `npm test` to run all the unit tests.

```
$ npm test
```