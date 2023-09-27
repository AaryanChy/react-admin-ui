import "./users.scss";
import { userRows } from "../../data";
import DataTable from "../../components/dataTable/DataTable";

import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useState } from "react";
import AddForm from "../../components/addForm/AddForm";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 200,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={() => setOpenForm(true)}>Add New User</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />
      {openForm && (
        <AddForm slug='users' columns={columns} setOpenForm={setOpenForm} />
      )}
    </div>
  );
};

export default Users;
