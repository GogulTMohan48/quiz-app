import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import FirstPg from './components/FirstPg';


function App() {
  return (
<>
<nav>
  <ul>
    <li style= {{listStyleType:"none"}}>
     
     
     
      <Link to="/" ><button style={{backgroundColor:'black',fontSize:"15px",color:'white', marginRight:"260px",borderWidth:"6px",borderRadius:"10px",width:'70px'}}>REACT</button></Link>
      <Link to="/quiz" ><button style={{backgroundColor:'black',fontSize:"15px",color:'white',borderWidth:"6px",borderRadius:"10px",width:'70px'}}>CSS</button></Link>

    </li>
  </ul>
</nav>
      <Routes>
         <Route path='/' element={<FirstPg/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
       
      </Routes>
</>
  );
}

export default App;
