import React from 'react';
import {Link} from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.handleLogOut}>Log Out</button>
        </div>
      )
    } else {
      return(
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      )
    }
  }
}

export default Greeting;
