// App.jsx
import "./App.css";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'
import ShortUrl from './components/ShortUrl'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FRONTEND_URL = import.meta.env.VITE_APP_FRONTEND_URL;
console.log(FRONTEND_URL);
function App() {
  return (
    <BrowserRouter basename={new URL(FRONTEND_URL).pathname}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shorturl" element={<ShortUrl />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
