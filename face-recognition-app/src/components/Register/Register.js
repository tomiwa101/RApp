import React from 'react';

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
         .then(Response => Response.json())
          .then(user => {
              if(user === 'fill in all inputs'){
                alert('fill in all inputs');
              }else if(user === 'email already exist'){
                alert('email already exists');
              }else{
                this.props.loadUser(user);
                this.props.onRouteChange('home');
              }
          })
    }


    render(){
        
        return (
            <div className="br3 ba dark-gray b--black-10 mv4 new-width centre shadow-5 center">
             <main className="pa4 black-80 w-75">
              <form className="measure centre">
               <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw6 ph0 mh0 tc ttu">Register</legend>
                <div className="mt3">
                 <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                 <input 
                  className="pa2 input-reset ba b--black hover-b-white bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name" 
                  onChange={this.onNameChange}
                 />
                </div>
                <div className="mt3">
                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                 <input 
                  className="pa2 input-reset ba b--black hover-b-white bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
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
                 value="Register" 
                 onClick = {this.onRegister}
                />
               </div>
              </form>
             </main>
    
    
            </div>
        );
    }
    
}

export default Register;