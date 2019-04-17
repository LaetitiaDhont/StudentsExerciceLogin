import React from "react";

import { userService } from "../_services";

class LoginPage extends React.Component {
  constructor(props) { // Reçoit des données qui vont nous servir à construire
    super(props);

    userService.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount() {
    // String
    let string = "Laetitia";
    // Array
    let array = ["Pierre, Bruno, Guillaume, Laetitia"];
    // Number
    let number = 4;
    // Object
    let Object = {name: "Mon objet canard"};

    console.log('Hey, my component is mounted' +" " + string + " " + array + " " +  number);
    console.log(Object)
  }

  handleChange(e) {
    const { name, value } = e.target; // Délègue un évenement
    console.log(name, value); // Affiche chaque lettre de mon input dans la case password/username
  }

  handleUsernameChange(event) {
    console.log('event : ' , event.target.value);

    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    console.log("username :", username);
    console.log("password :", password);
  }

  render() {
    // const { username, password } = this.state;

    console.log(this.state);
    return (
      <React.Fragment>
        <h2>Login</h2>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <form name="form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            // value={username}
            onChange={this.handleUsernameChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            // value={password}
            onChange={this.handlePasswordChange}

          />
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export { LoginPage };
