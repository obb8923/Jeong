// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToyDo from './pages/ToyDo';
import Readin from './pages/readin';
import Nav from './components/Nav';
import TermsAndPolicy from './pages/terms-and-policy';
function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ToyDo" element={<ToyDo />} />
          <Route path="/readin" element={<Readin />} />
          <Route path="/ToyDo/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/readin/terms-and-policy" element={<TermsAndPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
