import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState("light");//where dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = ()=>{
if(mode=='light'){

  setMode("dark");
  document.body.style.backgroundColor='#042743';
  showAlert("Dark Mode Enable","success");


}else{
  setMode("light");
  document.body.style.backgroundColor='white';
  showAlert("light Mode Enable","success")


}

  }
  return (
    <>
      <Navbar title="textUtiles" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter Text for paragarpgh" mode={mode} showAlert={showAlert} />
      <About />
      </div>
      {/* <Navbar  /> */}

      {/* Rest of your code */}
    </>
  );
}

export default App;
