import React from "react";
import { useRoutes } from "react-router";
import route from "./routes";
import TopBar from "./Components/TopBarr/TopBar";
import SideBar from "./Components/sidebar/SideBar";
import "./App.css";

export default function App() {
  let Route = useRoutes(route);
  return (
    <React.Fragment>
      <TopBar />
      <div className="container">
        <SideBar />
        {Route}
      </div>
    </React.Fragment>
  );
}
