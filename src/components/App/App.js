import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/home" element={<div className="App">home</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
