import React from 'react';

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      usuarioLogin: {
        username: "",
        password: ""
      }
    }
  }
  
  render() {
    const { changeVal } = this.props;
    return (
      <div>
        <div className="form-group">
          <input type="text" value={this.state.usuarioLogin.username} className="form-control" placeholder="Usuário" onChange={() => changeVal("username", event)} />
        </div>
        <div className="form-group">
          <input type="password" value={this.state.usuarioLogin.password} className="form-control" placeholder="Senha" onChange={() => changeVal("password", event)}/>
        </div>
      </div>
    );
  }
}

export default LoginInput;