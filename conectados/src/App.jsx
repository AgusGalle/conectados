import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import CreateServiceForm from './components/Services/CreateServiceForm';
import { ServiceProvider } from './context/ServiceContext';
import { UserProvider } from './context/UserContext';
import Register from './pages/Register';
import Contrata from './pages/Contrata';
import AdminPage from './components/Admin/Admin';
import ProtectedRouteAdmin from "./protectecRoute/ProtectedRouteAdmin";
import ProtectedRouteUser from './protectecRoute/ProtectedRouteUser'

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
          <Route path='/contrata' element={<Contrata/>}/>
          <Route element={<ProtectedRouteAdmin/>} >
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/create" element={<CreateServiceForm />} />
          </Route>
           <Route element={<ProtectedRouteUser/>}>

           </Route>
        </Routes>
      </main>
      </ServiceProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

