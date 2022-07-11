import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {RestaurantContainer, RestaurantTitle, RestaurantName, RestaurantDescription, RestaurantDescriptionContainer, CreateRestaurantButton} from "../../styles/userRestaurant"
//////// Navigation


const UserRestaurant = () => {
    
    return (
        <>
       <RestaurantContainer>
        <RestaurantTitle>RESTAURANTS</RestaurantTitle>
        <RestaurantName>Laurentio-Gelato Store</RestaurantName>
        <RestaurantDescriptionContainer>
            <RestaurantDescription>Lorem ipsum dolor sit amet, et legere populo quodsi sea. Nec quodsi albucius eu, simul soleat accusata te sea. Vix maluisset sententiae et, eam an salutatus consectetuer, ludus partiendo te ius. Vivendum convenire pro in. Cum impedit honestatis eu.</RestaurantDescription>
        </RestaurantDescriptionContainer>
       </RestaurantContainer>
       <CreateRestaurantButton>Create Restaurant</CreateRestaurantButton>
       </>
    )
}

export default UserRestaurant;