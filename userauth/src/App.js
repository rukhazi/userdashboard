import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './navbar';
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/SettingsPage';
import UpdatePasswordPage from './pages/UpdatePasswordPage';

const firebaseConfig = {
  apiKey: "AIzaSyCybUG5nRmhVxOCRd8dWZ226BukAady3fc",
  authDomain: "userauthentication-53b25.firebaseapp.com",
  projectId: "userauthentication-53b25",
  storageBucket: "userauthentication-53b25.firebasestorage.app",
  messagingSenderId: "771062696168",
  appId: "1:771062696168:web:a1b822897ea8ae0b1ca15d",
  measurementId: "G-W8ZFYDY525"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
