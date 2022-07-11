import styled from "styled-components";

export const RestaurantContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: white;
`
export const RestaurantTitle = styled.div`
    display: flex;
    color: #303030;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4%;
`
export const RestaurantName = styled(RestaurantTitle)`
    font-weight: 400;
`
export const RestaurantDescription = styled(RestaurantTitle)`
    font-weight: 300;
    font-size: 16px;
`
export const RestaurantDescriptionContainer = styled(RestaurantContainer)`
    text-align: justify;
    width:100%;
`
export const CreateRestaurantButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    width: 200px;
    height: 56px;
    border-radius: 28px;
    background-color: #E47D31;
    color: white;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 1%;
    margin-bottom: 309px;
    margin-left: 35%;
    cursor: pointer;
`