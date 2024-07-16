import Header from './components/Header';
import Home from './components/Home';

import About from './components/About';
import Footer from './components/Footer';
import GameRules from './components/GameRules';
import DownloadLink from './components/DownloadLink';
function AllComponent() {
    return (
      <div >
        <Header></Header>
        <Home></Home>
        <GameRules></GameRules>
        <DownloadLink></DownloadLink>
     
      
        <About></About>
       
        <Footer></Footer>
        
       
      </div>
    );
  }
  
  export default AllComponent;
  