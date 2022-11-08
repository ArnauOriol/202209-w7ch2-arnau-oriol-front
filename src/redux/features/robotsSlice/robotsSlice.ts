import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot, RobotsState } from "../../../types/types";

const robotsInitialState: RobotsState = {
  list: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (
      currentRobotsState: RobotsState,
      action: PayloadAction<Robot[]>
    ) => ({ ...currentRobotsState, list: [...action.payload] }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
