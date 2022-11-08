import {mockRobots} from "../../../mocks/mockRobots";
import { RobotsState } from "../../../types/types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given the robots reducer", () => {
  describe("When it receives an action to load robots", () => {
    describe("And an array of robots", () => {
      test("Then it should return the array of robots received", () => {
        const currentRobotsState: RobotsState = { list: [] };

        const action = loadRobotsActionCreator(mockRobots);

        const expectedState: RobotsState = { list: mockRobots };

        const newRobotsState = robotsReducer(currentRobotsState, action);

        expect(newRobotsState).toStrictEqual(expectedState);
      });
    });
  });
});
