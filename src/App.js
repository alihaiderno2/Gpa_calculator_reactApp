import "./App.css";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import MainBodyCGPA from "./components/MainBodyCGPA";
import NavBar from "./components/NavBar";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    // <div style={{backgroundColor:"#F8FAFD"}}>
    <div style={{backgroundColor:"#e8e9ea"}}>
     <NavBar/>
     <Routes>
      <Route path="/" element={<MainBody/>}/>
      <Route path="/cgpa" element= {<MainBodyCGPA/>}/>
     </Routes>
     <Footer/>
     
      
    </div>
  );
}

export default App;
