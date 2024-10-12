import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { Register } from './pages/register';
import { Forgot } from './pages/forgot';
import ProtectedRoute, { Signup,ProtectedRoute2 } from './pages/SignUp';
import { useGetUserInfo } from './firestore/getUseInfo';
import { AppProvider } from './ovelrays/context'; 
import { Main } from './sections/main';


function App() {
  const { isAuth } = useGetUserInfo(); 
  return (
    <AppProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path='/home' element={
              <ProtectedRoute><Main/></ProtectedRoute>} /> 
            <Route path="/" element={isAuth ? <Navigate to="/home"/> : <Navigate to="/signup"/>} />
            <Route path='/signup' element={
              <ProtectedRoute2><Signup /></ProtectedRoute2>} />
            <Route path="/register" element={isAuth ? <Navigate to="/home"/> : <Register/>} />
            <Route path='/forgot' element={isAuth ? <Navigate to="/home"/> : <Forgot/>}/>            
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}


export default App;
