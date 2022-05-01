import React from "react";
import "./Card.css";
// import react-router-dom
import {useNavigate} from "react-router-dom"

const Card = () => {
  const[values, setValues] = React.useState({
    firstname:"",
    lastname:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:""
  });
  const[errorMsg, setErrorMsg] = React.useState();

  const changeHadler = (event) => {
   const newValues = { ...values, [event.target.name]: event.target.value }
   setValues(newValues);
  }
  const submitHandler = (event) => {
    event.preventDefault();
  }
  const navigate = useNavigate();
  const businessPage = () => {
    navigate("/business")
  }

  const handleError = () => {
    if(values.firstname.length ===0) {
      setErrorMsg("FirstName must not be empty")
      return;
    } else if (values.lastname.length ===0) {
      setErrorMsg("LastName must not be empty")
      return;
    } else if (values.email.length ===0) {
      setErrorMsg("Email must not be empty")
      return;
    } else if (values.phoneNumber.length ===0) {
      setErrorMsg("Phone Number must not be empty")
      return;
    } else if (values.password.length ===0) {
      setErrorMsg("Password must not be empty")
    } else if (values.confirmPassword.length ===0) {
      setErrorMsg("Confirm Password must not be empty")
      return;
    } else {
      navigate("/business")
      window.location.reload();
    }
  }
  return (
    <>
    <form onSubmit={submitHandler}>
      <div className="cards">
        <div className="main_heading">
          <h2 className="account">Create New Account</h2>
        </div>
        <div className="card">
          <div className="header">
            <p><span className="numbers">1</span> Your Profile</p>
            <p onClick={() => businessPage()}><span className="numbers">2</span> Business Information</p>
            <p><span className="numbers">3</span> Additional Users</p>
          </div>
          <div className="container">
            <div className="container_content">
              <h1 className="step">Step 1</h1>
              <h2 className="profile">Your Profile</h2>
              <p className="info">
                Enter the login information for your account. You will <br />
                be able to create additionl users after registering.
              </p>
            </div>
          </div>
          {/* new div start here */}
          <div>
            <div className="label_headings">
              <label className="firstname">
                First Name<sup>*</sup>
              </label>
              <label className="lastname">
                Last Name<sup>*</sup>
              </label>
            </div>
            <div className="input_field">
              
              <input 
              type="text" 
              placeholder="Input Your First Name" 
              name="firstname"
              value={values.firstname}
              onChange={changeHadler}
              required />
              
              <input 
              type="text" 
              placeholder="Input Your Last Name"
              name="lastname"
              value={values.lastname}
              onChange={changeHadler} 
              required />
            </div>
          </div>
          {/* new div start here */}
          <div>
            <div className="label_heading">
              <label className="email">
                Email<sup>*</sup>
              </label>
              <label className="phone_number">
                Phone Number<sup>*</sup>
              </label>
            </div>
            <div className="input_field">
              <input 
              type="email" 
              placeholder="Input Your Email" 
              name="email"
              value={values.email}
              onChange={changeHadler}
              required/>

              <input 
              type="number"
              name="phoneNumber"
              value={values.phoneNumber} 
              placeholder="Input Your Phone Number" 
              onChange={changeHadler}
              required/>
            </div>
          </div>
          {/* new div start here */}
          <div>
            <div className="label_heading">
              <label className="password">
                Password<sup>*</sup>
              </label>
              <label className="cpassword">
                Confirm Password<sup>*</sup>
              </label>
            </div>
            <div className="input_field">
              
              <input 
              type="password" 
              placeholder="Create Password"
              name="password"
              value={values.password}
              onChange={changeHadler} 
              required/>
              
              <input 
              type="password" 
              placeholder="Confirm Your Password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={changeHadler} 
              required/>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="login">
            <i className="fa fa-angle-left" style={{ margin: "10px" }}></i>Back
            to Login
          </button>
         {errorMsg && (
           <p style={{ color:'red' }}>{errorMsg}</p>
         )}
          <button type="submit" className="next_step" onClick={() => handleError()}>
            Next Step <i className="fa fa-angle-right"></i>
          </button>

        </div>
      </div>
</form>      
    </>
  );
};

export default Card;
