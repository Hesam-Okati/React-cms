import React from "react";
import "./WidgetSM.css";
import { MdVisibility } from "react-icons/md";
import Members from "./datas";

export default function WidgetSM() {
  return (
    <div className="WidgetSM">
      <span className="WidgetSM-Title">New Join Members</span>
        {
            Members.map(menber => (
                <div key={menber.id}>
                
      <ul className="WidgetSMList">
        <li className="WidgetSMListItem">
          <img
            src={menber.src}
            alt="New members"
            className="WidgetSMIMG"
          />
          <div className="WidgetSMuser">
            <span className="WidgetSMuserName">{menber.userName}</span>
            <span className="WidgetSMuserTitle">{menber.title}</span>
          </div>
          <button className="WidgetSMButton">
            <MdVisibility className="WidgetSMIcon"/>
          </button>
        </li>
      </ul>
                </div>
            ))
        }
    </div>
  );
}
