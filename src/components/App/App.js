import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
