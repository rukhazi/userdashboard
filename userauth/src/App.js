import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './navbar';
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/SettingsPage';
import UpdatePasswordPage from './pages/UpdatePasswordPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar/>
        <div id="page-pody">
          <Routes>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/updatepass" element={<UpdatePasswordPage/>}/>
            <Route path="/user-authentication" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/create-account" element={<CreateAccountPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
