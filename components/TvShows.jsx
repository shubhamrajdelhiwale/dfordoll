import React from "react";
import Test from '/components/Test.jsx';
import Trending1 from '/components/Trending1.jsx';
import Trending2 from '/components/Trending2.jsx';
import TrendingSlider from '../components/TrendingSlider.jsx';

function TvShows() {
  return (
    <div className="bg-black text-white  space-y-8">
        <TrendingSlider/>
        <Trending1/>
        <Trending2/>

    </div>
  )
}

export default TvShows;