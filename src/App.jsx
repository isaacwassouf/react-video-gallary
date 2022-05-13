import './App.css';
import Auth from './layout/auth/auth';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Navigate to={'/auth/login'} />} />
        
        <Route path='auth'>
          <Route path='signup' element={<Auth> <Signup /> </Auth>} />
          <Route path='login' element={<Auth> <Login /> </Auth>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
