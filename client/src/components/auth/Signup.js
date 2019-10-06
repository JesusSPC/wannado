// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user)
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
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            {/* <label>Username:</label> */}
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} placeholder="Username"/>
          </fieldset>
          
          <fieldset>
            {/* <label>Password:</label> */}
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} placeholder="Password"/>
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

        <h2>{this.state.error ? 'You must input a proper username and password.' : ''}</h2>
      </div>
    )
  }
}

export default Signup;