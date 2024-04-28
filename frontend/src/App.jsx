import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Prediction_Page from './components/Prediction';
import Home_Page from './components/Home';
// import Buy_Page from './components/Buy_page';
import About from './components/About';
import Contact from './components/Contact';
import Create from './components/create';
import BuyPage from './components/buyPage/buyPage';
import Previous from './components/Previous_page';
import Upcoming from './components/upcoming'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/new" element={<New />} /> */}
        {/* <Route path="/" element={<Home_Page />} /> */}
        <Route path="/" element={<Home_Page/>} />
        <Route path="/prediction/:uniqueId" element={<Prediction_Page />} />
        <Route path='/about' element={<About/>}></Route>
        <Route path='/previousmatches' element={<Previous/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/upcoming' element={<Upcoming/>}></Route>
        <Route path='/buy/:uniqueId' element = {<BuyPage/>}></Route>
      </Routes>
      {/* <div className="hi">HI</div> */}
    </>
  );
}

export default App;
