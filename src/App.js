import {Routes, Route} from "react";
import './App.css';
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
const[user, setUser]=useState(null);
  return (
    <div className="App">
      <Nav/>
      {/* <Routes>
      </Routes> */}
    
    </div>
  );
}

export default App;
