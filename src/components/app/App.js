import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Container } from "react-bootstrap";

import AppHeader from '../app-header/Appheader';
import MainPage from '../pages/main-page/MainPage';
import SearchPage from '../pages/search-page/SearchPage';
import BinarySearch from '../pages/search-pages/BinarySearch';


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppHeader/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/search/binarysearch" element={<BinarySearch/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
