import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/login/index.jsx';
import ProtectedRoute from './private.jsx';
import Profile from '../pages/profile/index.jsx';
import Cadastro from '../pages/cadastro/index.jsx';
import About from '../pages/about/index.jsx';


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}