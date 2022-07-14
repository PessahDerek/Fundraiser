import './App.css';
import './phone.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import LoginSignUp from './Pages/LoginSignUp'
import Home from './Pages/Home';
import Create from './Pages/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/loginsignup' element={<LoginSignUp />} />
        <Route exact path='/home/*' element={<Home />} />
        <Route exact path='/home/createraiser' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
