import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from './components/TextForm';
// import About from "./components/About";
// import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"; //optional color #212529
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading="Enter Your text here:" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/' element={<TextForm heading="Enter Your text here:" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
