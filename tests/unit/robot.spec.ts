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
      expect(robot.getStatus()).to.eql('1, 1, NORTH');
    });

    it("Should ignore when passing incorrect arguments", function () {
      const testArg = '0,1,NORTH';
      robot.place(testArg);
      expect(robot.place(testArg)).to.be.false;
      expect(robot.getStatus()).to.eql('undefined, undefined, undefined');
    });
  })


  // test left and right function
  describe("turn left and right while facing to EAST", function () {
    var initStatus = '1,1,EAST';

    beforeEach(function () {
      robot.place(initStatus);
    });

    it("Should face to SOUTH if turn left", function () {
      robot.left();
      expect(robot.getStatus()).to.eql('1, 1, SOUTH');
    });

    it("Should fact to NORTH if turn right", function () {
      robot.right();
      expect(robot.getStatus()).to.eql('1, 1, NORTH');
    });

    it("Should ignore when robot is not placed", function () {
      var newRobot = new Robot();
      newRobot.left();
      expect(newRobot.getStatus()).to.eql('undefined, undefined, undefined');
    });
  })
});