import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Delete'", () => {
    test("Then it should show 'Delete' on it", () => {
      const expectedText = "Delete";

      render(<Button text="Delete" action={() => {}} />);

      const button = screen.queryByRole("button");

      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an action", () => {
    test("Then it should call the action on click", async () => {
      const action = jest.fn();

      render(<Button text="Delete" action={action} />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
