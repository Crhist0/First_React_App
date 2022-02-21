import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Cards } from './pages/Cards/Cards';
import { NewsPage } from './pages/News/NewsPage';
import { Landing } from './pages/Landing/Landing';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
