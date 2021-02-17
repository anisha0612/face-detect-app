import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    axios
      .post("https://arcane-coast-96493.herokuapp.com/signin", {
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      })
      .then((response) => JSON.parse(response.request.response))
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='center ma'>
        <article className='mw6 center  br4 pa3 pa4-ns mv3 ba b--black-10 shadow-5'>
          <main className='pa4 black-80'>
            <div className='measure '>
              <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                <legend className='f2 fw6 ph0 mh0 center'>Sign In</legend>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                    Email
                  </label>
                  <input
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='email'
                    name='email-address'
                    id='email-address'
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className='mv3'>
                  <label className='db fw6 lh-copy f6' htmlFor='password'>
                    Password
                  </label>
                  <input
                    className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='password'
                    name='password'
                    id='password'
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className='center'>
                <input
                  onClick={this.onSubmitSignIn}
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='submit'
                  value='Sign in'
                />
              </div>
              <div className='lh-copy mt3 center'>
                <p
                  onClick={() => onRouteChange("register")}
                  className='f6  link dim black db link pointer'>
                  Register
                </p>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

// const SignIn = ({ onRouteChange }) => {

// };

export default SignIn;
