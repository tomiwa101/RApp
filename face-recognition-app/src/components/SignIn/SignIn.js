import React from 'react';


class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSignInSubmit = () => {
        fetch('http://localhost:3000/signin/', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(Response => Response.json())
        .then(user => {
            if(user.id){
                // console.log(data + '! it is working');
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        // this.props.onRouteChange('home');
    }

        


    render(){
        const { onRouteChange } = this.props;
        return (
            <div className="br3 ba dark-gray b--black-10 mv4 new-width centre shadow-5 center">
             <main className="pa4 black-80 w-75">
              <form 
               className="measure centre"
              >
               <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 tc ttu">Sign In</legend>
                <div className="mt3">
                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                 <input 
                  className="pa2 input-reset ba b--black hover-b-white bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email"  
                  id="email-address"
                  onChange={this.onEmailChange}
                 />
                </div>
                <div className="mv3">
                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                 <input 
                  className="b pa2 input-reset ba b--black hover-b-white bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password" 
                  onChange={this.onPasswordChange}
                 />
                </div>
               </fieldset>
               <div className="tc">
                <input 
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br3"
                 type="button" 
                 value="Sign in" 
                 onClick = {this.onSignInSubmit}
                />
               </div>
               <div className="lh-copy mt3 tc">
                <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
               </div>
              </form>
             </main>
    
    
            </div>
        );
    }
    
}

export default SignIn;