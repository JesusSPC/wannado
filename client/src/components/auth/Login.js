// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (<div>
      <h3>Sign in with your account</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          {/* <label>Username:</label> */}
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} placeholder="Username"/>
        </fieldset>

        <fieldset>
          {/* <label>Password:</label> */}
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} placeholder="Username"/>
        </fieldset>

        <input type="submit" value="Login" />
      </form>

      <h2>{this.state.error ? 'Incorrect username or password. Please, check your credentials' : ''}</h2>
    </div>)
  }
}

export default Login;