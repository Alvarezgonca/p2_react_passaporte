import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Cadastro from './Cadastro';
import EsqueciSenha from './EsqueciSenha';
import Perfil from './Perfil';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha/>} />
      <Route path="/perfil" element={<Perfil/>} />
    </Routes>
  );
}
