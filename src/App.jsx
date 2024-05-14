import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-between items-center xl:w-[425px] xl:h-[649px] lg:w-[425px] lg:h-[649px] md:w-[425px] md:h-[649px]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
