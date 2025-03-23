// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Home from './Components/Pages/Home';
import CatProfile from './Components/Pages/CatProfile';
import FamilyTree from './Components/Pages/Family_Tree';
import Purrent from './Components/Pages/Parent';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<CatProfile />} />
        <Route path="/parent" element={<Purrent />} />
        <Route path="/family_tree" element={<FamilyTree />} />
      </Routes>
    </Router>  
  );
}
export default App;
