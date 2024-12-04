import React from "react";
import { useState } from "react";
import Products from "./Datas";
import { DataGrid } from "@mui/x-data-grid";

import "./Product.css";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

export default function Users() {
  const [UserDatas, SetUserDatas] = useState(Products);

  const deleteHandler = (UID) => {
    SetUserDatas(UserDatas.filter((user) => user.id !== UID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },

    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <Link to={`/product/${params.row.id}`} className="Link">
            <div className="userListUser">
              <img src={params.row.avatar} alt="" className="UserListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
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
      field: "Price",
      headerName: "Price",
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
        checkboxSelection
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
