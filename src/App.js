import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewSupplier from "./pages/newSupplier/newSupplier";
import NewSalesagent from "./pages/newSalesagent/newSalesagent";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import OrderList from "./pages/orderList/orderlist";
import SupplierList from "./pages/supplierList/supplierList";
import Supplier from "./pages/supplier/supplier";
import SalesagentList from "./pages/salesagentList/salesagentList";
import Salesagent from "./pages/salesagent/salesagent";
import SupplyOrderList from "./pages/supplyOrderList/supplyOrderList";
import SupplyOrderProduct from "./pages/supplyorderProduct/supplyorderProduct";
import NewSupplierProduct from "./pages/newSupplierProduct/newSupplierProduct";
import Cart from "./pages/orderDetails/orderDetails";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
           
          <Route path="/users" element={<UserList />} />
          
          <Route path="/user/:userId" element={<User/>}/>
            
          <Route path="/newUser" element={<NewUser/>}/>
            
          <Route path="/products" element={<ProductList/>}/>
           
          <Route path="/product/:productId" element={<Product/>}/>
            
          <Route path="/newproduct" element={<NewProduct/>}/>

          <Route path="/orders" element={<OrderList/>} />

          <Route path="/suppliers" element={<SupplierList/>}/>

          <Route path="/supplier/:supplierId" element={<Supplier/>}/>

          <Route path="/newSupplier" element={<NewSupplier/>}/>

          <Route path="/salesagents" element={<SalesagentList/>}/>

          <Route path="/salesagent/:salesagentId" element={<Salesagent/>}/>

          <Route path="/newSalesagent" element={<NewSalesagent/>}/>

          <Route path="/supplyorders" element={<SupplyOrderList/>}/>

          <Route path="/supplyorderProduct/:supplyorderId" element={<SupplyOrderProduct/>}/>

          <Route path="/newSupplierProduct" element={<NewSupplierProduct/>}/>

          <Route path="/orderdetails/:orderId" element={<Cart/>}/>
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
