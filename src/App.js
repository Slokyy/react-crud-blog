import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreateBlog from './Pages/CreateBlog';
import SingleBlog from './Pages/SingleBlog';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
