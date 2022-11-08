import { screen } from "@testing-library/react";
import { mockRobots } from "../../mocks/mockRobots";
import renderWithProviders from "../../mocks/renderWithProviders";
import RobotCardList from "./RobotCardList";

describe("Given a RobotCardList component", () => {
  describe("When its rendered", () => {
    test("Then it should show 1 heading of level 1 that says 'ROBOTS'", () => {
      renderWithProviders(<RobotCardList />, {
        preloadedState: {
          robots: {
            list: mockRobots,
          },
        },
      });

      const headingTitle = screen.queryByRole("heading", { level: 1 });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
