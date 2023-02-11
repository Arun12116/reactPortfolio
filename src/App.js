
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Home from './Component/Home/Home';
import Project from './Pages/Project/Project';

function App() {
  return (

    <>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
