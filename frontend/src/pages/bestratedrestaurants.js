import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import OrangeLine from '../assets/Line.png';
import star from '../assets/star.svg';
import restaurant from '../assets/london-restaurant.jpeg'
import useFetch from '../useFetch.js'

const RestaurantContainer = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:space-evenly;
border:1px solid black;
height:412px;
`
const Img = styled.img`
width:271px;
height:8px;
padding-bottom:7px;
`
const Box = styled.div`
margin-top:20px;
width:271px;
height:360px;
border-radius:3px;
background-color: #FFFFFF;
border-radius:3px;
`
const H2 = styled.h2`
margin-left:10px;
font:Helvetica;
font-weight:400;
font-size:20px;
font-style:normal;
color:#4C4C4C;
`
const H3 = styled.h3`
margin-left:10px;
font:Helvetica;
font-weight:400;
font-size:18px;
font-style:normal;
color:#4C4C4C;
`
const Star = styled.img`
width:27px;
height:27px;
color:#F8E71C;

`
const H4 = styled.h4`
padding-left:25px;
font: Helvetica;
font-size: 20px;
font-weight: 300;
color:#4C4C4C;

`
const SmallBox = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
height:50px;
`
const RestImg = styled.img`
height:195px;
width:271px;
`
const RatedRestaurants = () => {
    const {data,isPending, error} = useFetch('http://localhost:8000/restaurants'); //custom hook to fetch data
    return (
        <RestaurantContainer>
            {error &&<div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(data => (
                <Box className="bestratedrestaurants" key={data.id}>
                <Img src={OrangeLine}></Img>
                <H2>{data.RestaurantName}</H2>
                <H3>{data.address}</H3>
                <SmallBox>
                <Star src={star}></Star>
                <Star src={star}></Star>
                <Star src={star}></Star>    
                <Star src={star}></Star>
                <Star src={star}></Star>
                <H4>{data.ratings}</H4>
                </SmallBox>
                <RestImg src={data.image}></RestImg>
                </Box>
            ))}
        </RestaurantContainer>
    );
}

export default RatedRestaurants;