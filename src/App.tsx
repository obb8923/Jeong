import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './shared/components/Nav/Nav';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Nav />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
