import React from "react";
import "./TopBar.css";
import { GrLanguage } from "react-icons/gr";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="TopBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CMS ❤</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoNotificationsSharp className="topIcons"/>
            <span className="topIconBadge">2</span>
          </div>{" "}
          <div className="topbarIconContainer">
            <GrLanguage className="topIcons"/>
          </div>{" "}
          <div className="topbarIconContainer">
            <IoSettingsSharp className="topIcons"/>
            <span className="topIconBadge">2</span>
          </div>
          <img src="./assets/image/face3.jfif" className="topAwatar" />
        </div>
      </div>
    </div>
  );
}
