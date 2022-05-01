import React from "react";
import "./BusinessInfo.css";
// import react-router-dom
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BusinessInfo = () => {
  const navigate = useNavigate();
  const [businessInfo, setBusinessInfo] = React.useState({
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxIdNumber: "",
  });
  const [errorMsg, setErrorMsg] = React.useState();
  
  const changeHadler = (event) => {
    const newValues = {
      ...businessInfo,
      [event.target.name]: event.target.value,
    };
    setBusinessInfo(newValues);
  };
  const profilePage = () => {
    navigate("/");
  };
  const backLogin = () => {
    navigate("/");
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const handleError = () => {
    if (businessInfo.brandName.length === 0) {
      setErrorMsg("Brand Name must not be empty");
      return;
    } else if (businessInfo.brandType.length === 0) {
      setErrorMsg("Brand Type must not be empty");
      return;
    } else if (businessInfo.streetAddress.length === 0) {
      setErrorMsg("Street Address must not be empty");
      return;
    } else if (businessInfo.city.length === 0) {
      setErrorMsg("City must not be empty");
      return;
    } else if (businessInfo.zipCode.length === 0) {
      setErrorMsg("Zip Code must not be empty");
      return;
    } else if (businessInfo.taxIdNumber.length === 0) {
      setErrorMsg("Tax Id Number must not be empty");
      return;
    } else {
      navigate("/");
      window.location.reload();
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="Cards">
          <div className="Main_Heading">
            <h2 className="Account">Create New Account</h2>
          </div>
          <div className="Card">
            <div className="Header">
              <p onClick={() => profilePage()}>
                <span className="numbers">1</span> Your Profile
              </p>
              <p>
                <span className="numbers">2</span> Business Information
              </p>
              <p>
                <span className="numbers">3</span> Additional Users
              </p>
            </div>
            <div className="Container">
              <div className="Container_Content">
                <h1 className="Step">Step 2</h1>
                <h2 className="Profile">Business Information</h2>
                <p className="Info">
                  Please, enter information about your company
                </p>
              </div>
            </div>
            {/* new div start here */}
            <div>
              <div className="Label_Heading">
                <label className="Firstname">
                  Brand Name<sup>*</sup>
                </label>
                <label className="Lastname">
                  Brand Type<sup>*</sup> 
                  <Popup trigger={<i style={{ cursor:"pointer" }} 
                             className="fa fa-question-circle"></i> }  position="right center">
                         <div>Local: Brands with distrubtion in 3 divisions or less
                             OR multiple divisions but a total of 150 stores or less.
                             <br/>
                             National: Brands with distrubtion in 4 or more <br/>
                             divisions or in more than 150 stores.
                         </div>
                 </Popup> 
                </label>
              </div>
              <div className="Input_Field">
                <input
                  type="text"
                  placeholder="Input Your Brand Name"
                  name="brandName"
                  value={businessInfo.brandName}
                  onChange={changeHadler}
                  required
                />

                <input
                  type="text"
                  placeholder="Select Type of Your Brand"
                  name="brandType"
                  value={businessInfo.brandType}
                  onChange={changeHadler}
                  required
                />
              </div>
            </div>
            {/* new div start here */}
            <div>
              <div className="label_heading">
                <label className="Email">
                  Street Address<sup>*</sup>
                </label>
                <label className="Phone_Number">
                  City<sup>*</sup>
                </label>
              </div>
              <div className="Input_Field">
                <input
                  type="text"
                  placeholder="Input Your Street Address"
                  name="streetAddress"
                  value={businessInfo.streetAddress}
                  onChange={changeHadler}
                  required
                />

                <input
                  type="text"
                  placeholder="Input Your City"
                  name="city"
                  value={businessInfo.city}
                  onChange={changeHadler}
                  required
                />
              </div>
            </div>
            {/* new div start here */}
            <div>
              <div className="Label_Heading">
                <label className="Password">
                  Zip Code<sup>*</sup>
                </label>
                <label className="Cpassword">
                  Tax ID Number<sup>*</sup>
                </label>
              </div>
              <div className="Input_Field">
                <input
                  type="number"
                  placeholder="Input Zip Code"
                  name="zipCode"
                  value={businessInfo.zipCode}
                  onChange={changeHadler}
                  required
                />

                <input
                  type="number"
                  placeholder="Input Tax ID Number"
                  name="taxIdNumber"
                  value={businessInfo.taxIdNumber}
                  onChange={changeHadler}
                  required
                />
              </div>
            </div>
            {/* new div start here */}
            <div>
              <h4 className="Document">Documents</h4>
              <p className="signed_document">
                Once the following documents are signed, you'll be ready to get
                started
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <p className="information">
                  Electronically sign the agreement(s)
                  <i
                    className="fa fa-check"
                    style={{ color: "green", float: "right" }}
                  ></i>
                </p>
                <p>
                  <i
                    style={{ color: "blue", fontSize: "25px" }}
                    className="fa fa-toggle-right"
                  ></i>
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <p className="supplier">
                  Non adult beverage Kroger market supplier wavier and release
                  <i
                    className="fa fa-close"
                    style={{ color: "red", float: "right" }}
                  ></i>
                </p>
                <p>
                  <i
                    style={{
                      color: "blue",
                      fontSize: "25px",
                      marginTop: "10px",
                    }}
                    className="fa fa-toggle-right"
                  ></i>
                </p>
              </div>
            </div>
            <div>
              <h4 className="pdf_upload">COI PDF UPLOAD</h4>
              <p className="signed_document">
                once the following documents are signed, you'll be ready to get
                started
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <p className="informations">
                  Electronically sign the agreement(s)
                  <i
                    className="fa fa-check"
                    style={{ color: "green", float: "right" }}
                  ></i>
                </p>
                <p>
                  <i
                    style={{ color: "blue", fontSize: "25px" }}
                    className="fa fa-toggle-right"
                  ></i>
                </p>
              </div>
            </div>
          </div>
          <div className="Buttons">
            <button className="Login" onClick={() => backLogin()}>
              <i className="fa fa-angle-left" style={{ margin: "10px" }}></i>
              Back to Login
            </button>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <button className="Previous_Step" onClick={() => backLogin()}>
                <i style={{ margin: "3px" }} class="fa fa-angle-left"></i>{" "}
                Previous Step
              </button>
              <button className="Next_Step" onClick={handleError}>
                Next Step <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default BusinessInfo;
