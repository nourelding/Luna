import React from 'react'
import OrangeLine from '../assets/Line.png';
import RatedRestaurants from '../components/bestratedrestaurants.js'
import Navbar from '../components/NavBar/index.js'
import Footer from '../components/Footer/index.js'
import {Maincontainer, Maincontentbox, SearchbarBox, Searchbar, Button, RatedRestaurantsBox , H1, Img, ImgBox} from '../styles/home.js'
import { useNavigate } from "react-router-dom";
const Home = () => {
    return ( 
        <Maincontainer>
            <Navbar/>
            <Maincontentbox>
                <SearchbarBox>
                    <Searchbar placeholder='search'></Searchbar>
                    <Button>Search</Button>
                </SearchbarBox>
                <RatedRestaurantsBox>
                    <H1>BEST RATED RESTAURANTS</H1>
                    <ImgBox>
                        <Img src={OrangeLine}></Img>
                    </ImgBox>
                    <RatedRestaurants/>
                </RatedRestaurantsBox>
            </Maincontentbox>
            <Footer/>
        </Maincontainer>
    );
}

export default Home;