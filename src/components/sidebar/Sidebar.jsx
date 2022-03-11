import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  //MailOutline,
  //DynamicFeed,
  //ChatBubbleOutline,
  WorkOutline,
  //Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Customers
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/orders" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Sales Orders
            </li>
            </Link>
            <Link to="/supplyorders" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Supply Orders
            </li>
            </Link>
            
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/suppliers" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Supplier
            </li>
            </Link>
            <Link to="/salesagents" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Sales Agent
            </li>
            </Link>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}
