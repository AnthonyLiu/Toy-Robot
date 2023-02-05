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
      const testArg = '0,0,NORTH';
      robot.place(testArg);
      expect(robot.getStatus()).to.equal('0, 0, 1');
    });

    it("Should ignore when passing incorrect arguments", function () {
      const testArg = '0,-1,NORTH';
      robot.place(testArg);
      expect(robot.getStatus()).to.equal('undefined, undefined, null');
    });
  })
});