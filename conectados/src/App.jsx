import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CreateServiceForm from './components/Services/CreateServiceForm';
import { ServiceProvider } from './context/ServiceContext';
import { UserProvider } from './context/UserContext';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
    <ServiceProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/create" element={<CreateServiceForm />} /> {/*poner en la protected route */}
        </Routes>
      </main>
      </ServiceProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

