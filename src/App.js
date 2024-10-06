import { BrowserRouter as Router,Routes, Route, Navigate  } from 'react-router-dom';
import './index.css';
import { Register } from './pages/register';
import { Forgot } from './pages/forgot';
import Home from './pages/Home';
import ProtectedRoute , { Signup } from './pages/SignUp';
import { useGetUserInfo } from './firestore/getUseInfo';
import { Front } from './sections/front';

function App() {
  const { isAuth } = useGetUserInfo(); 
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route 
            path='/signup' 
            element={ isAuth ? <Navigate to="/home"/> : <Signup />} />
          <Route path="/register" element={<Register/>} />
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/statu' element={<Front/>}/>
          <Route path='/home' 
                 element={
                  <ProtectedRoute>
                   <Home/>
                  </ProtectedRoute>
                 }/>
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

