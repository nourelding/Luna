import React from 'react';
import Footer from "../components/Footer/index.js";
import NavBar from "../components/NavBar/index.js";
import SearchBar from "../components/searchnavbar.js"
import OrangeLine from "../assets/Line.png";
import Line from "../assets/Line 5.png";
import {Maincontainer, H1Container, H1, InnerContainer, ImgBox, RestaurantContainer} from "../styles/restaurants.js";
import ReviewMap from "../components/reviewsMap.js"
import {Image, Image2} from "../styles/reviews.js"
import {useNavigate} from 'react-router-dom';


const Review = () => {
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
            <SearchBar/>
            <H1Container>
                <H1 onClick={restaurantsPage}>RESTAURANTS</H1>
                <H1 onClick={reviewsPage}>REVIEWS</H1>
                <H1 onClick={usersPage}>USERS</H1>
            </H1Container>
            <InnerContainer>
                <ImgBox>
                    <Image2 src={Line}></Image2>
                    <Image src={OrangeLine}></Image>
                    <Image2 src={Line}></Image2>
                </ImgBox>
                <RestaurantContainer>
                    <ReviewMap />
                </RestaurantContainer>
            </InnerContainer>
            <Footer/>
        </Maincontainer>
    );
}

export default Review;