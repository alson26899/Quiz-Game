import {Routes , Route } from "react-router-dom"
import './App.css';
import Quiz from "./components/Quiz";
import Home from './components/Home';

function App() {
  return (
    <div className='app' style={{overflow: 'hidden'}}>
      <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/quiz" element={<Quiz/> } /> 
       </Routes>
    </div>
  );
}

export default App;
