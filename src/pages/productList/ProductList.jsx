import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/items');
      console.log(response);
      setData(response.data);
      
    } catch (error) {
      console.error(error);
    }
}, [data])

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
            axios.delete(`http://localhost:8080/api/v1/delete/items/${id}`);
           setData([]);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={"assets/images"+params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
