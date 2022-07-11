import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserRestaurant from "../components/UserRestaurant";

const UserRestaurantPage = () => {
    return ( 
        <>    
        <NavBar/>
        <UserRestaurant/>
        <Footer/>
        </>
    );
}

export default UserRestaurantPage;