import React from "react";
import Navbar from '../../components/NavBar'
import RestaurantHero from '../../components/RestaurantHero'
import Footer from "../../components/Footer";
import HeaderTop from "../../components/headerTop";
import {AiOutlineStar} from 'react-icons/ai'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  MainmWriteNewReview,
  HeaderTopWrapper,
  Content,
  ContentTop,
  ContentBody,
  ContentBottom,
  Rating,
  RatingTitle,
  ContentInput,
  SubmetReview,
  ContentWrapper,
  FormRequired,


} from '../../styles/WriteNewReview'


const WriteNewReview = () => {
  const [content , setContent] = useState("")
  const [rating , setRating] = useState("2")
  const [status , setStatus] = useState("")
  const navigate = useNavigate()
  

  const token = window.localStorage.getItem('token')
  const url = 'http://127.0.0.1:8000/backend/api/reviews/new/2/'

  const submitReview = (event) => {
    event.preventDefault();
    const body = {
      rating: rating,
      content: content,
    };
    const fetchConfig = {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`,
        }),
        body: JSON.stringify(body),
    };
    console.log(body)
    // console.log(body)
    fetch(url,fetchConfig)
    .then((response) => {
        console.log(response)
        setStatus(response.status)
    return response.json();
    })
    if (status === 201){
    navigate("/home")
    }
    else if(status === 405) {
      console.log("bad request 405")
    }
    
}

const starOne = (event) => {
  setRating('1')
}
const starTwo = (event) => {
  setRating('2')
}
const starThree = (event) => {
  setRating('3')
}
const starFour = (event) => {
  setRating('4')
}
const starFive = (event) => {
  setRating('5')
}



  return ( 
    <MainmWriteNewReview>
    <Navbar />
    <HeaderTopWrapper>
      <HeaderTop />
    </HeaderTopWrapper>
    <Content>
      <ContentWrapper>
        <ContentTop>
          <Rating>
          <AiOutlineStar onClick={starOne} size="2.8rem" style={{color: "#F0F0F0"}} /><AiOutlineStar onClick={starTwo} size="2.8rem" style={{color: "#F0F0F0"}} /><AiOutlineStar onClick={starThree} size="2.8rem"  style={{color: "#F0F0F0"}} /><AiOutlineStar onClick={starFour} size="2.8rem" style={{color: "#F0F0F0"}}  /><AiOutlineStar onClick={starFive} size="2.8rem" style={{color: "#F0F0F0"}}   />
          </Rating>
          <RatingTitle>Select your rating</RatingTitle>
        </ContentTop>
        <ContentBody>
          <ContentInput onChange = {event => setContent(event.target.value) } id='rating' placeholder="Your review helps others learn about great local businesses." required type="textarea"/>
          <ContentBottom>
            <FormRequired>This field is required</FormRequired>
          <SubmetReview onClick={submitReview}>SUBMIT</SubmetReview>
        </ContentBottom>
        </ContentBody>

      </ContentWrapper>
    </Content>
    <Footer />
    </MainmWriteNewReview>
   );
}
 
export default WriteNewReview;