import React from 'react';
import './index.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Slider from '../components/Slider.jsx';
import Trending2 from '../components/Trending2.jsx';
import Aboutus from '../components/Aboutus.jsx';
import EpisodesSection from '../components/EpisodesSection.jsx';
import MovieWatch from '../components/MovieWatch.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login.jsx';  
import Register from '../components/Register.jsx';  // adjust path if different
import Trending1 from '../components/Trending1.jsx'; // (missing import in your code)
import { movies } from "./data/Movies.js";
import ScrollToTop from "../components/ScrollToTop";
import Movies from "../components/Movies.jsx";
import TrendingSlider from "../components/TrendingSlider.jsx";



import Test from '../components/test.jsx';
import WebSeries from '../components/WebSeries.jsx';
import TvShows from '../components/TvShows.jsx';


export default function App() {
  return (
    // 3. Wrap your app inside Router
    <Router>
      <ScrollToTop />
      <div style={{ backgroundColor: 'black', width: '100%', margin: 0, padding: 0 }}>
        <Header />
        

        {/* 4. Define routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider/>
                <Trending1/>
                <Trending2/>
                
                <EpisodesSection/>
                <Trending1/>
                <WebSeries/>
                <Trending2 />
                <Trending1 />
                
                
              </>
            }
          />
          <Route path="/login" element={<Login />} />  {/* <-- login route */}
          <Route path="/register" element={<Register />} />  {/* <-- register route */}
          <Route path="/about" element={<Aboutus />} />  {/* <-- About us */}
          <Route path="/watch/:id" element={<MovieWatch />} />
          <Route path="/WebSeries" element={<WebSeries />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/WebSeries" element={<WebSeries />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/WebSeries" element={<WebSeries />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
