import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import "./add.scss";
type Props = {
  slug: string;
  columns: GridColDef[];
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddForm = (props: Props) => {
  return (
    <div className='add'>
      <div className='modal'>
        <span className='close' onClick={() => props.setOpenForm(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form action=''>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((eachColumn) => (
              <div className='item'>
                <label htmlFor=''>{eachColumn.headerName}</label>
                <input type={eachColumn.type} placeholder={eachColumn.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
