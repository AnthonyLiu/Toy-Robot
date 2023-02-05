import 'mocha';
import { expect } from 'chai';
import { Robot } from '../../src/robot';

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

    it("Should face to NORTH if turn right", function () {
      robot.right();
      expect(robot.getStatus()).to.eql('1, 1, NORTH');
    });

    it("Should ignore when robot is not placed", function () {
      var newRobot = new Robot();
      expect(newRobot.left()).to.be.false;
      expect(newRobot.getStatus()).to.eql('undefined, undefined, undefined');
    });
  })

  // test move
  describe("move action", function () {
    var initStatus = '1,1,NORTH';

    beforeEach(function () {
      robot.place(initStatus);
    });

    it("Should act when robot is movable toward the direction", function () {
      expect(robot.move()).to.be.true; // moved
      expect(robot.getStatus()).to.eql('1, 2, NORTH');
      robot.right()

      expect(robot.move()).to.be.true;
      expect(robot.getStatus()).to.eql('2, 2, WEST');
      robot.right()

      expect(robot.move()).to.be.true;
      expect(robot.getStatus()).to.eql('2, 1, SOUTH');
      robot.right()

      expect(robot.move()).to.be.true;
      expect(robot.getStatus()).to.eql('1, 1, EAST');
    });

    it("Should ignore when robot is not movable toward the direction", function () {
      robot.left();
      expect(robot.move()).to.be.false; // not move, because it would be out of table top if moving
      expect(robot.getStatus()).to.eql('1, 1, EAST');
    });

    it("Should ignore when robot is not placed", function () {
      var newRobot = new Robot();
      expect(newRobot.move()).to.be.false;
      expect(newRobot.getStatus()).to.eql('undefined, undefined, undefined');
    });
  })
});