import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./Routes/AppRoutes";
import store from "./Redux/store.js";
import UIProvider from "./Context/UIContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </Provider>
);
