import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./appStore";
import { Provider } from "react-redux";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let run = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </React.StrictMode>
  );
};
