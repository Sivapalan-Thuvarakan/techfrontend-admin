import "./newSupplier.css";
import axios from 'axios';
import {useState} from "react";

export default function NewSupplier() {


  const [user_name, setUsername] = useState("/products/iphone12promax.png");
  const [full_name, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  function clearInput(){
      setUsername("");
      setFullname("");
      setEmail("");
      setPhone("");
      setAddress("");
      setStatus("");
      setGender("");
      setPassword("");
      setImage("");
  }

                  async function supplierPost()
              {
                  const supplierDetails = {
                      "user_name":user_name,
                      "full_name":full_name,
                      "email":email,
                      "phone":phone,
                      "address":address,
                      "status":status,
                      "gender":gender,
                      "password":password,
                      "image":image,
                  }
                  
                  
                      const response = await axios.post(`http://localhost:8080/api/v1/supplier`,supplierDetails)
                      .then((response)=>{
                          console.log(supplierDetails);
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
    <div className="newUser">
      <h1 className="newUserTitle">New Supplier</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" value={full_name} onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" value={gender} onChange={(e) => setGender(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"  onChange={(e) => setStatus(e.target.value)}/>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" onChange={(e) => setStatus(e.target.value)}/>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" onChange={(e) => setStatus(e.target.value)}/>
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" value={phone} onChange={(e) => setPhone(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={supplierPost}>Create</button>
      </form>
    </div>
  );
}