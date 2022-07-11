import React from "react";
import NavBar from "../NavBar";
// import Footer from "../Footer";
import HeaderTop from "../headerTop";
import ResturantMap from "../RestaurantMap";
// import RestaurantFilter from "../RestaurantFilter";
// import {MdOutlineWatchLater} from 'react-icons/md'
// import {GiMoneyStack} from 'react-icons/gi'
import useFetch from '../../useFetch.js'

import {
  MainRestaurantHero,
  HeroWrapper,
  HeroTop,
  HeroSection,
  HeroMap,
} from '../../styles/RestaurantHero'


const RestaurantHero = () => {

  return ( 
    <MainRestaurantHero>
      <HeroTop>
        <NavBar />
        <HeroWrapper>
          <HeroSection>
          <HeaderTop />
          </HeroSection>
          <HeroMap>
            <ResturantMap />
          </HeroMap>
        </HeroWrapper>
      </HeroTop>
    </MainRestaurantHero>
   );
}
 
export default RestaurantHero;