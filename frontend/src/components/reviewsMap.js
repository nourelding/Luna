import React from 'react'
import  useFetchAuthorized from '../useFetchAuthorization.js';
import {RestaurantBox, Box, Img,SmallBox, Star, H4, RestImg} from '../styles/bestratedrestaurants.js'
import ThumbsUp from '../assets/test.png'
import {Image,NameBox, TopBox, P, P2, BottomBox, P3,P4, LikeCommentButton,WhiteLine, TextClick,Thumb,H2, H3,P5}  from "../styles/reviewsmap.js"
// import TestPic from "../assets/london-restaurant.jpeg";
import {useState} from 'react';
import '../styles/reviewsmap.css'
const ReviewMap = () => {
    const [isExpanded,setIsExpanded] = useState(true)
    const [isReadMore, setIsReadMore] = useState(true);

    const ReadMore = ({ children }) => {
        const text = children;
        const toggleReadMore = () => {
            setIsExpanded(!isExpanded)
            setIsReadMore(!isReadMore)
            
        };
        return (
            <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore}>
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
        );
    };



    const {data,isPending, error} =  useFetchAuthorized('https://luna.propulsion-learn.ch/backend/api/reviews/'); //custom hook to fetch data
    return ( 
        
        <RestaurantBox>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && data.map(data => (
            <Box className={ isExpanded ? 'expand': 'users' } key={data.id}>
                <TopBox>
                    <Image src='https://www.hot-dinners.com/images/stories/features/2020/setlunches/aquashard.jpg'></Image>
                    <NameBox>
                        <P>{data.user.first_name} .</P>
                        <P2>6 Reviews in total</P2> 
                    </NameBox>
                </TopBox>
                <BottomBox>
                    <P3>{data.restaurant.name}</P3>
                    <ReadMore>
                    {data.content}
                    </ReadMore>
                    <LikeCommentButton>
                        <Thumb src={ThumbsUp} alt=""/>
                        <TextClick>Like 63</TextClick>
                        <WhiteLine></WhiteLine>
                        <TextClick>Comment 23</TextClick>
                    </LikeCommentButton>
                    <H2>Latest Comments</H2>
                    <H3>Randy Orton</H3>
                    <P5>You suck!</P5>
                    <H3>Rocky Balboa</H3>
                    <P5>You mug!</P5>
                </BottomBox>
            </Box>
        ))}
    </RestaurantBox>
    );
}

export default ReviewMap