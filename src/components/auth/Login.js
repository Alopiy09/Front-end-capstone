import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"



export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <div id="moveTheBox">
      <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal" id="loginPageTitle">Please sign in</h1>
        <label htmlFor="inputUsername" id="usernameTitle">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={` Username`}
          required=""
          autoFocus=""
        />
        <br/>
        <label htmlFor="inputPassword" id="passwordTitle">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={` Password`}
          required=""
        />
        <div id="buttonHolder">
        <button type="submit" onClick={this.handleLogin}className="btn">
          Sign in
        </button>
        <button type="submit" onClick={this.handleRegister} className="btn">
          Register
        </button>
        </div>
      </form>
      </div>
    )
  }
}
