import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Homepage, Auth, Comandas, Estoque } from './pages'
import  Header from './components/Header'



function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/comandas" element={<Comandas/>} />
          <Route path="/estoque" element={<Estoque/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
