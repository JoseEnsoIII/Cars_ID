import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import Home from './Components/Pages/Home'; // Import Home page
import Charlie from './Components/Pages/Meg'; // Import Meg page
import Panda from './Components/Pages/Optimus'; // Import Optimus page
import Purrent from './Components/Pages/Parent'; // Import Parent page
import './App.css';

function App() {
  return (
    <Router>
      <Analytics /> {/* Add the Analytics component here to track page views */}
      
      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent" element={<Purrent />} />
        <Route path="/charlie" element={<Charlie />} />
        <Route path="/panda" element={<Panda />} />
      </Routes>
    </Router>  
  );
} 

export default App;
