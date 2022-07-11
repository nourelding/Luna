import React from 'react'
import Footer from "../components/Footer/index.js";
import NavBar from "../components/NavBar/index.js";
import OrangeLine from "../assets/Line.png";
import Line from "../assets/Line 5.png";
import SearchNavBar from "../components/searchnavbar.js"
import RestaurantsMap from "../components/restaurantsmapping.js"
import {Maincontainer, H1Container, H1, InnerContainer, ImgBox, Img, Img2, RestaurantContainer} from "../styles/restaurants.js"
import { useNavigate } from 'react-router-dom';
const Restaurants = () => {
const navigate = useNavigate();
const restaurantsPage = () => {
    navigate("/restaurants");
}
const reviewsPage = () => {
    navigate("/reviews")
}
const usersPage = () => {
    navigate("/users")
}
    return ( 
        <Maincontainer>
            <NavBar/>
            <SearchNavBar/>
            <H1Container>
                <H1 onClick={restaurantsPage}>RESTAURANTS</H1>
                <H1 onClick={reviewsPage}>REVIEWS</H1>
                <H1 onClick={usersPage}>USERS</H1>
            </H1Container>
            <InnerContainer>
                <ImgBox>
                    <Img src={OrangeLine}></Img>
                    <Img2 src={Line}></Img2>
                </ImgBox>
                <RestaurantContainer>
                <RestaurantsMap/>

                </RestaurantContainer>

            </InnerContainer>
            <Footer/>
        </Maincontainer>
    

    );
}

export default Restaurants;