import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource/DatatableSourse";
import { Link } from "react-router-dom";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <div style={{ height: 530, width: "100%" }}>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
