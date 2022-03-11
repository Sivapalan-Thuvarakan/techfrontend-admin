import "./supplierList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function SupplierList() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/suppliers');
      console.log(response);
      setData(response.data);
      
    } catch (error) {
      console.error(error);
    }
}, [data])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
            axios.delete(`http://localhost:8080/api/v1/delete/supplier/${id}`);
           setData([]);
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "supplier",
      headerName: "Supplier",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="supplierListUser">
            <img className="supplierListImg" src={"assets/images"+params.row.image} alt="" />
            {params.row.user_name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/supplier/" + params.row.id}>
              <button className="supplierListEdit">View</button>
            </Link>
            <DeleteOutline
              className="supplierListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="supplierList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}