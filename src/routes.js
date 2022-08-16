
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import DefaultPage from './pages/defaultPage'


export default function Routers(){

    const token = "ddd";

    return (
        <>

         <BrowserRouter>
            <Routes> 
                {!token? 
                    <> 
                        
                        <Route path='/login' element = {<Login/>} />
                        <Route path='*' element = {<Login/>} />
                    </>
                   
                
                : 
                <> 
                <Route  path='*'  element = {<Home />}/>
                <Route path='/profile' element = {<Profile/>} />
            </>
                
                }
                
              
                
            </Routes>
         </BrowserRouter>
        
        
        </>
    )
}
