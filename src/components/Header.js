import React, { Component } from 'react';
import { connect } from 'react-redux';

import $ from "jquery";

import Auth from '../containers/Auth';
import Register from '../containers/Register';

class Header extends Component {

  logout = () => {
    localStorage.setItem('userName', '');
    localStorage.setItem('userPassword', '')
    $('#sidebar-right').hide();
		$('div.show-hide').hide();
		$('div.user').remove();
		$('div.logined').show();
    $('#signup').show();
    $('#logout').hide();
  }

  registerShow = () => {
    $('#signup').hide();
		$('#register-box').show();
		$('#auth-box').hide();
  }

  render() {
    if(localStorage.userName !== '' && localStorage.userPassword !== ''){
        $('div.logined').hide();
        $('header').append("<div class='user'><h3 id='user-logined'>HI USER: " + localStorage.userName +
        "</h3></div>");
      $('#sidebar-right').show();
		  $('div.show-hide').show();
      $('#logout').show();
      }
    return(
      <header className="header">
      <div className="logo">
        LOGO
      </div>
      <ul className="top-menu">
        <li><a>Item1</a></li>
        <li><a>Item2</a></li>
        <li><a>Item3</a></li>
        <li><a>Item4</a></li>
        <li><a>Item5</a></li>
      </ul>
      <div className="logined">
          <Auth />
          <button id="signup" onClick={this.registerShow} >Sign Up</button>
          <Register />
      </div>
      <button onClick={this.logout} id='logout' className="logout">Logout</button>
    </header>
    );
  }
}

const mapStateToProps = state =>({
  auth: state.form.authForm,
  register: state.form.registerForm
});

export default connect(mapStateToProps)(Header)
