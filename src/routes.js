import React from 'react'
import { Route, Routes ,BrowserRouter} from 'react-router-dom'
import Login from './Components/Login'
import Registration1 from './Components/Registration1';
import Forgotpassword from './Components/Forgotpassword';
import Dashboard from './Components/Dashboard';

export default function routes() {
  return (
   

<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='login' element={<Login/>}/>
<Route path='register' element={<Registration1/>}/>
<Route path='Forgotpassword' element={<Forgotpassword/>}/>
<Route path='dashboard' element={<Dashboard/>}/>

</Routes>

</BrowserRouter>
   
  )
}
