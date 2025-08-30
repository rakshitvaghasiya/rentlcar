import React, {useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () =>  {
  const txtname = useRef();
  const txtemail = useRef();
  const txtpassword = useRef();
  const navigate = useNavigate();

const handleRegister = (e) =>{
    e.preventDefault(); 
var name = txtname.current.value;
 var email = txtemail.current.value;
 var password= txtpassword.current.value

axios.post("http://localhost:3010/user/signup", { name, email, password })
  .then(response => {
    if (response.data.status === "success") {
      alert("Insert SUCCESS");
      navigate("/"); // go to login after success
    } else {
      alert("Insert FAIL");
    }
  })
  .catch(error => {
    console.error("Registration error:", error);
    alert("Something went wrong!");
  });
}

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            ref={txtname}
          /><br />
          <input
            type="email"
            placeholder="Email"
            required
            ref={txtemail}
          /><br />
          <input
            type="password"
            placeholder="Password"
            required
            ref={txtpassword}
          /><br />
          <button type="submit" className="submit-btn">Signup</button>
        </form>

        <p className="signup-link">
          Already have an account?{" "}
          <span 
            style={{ color: "cyan", cursor: "pointer" }}
            onClick={() => navigate("/")}
          ><Link to="/">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
