import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/sidebar";
import { Navigator } from "../components/navigator";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Navigator />
      <Sidebar />
      <Outlet />
    </React.Fragment>
  ),
});
