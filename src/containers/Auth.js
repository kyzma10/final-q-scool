import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from '../components/RenderField';
import $ from "jquery";


class Auth extends Component {

  render() {
    const { handleSubmit } = this.props;
    const submit = values => {
      if (localStorage.userName === values.login && localStorage.userPassword === values.password){
        $('div.logined').hide();
		      $('header').append("<div class='user'><h3 id='user-logined'>HI USER: " + localStorage.userName +
			"</h3><button id='logout'>Logout</button></div>");
		$('#sidebar-right').show();
		$('div.show-hide').show();
      }
    }
    // console.log(this.props);
    // console.log(auth_login);
    return(
      <form id="auth-box"
        onSubmit={handleSubmit(submit)}
        >
        <Field name="login" id="auth_login" component={RenderField} type="text" placeholder="login" />
        <Field name="password" id="auth_password" component={RenderField} type="password" placeholder="your password"/>
        <button type="submit" id="auth">Auth</button>
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

  return errors
}

export default reduxForm({
  form: 'authForm',
  validate
})(Auth)
