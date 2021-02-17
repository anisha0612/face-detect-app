import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLink/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import axios from "axios";
import "./App.css";

// Instantiate a new Clarifai app by passing in your API key.

const particleParameter = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
      route: "signin",
      isSigned: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFacesLocation = (data) => {
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);
    //  const face = data.data.outputs[0].data.regions[0].region_info.bounding_box;
    return data.data.outputs[0].data.regions.map((face) => {
      const personFace = face.region_info.bounding_box;
      return {
        bottomRow: height - personFace.bottom_row * height,
        leftCol: personFace.left_col * width,
        rightCol: width - personFace.right_col * width,
        topRow: personFace.top_row * height,
      };
    });
  };

  displayFaceBox = (boxes) => {
    // console.log(box);
    this.setState({ boxes: boxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    axios
      .post("http://localhost:3500/imageurl", { input: this.state.input })
      .then((response) => {
        if (response) {
          axios
            .put("http://localhost:3500/image", { id: this.state.user.id })
            .then((response) => response)
            .then((count) => {
              Object.assign(this.state.user, { entries: count });
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFacesLocation(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSigned: false });
    } else if (route === "home") {
      this.setState({ isSigned: true });
    }
    this.setState({ route: route });
  };
  render() {
    const { isSigned, route, imageUrl, boxes } = this.state;
    return (
      <div className='App'>
        <Particles className='particles' params={particleParameter} />
        <Navigation isSigned={isSigned} onRouteChange={this.onRouteChange} />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
