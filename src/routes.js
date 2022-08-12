
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';


export default function Routers(){

    return (
        <>

         <BrowserRouter>
            <Routes> 
                <Route  path='/'  element  = {<Home />}/>
                <Route path='/login' element = {<Login/>} />
                <Route path='/signup' element = {<Signup/>} />
                <Route path='/profile' element = {<Profile/>} />
            </Routes>
         </BrowserRouter>
        
        
        </>
    )
}
