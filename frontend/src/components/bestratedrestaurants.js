import React from 'react'
import OrangeLine from '../assets/Line.png';
import star from '../assets/star.svg';
import useFetch from '../useFetch.js';
import {RestaurantContainer, Box, Img, H2, H3, SmallBox, Star, H4, RestImg} from '../styles/bestratedrestaurants.js'

const RatedRestaurants = () => {
    const {data,isPending, error} = useFetch('https://luna.propulsion-learn.ch/backend/api/restaurants/'); //custom hook to fetch data
    return (
        <RestaurantContainer>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && data.map(data => (
                <Box className="bestratedrestaurants" key={data.id}>
                    <Img src={OrangeLine}></Img>
                    <H2>{data.name}</H2>
                    <H3>{data.street}</H3>
                    <H3>{data.city}</H3>
                    <H3>{data.zip}</H3>
                    <H3>{data.country}</H3>
                    <SmallBox>
                        <Star src={star}></Star>
                        <Star src={star}></Star>
                        <Star src={star}></Star>    
                        <Star src={star}></Star>
                        <Star src={star}></Star>
                        <H4></H4>
                    </SmallBox>
                    <RestImg src='https://www.hot-dinners.com/images/stories/features/2020/setlunches/aquashard.jpg'></RestImg>
                </Box>
            ))}
        </RestaurantContainer>
    );
}

export default RatedRestaurants;