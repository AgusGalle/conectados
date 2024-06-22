import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

