// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToyDo from './pages/ToyDo';
import Readin from './pages/readin';
import Nav from './components/Nav';
import TermsAndPolicy from './pages/terms-and-policy';
import AuthVerify from './pages/AuthVerify';
import Auth from './pages/Auth';
import Delete from './pages/User/Delete';
import Pio from './pages/pio';
import Layered from './pages/layered'
import HanaDiary from './pages/HanaDiary'
function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ToyDo" element={<ToyDo />} />
          <Route path="/readin" element={<Readin />} />
          <Route path="/readin/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/readin/user/delete" element={<Delete />} />
          <Route path="/pio" element={<Pio />} />
          <Route path="/pio/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/pio/user/delete" element={<Delete />} />
          <Route path="/ToyDo/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/layered" element={<Layered />} />
          <Route path="/layered/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/HanaDiary" element={<HanaDiary />} />
          <Route path="/HanaDiary/terms-and-policy" element={<TermsAndPolicy />} />
          <Route path="/auth/verify" element={<AuthVerify />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
