import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
