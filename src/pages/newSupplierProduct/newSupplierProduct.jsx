import "./newSupplierProduct.css";

export default function NewSupplierProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Supplier Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Supplier</label>
          <select name="active" id="active">
            <option value="kumar">Kumar</option>
            <option value="ravi">Ravi</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}