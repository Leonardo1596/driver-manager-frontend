import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/entrar" />} ></Route>
          <Route path="/inicio" element={<Home />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
