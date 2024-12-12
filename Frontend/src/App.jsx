import Login from './components/login'
import Signup from './components/signup'
import {Routes, Route} from 'react-router-dom';
function App(){
  return (
    <>
    {/* <Signup/> */}
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      
    </Routes>
    </>
  );
}

export default App;