import React from 'react'
import star from '../../assets/star.svg';
import { useNavigate } from 'react-router-dom';
import useFetchAuthorized from '../../useFetchAuthorization.js';
import {
  HeaderTopWrapper,
  HeaderContent,
  ResturantName,
  ResturantCategeory,
  ResturantReviewsWrapper,
  ResturantRate,
  ResturantReviews,
  Star,
} from '../../styles/HeaderTop'


const HeaderTop = () => {
  const {data:resturant,isPending, error} = useFetchAuthorized('http://127.1.1.1:8000/backend/api/restaurants/6/'); //custom hook to fetch data
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')
  // const token = localStorage.getItem('token')
  return ( 
    <HeaderTopWrapper>
      <HeaderContent>
      {error &&<div>{error}</div>}
            {isPending && <div>Loading...</div>}
            
            {resturant ? <>
        <ResturantName>{resturant.name}</ResturantName>
        <ResturantCategeory>{resturant.category}</ResturantCategeory>
        <ResturantReviewsWrapper>
          <ResturantRate>
            <Star src={star}></Star>
            <Star src={star}></Star>
            <Star src={star}></Star>    
            <Star src={star}></Star>
            <Star src={star}></Star>
          </ResturantRate>
          <ResturantReviews>68 reviews</ResturantReviews>
        </ResturantReviewsWrapper>
          </>  :null }

      </HeaderContent>
    </HeaderTopWrapper>
    );
}

export default HeaderTop;