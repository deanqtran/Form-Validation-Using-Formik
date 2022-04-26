import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      {!formik.errors.email && !formik.errors.password ? alert('Login Successful'):null}
    },
    validate: values => {
      let errors = {};

      if(!values.email) errors.email = 'Field required';
      if(values.email && (!values.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) 
        errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      
      return errors;
    }

  });

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id ="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        <div id="emailError">
          {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
        </div>
        <div>Password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        <div id="pswError">
          {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
          </div>
        <div><button id="submitBtn" type="submit">Submit</button></div>
        
      </form>
    </div>
  );
}

export default App;
