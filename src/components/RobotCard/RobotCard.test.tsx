import { render, screen } from "@testing-library/react";
import { robotMock } from "../../mocks/mockRobots";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When its rendered whit the robot 'machacatuercas'", () => {
    test("Then it should show a heading of level 2 with 'machacatuercas'", () => {
      render(<RobotCard robot={robotMock} />);

      const heading = screen.queryByRole("heading", {
        level: 2,
        name: robotMock.name,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show an image with the alt: 'the robot machacatuercas'", () => {
      render(<RobotCard robot={robotMock} />);

      const robotImage = screen.queryByAltText(`the robot ${robotMock.name}`);

      expect(robotImage).toBeInTheDocument();
    });
  });
});
