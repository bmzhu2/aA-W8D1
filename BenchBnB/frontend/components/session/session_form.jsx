import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    let otherLink = <div></div>;
    if (this.props.formType === "signup") {
      otherLink = <Link to="/login">Log In</Link>;
    } else if (this.props.formType === "login") {
      otherLink = <Link to="/signup">Sign Up</Link>;
    }
    return(
      <div>
        <h1>{this.props.formType}</h1>
        {otherLink}
        {/* {this.props.errors} */}
        <form>
          <label htmlFor="username">Username:
            <input 
              type="text" 
              value={this.state.username}
              onChange={this.updateUsername}
            />
          </label>
          <label htmlFor="password">Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </label>
          <input type="submit" value={`${this.props.formType}`} onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default SessionForm;