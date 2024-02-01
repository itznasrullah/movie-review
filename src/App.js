import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShowDetails from "./components/ShowDetails";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/view/:id" exact element={ <ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
