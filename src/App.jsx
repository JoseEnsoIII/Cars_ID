import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components
import { Analytics } from "@vercel/analytics/react"; // Import Analytics
import Home from './Components/Pages/Home'; // Import Home page
import Charlie from './Components/Family_Cat/Family_Cat/Panda'; // Import Meg page
import Panda from './Components/Family_Cat/Family_Cat/Charlie'; // Import Optimus page
import Doffy from './Components/Family_Cat/Family_Cat/Doffy'; // Import Optimus page
import FamilyTree from './Components/Pages/Family_Tree'; // Import Optimus page
import Purrent from './Components/Family_Cat/Parent/Parent'; // Import Parent page
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
        <Route path="/family_tree" element={<FamilyTree />} />
      </Routes>
    </Router>  
  );
} 

export default App;
