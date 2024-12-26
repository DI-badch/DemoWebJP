import React from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "@fontsource/inter";
import "./index.css";
import { RootRoadmap } from "./routes/root";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: RootRoadmap,
  basepath: "/DI-roadmap",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
