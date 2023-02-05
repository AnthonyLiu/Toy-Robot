import 'mocha';
import { expect } from 'chai';
import { Robot, Directions } from '../../src/robot';

describe("Robot", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  // test place function
  describe("place action", () => {
    it("Should act when passing correct arguments", function () {
      const testArg = '1,1,NORTH';
      expect(robot.place(testArg)).to.be.true;
      expect(robot.getStatus()).to.equal('1, 1, NORTH');
    });

    it("Should ignore when passing incorrect arguments", function () {
      const testArg = '0,1,NORTH';
      robot.place(testArg);
      expect(robot.place(testArg)).to.be.false;
      expect(robot.getStatus()).to.equal('undefined, undefined, undefined');
    });
  })
});