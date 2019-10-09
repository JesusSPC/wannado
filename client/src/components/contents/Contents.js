import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../navbar/Navbar";

class Contents extends Component {
  render() {
    return (
      <React.Fragment>
      <Redirect to="/home" />

      <div className="App">
        <header className="App-header">
          <Navbar  logout={this.logout} />
          {/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
          <Contents />
        </header>
      </div>
    </React.Fragment>
    )
  }
}

export default Contents;