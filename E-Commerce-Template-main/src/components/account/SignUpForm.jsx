import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { Link,useNavigate } from "react-router-dom";
import renderFormGroupField from "../../helpers/renderFormGroupField";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/constant";


const SignUpForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  const [input,setInput]=useState("");
  const [tasks, setTasks]=useState("");
  const [updateUi, setUpdateUI]= useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
axios.get(`${baseURL}/get`)
.then((res)=>{console.log(res.data);
  setTasks(res.data)});

  },[updateUi])

  const addTask =()=>{
    axios.post(`${baseURL}/save`,{userName:input}).then((res)=> {
      console.log(res.data);
      setInput("")
    }).then(()=> navigate('/') )
  }

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      onSubmit={addTask}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row mb-3">
        <div className="col-md-6">
          <Field
            name="firstName"
            type="text"
            label="First Name"
            component={renderFormField}
            placeholder="First Name"
            validate={[required, name]}
            required={true}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
        </div>
        {/* <div className="col-md-6">
          <Field
            name="lastName"
            type="text"
            label="Last Name"
            component={renderFormField}
            placeholder="Last Name"
            validate={[required, name]}
            required={true}
          />
        </div> */}
      </div>
      {/* <Field
        name="mobileNo"
        type="number"
        label="Mobile no"
        component={renderFormGroupField}
        placeholder="Mobile no without country code"
        icon={IconPhone}
        validate={[required, maxLengthMobileNo, minLengthMobileNo, digit]}
        required={true}
        max="999999999999999"
        min="9999"
        className="mb-3"
      />
      <Field
        name="password"
        type="password"
        label="Your password"
        component={renderFormGroupField}
        placeholder="******"
        icon={IconShieldLock}
        validate={[required, maxLength20, minLength8]}
        required={true}
        maxLength="20"
        minLength="8"
        className="mb-3"
      /> */}
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          // disabled={submitting}
    
        >
          Create
        </button>
      </div>
      <Link className="float-start" to="/account/signin" title="Sign In">
        Sing In
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      <div className="row">
        <div className="col- text-center">
          <p className="text-muted small">Or you can join with</p>
        </div>
        <div className="col- text-center">
          <Link to="/" className="btn btn-light text-white bg-twitter me-3">
            <i className="bi bi-twitter-x" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-facebook">
            <i className="bi bi-facebook mx-1" />
          </Link>
          <Link to="/" className="btn btn-light text-white me-3 bg-google">
            <i className="bi bi-google mx-1" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default compose(
  reduxForm({
    form: "signup",
  })
)(SignUpForm);
