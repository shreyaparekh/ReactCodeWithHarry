import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



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
  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');

  }
  const toggleMode = (cls)=>{
   removeBodyClass();

    console.log(cls);
    document.body.classList.add('bg-' + cls);
if(mode=='light'){

  setMode("dark");
  document.body.style.backgroundColor='#042743';
  showAlert("Dark Mode Enable","success");
document.title='Dark Mode';

setInterval(() => {
document.title='text utils amazinng mode';
}, 2000);
setInterval(() => {
  document.title='install text utils amazinng mode';
  }, 2000);
}else{
  setMode("light");
  document.body.style.backgroundColor='white';
  showAlert("light Mode Enable","success")
  document.title='Light Mode';



}

  }
  return (
    <Router>
    <Navbar title="textUtiles" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/home" element={<TextForm heading="Text Utils word counter" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
  // return (
  //   <>
  //     <Navbar title="textUtiles" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  //     <Alert alert={alert}/>
  //     <div className="container my-3">
  //     <TextForm heading="Enter Text for paragarpgh" mode={mode} showAlert={showAlert} />
  //     <About />
  //     </div>
  //     {/* <Navbar  /> */}

  //     {/* Rest of your code */}
  //   </>
  // );
}

export default App;
