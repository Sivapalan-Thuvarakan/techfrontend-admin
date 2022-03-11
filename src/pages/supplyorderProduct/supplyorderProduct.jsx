import { Link } from "react-router-dom";
import "./supplyorderProduct.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function SupplyOrderProduct() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Supplier Order Product</h1>
        <Link to="/newSupplierProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Quantity:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">status:</span>
                      <span className="productInfoValue">ordered</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Supplier</span>
                      <span className="productInfoValue">Kumar</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>Status</label>
                  <select name="inStock" id="idStock">
                      <option value="ordered">Ordered</option>
                      <option value="received">Received</option>
                      <option value="pending">Pending</option>
                  </select>
                  <label>Supplier</label>
                  <select name="active" id="active">
                      <option value="kumar">Kumar</option>
                      <option value="ravi">Ravi</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}