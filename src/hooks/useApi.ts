import { useCallback } from "react";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice/robotsSlice";
import { useAppDispatch } from "../redux/hooks";
import { Robot } from "../types/types";

const { REACT_APP_API_URL: apiUrl } = process.env;

const useApi = (): { getRobots: () => void } => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    const response = await fetch(`${apiUrl}robots`);
    const robotsData = (await response.json()) as Robot[];
    dispatch(loadRobotsActionCreator(robotsData));
  }, [dispatch]);

  return { getRobots };
};

export default useApi;
