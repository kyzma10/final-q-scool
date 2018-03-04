import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import $ from "jquery";

import RenderField from '../components/RenderField';


class Register extends Component {

  render() {
    const { handleSubmit } = this.props;
    // console.log(localStorage);
    const submit = values => {
      localStorage.setItem('userName', values.login);
      localStorage.setItem('userPassword', values.password);
      $('#register-box').hide();
      $('#auth-box').show();
    }
    // console.log(this.props);
    // console.log(auth_login);
    // const mySubmit = values => (
    //
    //   if(values.password === values.confirm) {
    //     localStorage.setItem('userName', values.password);
    //     localStorage.setItem('userPassword', values.confirm);
    //   }
    // );
    return(
      <form id="register-box"
        onSubmit={handleSubmit(submit)}
        >
          <Field name="login" id="register_login" type="text" component={RenderField} placeholder="login" />
          <Field name="password" id="register_password" type="password" component={RenderField} placeholder="your password" />
          <Field name="confirm" id="register_confirm" type="password" component={RenderField} placeholder="confirm password" />
          <button id="register" type="submit" >Register</button>
      </form>
    );
  }
}

const validate = values => {

  const errors = {}
  if (!values.login) {
    errors.login = 'No input login'
  } else if (values.login.length > 15) {
    errors.login = 'Must be 15 characters or less'
  }

  if(!values.password){
    errors.password = 'No input password'
  }
  else if(values.password.length < 3){
    errors.password = 'Must be length >3 characters'
  }

  if(!values.confirm){
    errors.confirm = 'No input confirm password'
  }
  else if(values.confirm.length < 3){
    errors.confirm = 'Must be length >3 characters'
  }

  if(values.confirm !== values.password){
    errors.confirm = 'The value does not match'
  }

  return errors
}

export default reduxForm({
  form: 'registerForm',
  validate
})(Register)
