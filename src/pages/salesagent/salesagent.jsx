import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./salesagent.css";
  
  export default function Salesagent() {
    return (
      <div className="supplier">
        <div className="supplierTitleContainer">
          <h1 className="userTitle">Edit Sales Agent</h1>
          <Link to="/newSalesagent">
            <button className="supplierAddButton">Create</button>
          </Link>
        </div>
        <div className="supplierContainer">
          <div className="supplierShow">
            <div className="supplierShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="supplierShowImg"
              />
              <div className="supplierShowTopTitle">
                <span className="supplierShowUsername">Anna Becker</span>
                <span className="supplierShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="supplierShowBottom">
              <span className="supplierShowTitle">Account Details</span>
              <div className="supplierShowInfo">
                <PermIdentity className="supplierShowIcon" />
                <span className="supplierShowInfoTitle">annabeck99</span>
              </div>
              <div className="supplierShowInfo">
                <CalendarToday className="supplierShowIcon" />
                <span className="supplierShowInfoTitle">10.12.1999</span>
              </div>
              <span className="supplierShowTitle">Contact Details</span>
              <div className="supplierShowInfo">
                <PhoneAndroid className="supplierShowIcon" />
                <span className="supplierShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="supplierShowInfo">
                <MailOutline className="supplierShowIcon" />
                <span className="supplierShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="supplierShowInfo">
                <LocationSearching className="supplierShowIcon" />
                <span className="supplierShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="supplierUpdate">
            <span className="supplierUpdateTitle">Edit</span>
            <form className="supplierUpdateForm">
              <div className="supplierUpdateLeft">
                <div className="supplierUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="supplierUpdateInput"
                  />
                </div>
                <div className="supplierUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="supplierUpdateInput"
                  />
                </div>
                <div className="supplierUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="supplierUpdateInput"
                  />
                </div>
                <div className="supplierUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="supplierUpdateInput"
                  />
                </div>
                <div className="supplierUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="supplierUpdateInput"
                  />
                </div>
              </div>
              <div className="supplierUpdateRight">
                <div className="supplierUpdateUpload">
                  <img
                    className="supplierUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="supplierUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="supplierUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }