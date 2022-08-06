import { Route, Routes } from 'react-router-dom';

//Pages
import Login from './pages/Login';
import Register from './pages/Register';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
