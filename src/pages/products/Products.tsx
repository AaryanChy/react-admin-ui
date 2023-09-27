import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { products } from "../../data";
import AddForm from "../../components/addForm/AddForm";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "avatar",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },

  {
    field: "title",
    headerName: "Product Name",
    type: "string",
    width: 150,
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 160,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className='users'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={() => setOpenForm(true)}>Add New products</button>
      </div>
      <DataTable slug='products' columns={columns} rows={products} />
      {openForm && (
        <AddForm slug='products' columns={columns} setOpenForm={setOpenForm} />
      )}
    </div>
  );
};

export default Products;
