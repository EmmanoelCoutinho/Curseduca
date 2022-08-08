import { Route, Routes } from 'react-router-dom';

//Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}
