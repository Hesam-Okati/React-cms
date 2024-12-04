import React from "react";
import "./sidebar.css";
import { MdDynamicFeed, MdLineStyle } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { BiDollar, BiTrendingUp, BiUser } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { TbMassage } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashbord</h3>
          <ul className="sidebarList ">
            <Link className="Link" to={"/"}>
              <li className="sidebarListItem active">
                <MdLineStyle className="sidebarIcon" />
                Home  
              </li>{" "}
            </Link>
            <li className="sidebarListItem">
              <RiTimeLine className="sidebarIcon" />
              Analytics
            </li>{" "}
            <li className="sidebarListItem">
              <BiTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="titleSidebar">Quick Menu</h3>
          <ul className="sidebarList ">
            <Link className="Link" to={"/users"}>
              <li className="sidebarListItem">
                <BiUser className="sidebarIcon" />
                Users
              </li>{" "}
            </Link>
            <Link className="Link" to={"/new_user"}>
              <li className="sidebarListItem">
                <BiUser className="sidebarIcon" />
                New Users
              </li>{" "}
            </Link>
            <Link className="Link" to={"/products"}>
              <li className="sidebarListItem">
                <BsShop className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <BiDollar className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <IoMailOpenOutline className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="titleSidebar">Notifications</h3>
          <ul className="sidebarList ">
            <li className="sidebarListItem">
              <CgMail className="sidebarIcon" />
              Mail
            </li>{" "}
            <li className="sidebarListItem">
              <MdDynamicFeed className="sidebarIcon" />
              Feedback
            </li>{" "}
            <li className="sidebarListItem">
              <TbMassage className="sidebarIcon" />
              Massage
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
