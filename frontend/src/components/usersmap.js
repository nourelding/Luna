import React from 'react';
import useFetch from '../useFetch.js';
import {RestaurantBox} from '../styles/bestratedrestaurants.js'
import {Image,NameBox, TopBox, P, P2,BottomBox}  from "../styles/reviewsmap.js"
// import TestPic from "../assets/london-restaurant.jpeg";
import {Bio,Box,Span} from "../styles/usersMap.js"
import {useState} from 'react';
import '../styles/usermap.css'



const UsersMap = () => {
    const {data,isPending, error} = useFetch('https://luna.propulsion-learn.ch/backend/api/users/list/'); //custom hook to fetch data
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
            {isReadMore ? text.slice(0, 50) : text}
            <Span onClick={toggleReadMore}>
                {isReadMore ? "...read more" : " show less"}
            </Span>
        </p>
        );
    };
    return ( 
        
        <RestaurantBox>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && data.map(data => (
            <div className={ isExpanded ? 'expand': 'users' }key={data.id}>
                <TopBox>
                    <Image src='https://www.hot-dinners.com/images/stories/features/2020/setlunches/aquashard.jpg'></Image>
                    <NameBox>
                        <P>{data.first_name} {data.last_name[0]}.</P>
                        {<P2>6 Reviews in total</P2>}
                    </NameBox>
                </TopBox>
                <BottomBox>
                    <Bio>
                        <ReadMore>
                            {data.description}
                        </ReadMore>
                    </Bio>
                </BottomBox>
            </div>
        ))}
    </RestaurantBox>
    );
}

export default UsersMap