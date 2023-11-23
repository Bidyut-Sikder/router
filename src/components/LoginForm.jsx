import {Toast} from "bootstrap";
import React, {useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import {UserLoginRequest} from "../apiRequest/ApiRequest";
import {useNavigate} from "react-router-dom";
import FullScreenLoader from "./FullScreenLoader";

const LoginForm = () => {
  const navegate = useNavigate();
  const [loader, setLoader] = useState("");

  const [FormValue, setFormValue] = useState({
    UserEmail: "",
  });

  const inputOnChange = (key, value) => {
    setFormValue((FormValue) => ({
      ...FormValue,
      [key]: value,
    }));
  };

  const submitForm = async () => {
    console.log(FormValue.UserEmail.length);
    if (FormValue.UserEmail.length === 0) {
      toast.error("Email address required!");
    } else {
        setLoader('show')
      let msg = await UserLoginRequest(FormValue);
      setLoader('')
      if (msg === "success") {
        toast.success("request successfll.");
        navegate("/router/otp");
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
            <h1>Login</h1>
            <label htmlFor=""> User Email</label>
            <input
              type="text"
              onChange={(e) => inputOnChange("UserEmail", e.target.value)}
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

export default LoginForm;
