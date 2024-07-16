
import './App.css';
import AllComponent from "./AllComponent";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";



function App() {
  return (
    <div >
      <BrowserRouter>
   <Routes>
  
   <Route path="/" element={<AllComponent/>}/>
   <Route path="/termsofservice" element={<TermsOfService/>}/>
   <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
   
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
