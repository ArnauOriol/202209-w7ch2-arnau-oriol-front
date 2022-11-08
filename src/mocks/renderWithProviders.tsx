import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { robotsReducer } from "../redux/features/robotsSlice/robotsSlice";
import { RootState, store } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        robots: robotsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
