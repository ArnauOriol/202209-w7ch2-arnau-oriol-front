import { act, renderHook, waitFor } from "@testing-library/react";
import mockWrapper from "../mocks/mockWrapper";
import { store } from "../redux/store";
import useApi from "./useApi";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given a useApi custom hook", () => {
  describe("When its method getRobots is called", () => {
    test("Then the dispatch should be called with loadRobots", async () => {
      const { result } = renderHook(() => useApi(), { wrapper: mockWrapper });

      act(() => {
        result.current.getRobots();
      });

      await waitFor(() => {
        expect(dispatch).toHaveBeenCalled();
      });
    });
  });
});
