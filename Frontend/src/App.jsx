import LoginPage from './components/auth/login'
import SignupForm from './components/auth/signup'
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
function App(){
  return (
    <>
    <Routes>
        {/* <Route path="/HomePage" element={<h1>Home Page</h1>} /> */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      
    </Routes>
    </>
  );
}

export default App;