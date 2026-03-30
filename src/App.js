import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import CoursesPage from './pages/Courses';
import Placement from './pages/Placement';
import WhyUsPage from './pages/WhyUs';
import ContactUsPage from './pages/Contact';
function App() {
  return (
    <>

     <Router>
     <Routes>
     <Route path='/' element={<Home/>}> </Route>
     <Route path='/courses' element={<CoursesPage/>}> </Route>
     <Route path='/placements' element={<Placement/>}> </Route>
     <Route path='/why-us' element={<WhyUsPage/>}> </Route>
     <Route path='/contact' element={<ContactUsPage/>}> </Route>
     </Routes>
        </Router>
    
    
    
    </>
  )
}


export default App