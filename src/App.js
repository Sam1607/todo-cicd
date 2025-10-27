import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product listing page</h1>}></Route>
          <Route path="/add" element={<h1>Add page</h1>}></Route>
          <Route path="/update" element={<h1>Update page</h1>}></Route>
          <Route path="/profile" element={<h1>Profile page</h1>}></Route>
          <Route path="/logout" element={<h1>Logout page</h1>}></Route>
          <Route path="/signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter >
      <Footer />
    </div>
  );
}

export default App;
