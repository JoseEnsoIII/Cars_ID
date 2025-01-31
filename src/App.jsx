import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import Home from './Components/Pages/Home'; // Import Home page
import Meg from './Components/Pages/Meg'; // Import Meg page
import Opt from './Components/Pages/Optimus';
import Purrent from './Components/Pages/Parent';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics /> 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Route */}
        <Route path="/parent" element={<Purrent />} /> {/* Parent Route */}
        <Route path="/meg" element={<Meg />} /> {/* Meg Route */}
        <Route path="/opt" element={<Opt />} /> {/* Optimus Route */}
      </Routes>
    </Router>  
  );
} 

export default App;
