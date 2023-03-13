import './App.css';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import WebDevProjects from './pages/WebDevProjects';
import HomePage from './pages/HomePage';
import MobAppDevProjects from './pages/MobAppDevProjects';
import IOTDevProjects from './pages/IOTDevProjects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Web App Development_Projects" element={<WebDevProjects />} />
              <Route path="/Mobile App Development_Projects" element={<MobAppDevProjects />} />
              <Route path="/IOT (Internet of Things)_Projects" element={<IOTDevProjects />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
