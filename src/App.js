import './App.css';
import './phone.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import LoginSignUp from './Pages/LoginSignUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/loginsignup' element={<LoginSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
