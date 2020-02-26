import React, { Component } from 'react';
import './App.css';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';

// const app = new Clarifai.App({
//   apiKey: '5c9644278bbd45198b45b8841dc0de30'
// });

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    dateCreated: ''
  }
    
}

class App extends Component {
  constructor(){
    super()
    this.state = initialState;
    
  }


  loadUser = (data) => {
    this.setState({
      user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      dateCreated: data.joined
      }
    })

    // console.log(this.state.user);
  } 

  
  
  // componentDidMount(){
  //   fetch('http://localhost:3000/')
  //    .then(res => res.json())
  //    .then(user => console.log(user))
  // }

  onInputChange = (event) => {
      this.setState({ input: event.target.value })
      
  }

  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input });
  
    if (this.state.imageUrl !== ''){
      console.log('input is empty')
    }


    fetch('http://localhost:3000/image/', {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
     .then(response => response.json())
      .then(newEntry => {
        this.setState(prevState => ({
          user: {
            ...prevState.user,
            entries: newEntry
          }
        }))
      })
      .catch(console.log)
    
    // app.models
    // .predict("c386b7a870114f4a87477c0824499348", "https://samples.clarifai.com/wedding.jpg")
    // .then(response => {
    //   console.log(response);
    // },
    // err => {
    //   console.log(err);
    // }
    
    // );
  }

  onEnter = (event) => {
    if(event.keyCode === 13){
      this.onButtonClick();
    }
  }

  onRouteChange = (route) => {
    if(route === 'home'){
     this.setState({isSignedIn: true})
    }else if(route === 'signin') {
     this.setState(initialState)
    }else if(route === 'register'){
     this.setState({isSignedIn: false})
    }
    this.setState({route: route});
  }

  render(){
    const { imageUrl, route, isSignedIn } = this.state;
  return (
    <div className="">
      <Particles className='particles' 
        params= { particleOptions }
      />
      <Navigation 
       isSignedIn = {isSignedIn}
       onRouteChange = {this.onRouteChange}/>
      { route === 'home' 
        ? <div> 
           <Logo />
           <Rank
            entries = {this.state.user.entries}
            name = {this.state.user.name}
           />
           <ImageLinkForm 
             onInputChange = { this.onInputChange }
             onButtonClick = { this.onButtonClick}
             onEnter = { this.onEnter }
           />
           <FaceRecognition 
             displayImage = { imageUrl }
           />
          </div>  
        : (
          route === 'signin'
          ? <SignIn 
             onRouteChange = {this.onRouteChange}
             loadUser = {this.loadUser}
            />
          : <Register 
             onRouteChange = {this.onRouteChange}
             loadUser = {this.loadUser}
            />
          )
      }
    </div>
  );
  }
}

export default App;
