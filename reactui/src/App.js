import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"

import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminBlog from './pages/AdminBlog copy';
import AdminAddBlog from './pages/AdminAddBlog';
import SignUpView from './pages/SignUpView';
function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login-form' element={<Login/>}/>
        <Route path='/sign-up-form' element={<SignUp/>}/>
        <Route path='/AdminBlog' element={<AdminBlog/>}/>
        <Route path='/blog-add-form' element={<AdminAddBlog/>}/>
        <Route path='/sign-up-view' element={<SignUpView/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
