import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import '@/App.css';
import Nav from '@/components/Nav';
import DetailPage from '@/pages/DetailPage';
import Footer from '@/components/Footer';
import MainPage from '@/pages/MainPage';
import SearchPage from '@/pages/SearchPage';

const basePath = process.env.REACT_APP_BASE_PATH || '/pop-film';

function Layout() {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={basePath} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
