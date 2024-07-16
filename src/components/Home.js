import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Screenshot from '../images/ca.PNG'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome to Andhar Bahar</h1>
            <p>Experience the thrill of our app with unique features tailored just for you</p>
            <a href='https://expo.dev/artifacts/eas/3iGUkbxUGnKy8kyv5roTKG.apk'><button className="btn-primary">Download Now</button> </a>
          </div>
          <div className="col-md-6">
            <img src={Screenshot} alt="App Screenshot" className="app-screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
