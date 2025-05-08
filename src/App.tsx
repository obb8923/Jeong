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
          <Route path="/auth/verify" element={<AuthVerify />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/readin/user/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
