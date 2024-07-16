import React from 'react';
import './DownloadLink.css';
import androidIcon from '../images/android.png'; 
import iosIcon from '../images/ios.jpg'; 

const DownloadLinks = () => {
    return (
      <section id='download'>
      <div className="download-links-container" >
        <h2>Download Andar Bahar App</h2>
        <div className="download-buttons">
          <a href="https://expo.dev/artifacts/eas/3iGUkbxUGnKy8kyv5roTKG.apk" className="download-button android">
            <img src={androidIcon} alt="Android" />
            <span>Download for Android</span>
          </a>
{/*           
          <a href="link-to-your-ios-app" className="download-button ios">
            <img src={iosIcon} alt="iOS" />
            <span>Download for iOS</span>
          </a> */}
        </div>
      </div>
      </section>
    );
  };
  
  export default DownloadLinks;