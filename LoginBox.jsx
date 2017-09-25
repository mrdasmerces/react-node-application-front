import React from 'react';
import LoginInput from './LoginInput.jsx'
import SubmitButton from './SubmitButton.jsx'

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      usuarioLogin: {
        username: "",
        password: ""
      }
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeVal = this.changeVal.bind(this);
  }

  handleSubmit(e) {
    let usuarioLogin = this.state.usuarioLogin;
    console.log(this);
    //autenticação aqui

    alert("Failure")
    
    e.preventDefault();
  }
  
  changeVal(prop, event) {
    console.log(event);
    let otherProp = (prop == "username") ? "password" : "username";
    this.setState((prevState, props) => {
      return {
        usuarioLogin: {
          [prop]: event.target.value,
          [otherProp]: prevState.usuarioLogin[otherProp]
        }
      }
    });
    console.log(this.state.usuarioLogin)
  }
  
  render() {
    return (
      <div className="container panel panel-default" id="login-box">
        <h1 className="text-center">Login</h1>
        <form className="form-horizontal panel-body" onSubmit={this.handleSubmit}>
          <LoginInput
            changeVal={this.changeVal}
          />
          <SubmitButton/>
        </form>
    </div>
    );
  }
}

export default LoginBox;