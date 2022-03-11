import "./newProduct.css";
import {useState} from "react";
import { SettingsBackupRestoreRounded } from "@material-ui/icons";
import axios from 'axios';

export default function NewProduct() {

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("/products/iphone12promax.png");
    const [price, setPrice] = useState("");

    function clearInput(){
        setImage("");
        setTitle("");
        setStatus("active");
        setQuantity("");
        setDescription("/products/iphone12promax.png");
        setPrice("");
    }

                    async function itemPost()
                {
                    const itemDetails = {
                        "image":image,
                        "title":title,
                        "status":status,
                        "quantity":quantity,
                        "description":description,
                        "price":price,
                    }
                    
                    
                        const response = await axios.post(`http://localhost:8080/api/v1/item`,itemDetails)
                        .then((response)=>{
                            console.log(itemDetails);
                            // Swal.fire({
                            //     title: `<strong>${response.data.message}</strong>`,
                            //     icon: 'success',
                            //     showCloseButton: true,
                            //     showCancelButton: true,
                            // })
                        })
                        .catch((error)=>{
                            console.log(error);
                        })

                                // Swal.fire({
                                // title: `<strong>${error.message}</strong>`,
                                // icon: 'error',
                                // showCloseButton: true,
                                // showCancelButton: true,
                                // })});
                        // console.log(response);
            
                    clearInput();
                }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" name="image"  />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Title" name="title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>price</label>
          <input type="text" placeholder="price" name="price"  value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>
  
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" name="quantity"  value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Status</label>
          <select name="status" id="active"  value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="addProductButton" onClick={itemPost}>Create</button>
      </form>
    </div>
  );
}
