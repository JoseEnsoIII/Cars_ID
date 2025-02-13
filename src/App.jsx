import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import Home from './Components/Pages/Home'; // Import Home page
import Charlie from './Components/Pages/Meg'; // Import Meg page
import Panda from './Components/Pages/Optimus'; // Import Optimus page
import Doffy from './Components/Pages/Doffy'; // Import Optimus page
import Megs from './Components/Pages/Megs'; // Import Optimus page
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
        <Route path="/doffy" element={<Doffy />} />
        <Route path="/megs" element={<Megs />} />
      </Routes>
    </Router>  
  );
} 

export default App;
