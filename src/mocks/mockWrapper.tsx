import { Provider } from "react-redux";
import { store } from "../redux/store";

const mockWrapper = ({ children }: { children: JSX.Element }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default mockWrapper;
