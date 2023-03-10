import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Container } from "react-bootstrap";

import AppHeader from '../app-header/Appheader';
import MainPage from '../pages/main-page/MainPage';
import SearchMain from '../pages/search-main/SearchMain';
import SortMain from '../pages/sort-main/SortMain';
import BinarySearch from '../pages/search-pages/BinarySearch';
import BubbleSort from '../pages/sort-pages/BubbleSort';
import MergeSort from '../pages/sort-pages/MergeSort';
import QuickSort from '../pages/sort-pages/QuickSort';
import CountSort from '../pages/sort-pages/CountSort';


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppHeader/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/search" element={<SearchMain/>}/>
          <Route path="/sort" element={<SortMain/>}/>
          <Route path="/search/binarysearch" element={<BinarySearch/>}/>
          <Route path="/sort/bubblesort" element={<BubbleSort/>}/>
          <Route path="/sort/mergesort" element={<MergeSort/>}/>
          <Route path="/sort/quicksort" element={<QuickSort/>}/>
          <Route path="/sort/countsort" element={<CountSort/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
