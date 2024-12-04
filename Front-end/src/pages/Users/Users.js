import React from "react";
import { useState } from "react";
import UserRows from "./datas";
import { DataGrid } from "@mui/x-data-grid";

import "./UserList.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

export default function Users() {
  const [UserDatas, SetUserDatas] = useState(UserRows);

  const deleteHandler = (UID) => {
    SetUserDatas(UserDatas.filter((user) => user.id != UID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <Link to="/" className="Link">
            <div className="userListUser">
              <img src={params.row.avatar} className="UserListImg" />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
      renderCell : (params) => {
        return (
          <p className={params.row.status}>{params.row.status}</p>
        )
      }
    },
    {
      field: "Transactions",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="Action">
            <Link to={"/"} className="Link">
              <button className="userListEdit">Edit</button>
            </Link>
            <MdDeleteOutline
              className="userListDelete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="UserList">
      <DataGrid
        rows={UserDatas}
        columns={columns}
        pagination
        initialState={{
          ...UserDatas.initialState,
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  );
}
