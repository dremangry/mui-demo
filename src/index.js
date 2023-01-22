import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import MainPAge from "./pages/MainPAge";
import SecondPage from "./pages/SecondPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "main",
//         element: <MainPAge />,
//       },
//       {
//         path: "Second",
//         element: <SecondPage />,
//       },
//     ],
//   },
// ]);

const AppLayout = () => (
  <>
    <App />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPAge />,
      },
      {
        path: "Second",
        element: <SecondPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);