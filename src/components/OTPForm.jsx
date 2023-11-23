import React, { useState } from 'react';
import  { toast,Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GetEmail } from '../utility/TokenHelper';
import FullScreenLoader from './FullScreenLoader';
import { OTPVeryfyRequest } from '../apiRequest/ApiRequest';

const OTPForm = () => {
    const navegate = useNavigate();
    const [loader, setLoader] = useState("");
  
    const [FormValue, setFormValue] = useState({
      UserEmail:GetEmail(),OTP:""
    });
  
    const inputOnChange = (key, value) => {
      setFormValue((FormValue) => ({
        ...FormValue,
        [key]: value,
      }));
    };
  
    const submitForm = async () => {
      console.log(FormValue);
      if (FormValue.OTP.length === 0) {
        toast.error("OTP number required!");
      } else {
          setLoader('show')
        let msg = await OTPVeryfyRequest(FormValue);
        setLoader('')
       console.log(msg)
        if (msg === "success") {
          toast.success("request successfll.");
          navegate("/");
        } else {
          toast.error("request fail.");
        }
      }
    };
  
    return (
  <>
  <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-5 ">
              <h1>Verify</h1>
               <label htmlFor=""> User Email</label>
              <input
                type="text"  value={GetEmail()}
                onChange={(e) => inputOnChange("UserEmail", e.target.value)}
                className="form-control"
              /> 
               <label htmlFor=""> OTP</label>
              <input
                type="text"
                onChange={(e) => inputOnChange("OTP", e.target.value)}
                className="form-control"
              />
              <button
                onClick={submitForm}
                className="btn my-2 w-100 btn-primary "
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
      {/* <FullScreenLoader visibility={loader} /> */}
      {loader&& <FullScreenLoader />}
  </>
    );
};

export default OTPForm;