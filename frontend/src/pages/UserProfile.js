import React from "react";
import {
    MainContainer,
    CoverImg, 
    InnerBox, 
    AboutUser, 
    Profile, 
    Reviews, 
    Stars, 
    ReviewText, 
    Info, 
    RestNameDate, 
    MiddleContainer,
    Comments } from "../styles/UserProfile";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CoverPic from "../assets/zuerich-skyline-dfed49e9-08c0-4115-bc68-b089bdbaf426.png";
import Star from "../assets/star.svg";
import BubbleChat from "../assets/comment.svg";
import House from "../assets/restaurant.svg";
import Pencil from "../assets/edit.svg";
import ProfilePic from "../assets/113008567-6ebdcb80-9177-11eb-91bd-6863196d9cd3.png";
import { useState } from "react";
import EditUserProfile from "../components/EditUserProfile";
import UserRestaurant from "../components/UserRestaurant/index";
import useFetchAuthorized from "../useFetchAuthorization";

const UserProfile = () => {
    const {data, isPending, error} = useFetchAuthorized("https://luna.propulsion-learn.ch/backend/api/me");
    const {data:review, isP, err} = useFetchAuthorized("https://luna.propulsion-learn.ch/backend/api/reviews/user/1"); 
    const[pageMode, setpageMode] = useState('reviews');
    //functionality for comments still missing
    return (
        <MainContainer>
            <NavBar/> 
            
            <CoverImg>
                <img src={CoverPic} alt="Cover Picture"/>

                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {console.log(data)}
                {data ?
                <Info>
                    <p><b>{data.username}</b></p>
                    <p>{data.city}</p>
                    <p>{data.views}</p>
                    <p>{data.comments}</p>
                </Info>:null}
            </CoverImg>
            
            <InnerBox>
            {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {data ?
                <Profile>
                    { console.log(pageMode)}
                        <div><img src={ProfilePic}/></div>
                        <span>{data.username}'s profile</span>
                        <button onClick={()=>setpageMode('reviews')}><img src={Star}/>Reviews</button> {/*onclick for each button*/}
                        <button onClick={()=>setpageMode('comments')}><img src={BubbleChat}/>Comments</button>
                        <button onClick={()=>setpageMode('restaurants')}><img src={House}/>Restaurants</button>
                        <button onClick={()=>setpageMode('edit')}><img src={Pencil}/>Edit Profile</button>
                    
                </Profile>:null}     
                <MiddleContainer>                    
                {err && <div>{err}</div>}
                {isP && <div>Loading...</div>}
                {console.log(review)}
                {pageMode == 'reviews' &&  review ?//.map(data => (  
                    <Reviews>
                        <h3>REVIEWS</h3>
                        <RestNameDate>
                            <p>{review[0].restaurant['name']}</p>
                            <h5>{review[0].created}</h5>
                        </RestNameDate>
                        <div>
                            <Stars><img src={Star}/></Stars>
                            <Stars><img src={Star}/></Stars>
                            <Stars><img src={Star}/></Stars>    
                            <Stars><img src={Star}/></Stars>
                            <Stars><img src={Star}/></Stars>
                        </div>
                        <ReviewText>{review[0].content}</ReviewText>
                    </Reviews>:null}
                    {pageMode == 'comments' && data ?
                        <Comments>
                            <h3>COMMENTS</h3>
                            <RestNameDate>
                                <p>Review 1</p>
                                <h5>{data.reviewdate}</h5>
                            </RestNameDate>
                            <p>reviewtext</p>                            
                        </Comments>:null}
                    {pageMode == 'restaurants' && data ?    
                        <UserRestaurant/>:null}
                    {pageMode == 'edit' && data ?    
                        <EditUserProfile/>:null}                        
                </MiddleContainer>    
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {console.log(data)}
                {data ? // && data.map(data => (                
                <AboutUser>               
                    <h4>ABOUT USER</h4>
                    <p><b>Location</b></p>
                    <p>{data.location}</p>
                    <p><b>Luna Member since</b></p>
                    <p>{data.date_joined}</p>
                    <p><b>Things I love</b></p>
                    <p>{data.loved_things}</p>
                    <p><b>Description</b></p>
                    <p>{data.description}</p>
                </AboutUser>:null}
            </InnerBox>
            <Footer/>
        </MainContainer>
    )
}

export default UserProfile;

