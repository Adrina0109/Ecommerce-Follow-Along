import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/updateForm';
import Navbar from './components/navBarFol/navbar';
import SinglePageProduct from './Pages/SingleProductPage';
function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm/>} />
        <Route path="/product-details/:id" element={<SinglePageProduct/>}/>
    </Routes>
    </>
  );
}

export default App;