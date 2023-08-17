import Barnav from './components/Barnav';
import FormText from './components/FormText';
import Lerts from './components/Lerts';
import { useState } from 'react';
import Dabdi from './components/Dabdi';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';

function App() {
  
    const[Mode,setMode] = useState('light');
    const [alert,setAlert]=useState(null);
  
    const showAlert = (message , type)=>{
      setAlert({
        messages:message,
        types:type
      
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  const toggleMode =()=>{
    if(Mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TRI - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TRI - Light Mode'
    }
  }
  return (
  
      <>
     
     {/* <Router> */}
     <Barnav title ="textutils2" about="About us" mode={Mode} toggleMode={toggleMode}/>
      <Lerts alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>   
          <Route path="/about" element={<Dabdi />} />
          <Route path="/" element={<FormText  showAlert={showAlert} heading ="Enter a text to analyze " mode={Mode}/>} />

        </Routes> */}
        <FormText  showAlert={showAlert} heading ="Enter a text to analyze " mode={Mode}/>
      </div>
   {/* </Router> */}


       
     
       
      {/* <Babdi/> */}
      
      </>
   
  );
}

export default App;
