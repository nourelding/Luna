import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    //align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction:column;
    background:  #F2F2F2;
    font-family: 'Helvetica';


`
export const CoverImg = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction:column; 
    justify-items:flex-end;   
    background: rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        
    }
`
export const Info = styled.div`
width:45%;
height:20%;
display:flex;
flex-direction:column;
position: absolute;
margin-left: 23%;
margin-top: 6%;
gap:4%;
font-size:13px;
color: white;
z-index:1;
p {
    margin: 0px
}
`
export const InnerBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;  
    //flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    //border: 3px solid black;
`
export const Profile = styled.div`
    width: 200px;
    height: 441px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    position: relative;
    top: -90px;
    //border: 2px solid pink;


    div {
        width: 200px;
        height: 180px;

        img {
            width: 200px;
            height: 210px;
            justify-content: center;
            margin-left: 0px;
            background: #FFFFFF;
            

        }
    }
    
    img{
        height: 27px;
        width: 25px;  
        align-items:center;      
        position: absolute;
        margin: -7px -45px;
        
        
    }
    button {
        width:200px;
        height:50px;
        justify-content: flex-start;
        border: none;
        border-bottom: 2px solid lightgrey;
        margin: 0px;
        padding-top: 5px;
        background: #FFFFFF;
        font-size: 15px;

        &:hover{
            cursor: pointer;
            border-left: 2px solid #E47D31;
            background: rgba(0, 0, 0, 0.0837013)

        }
    }

    span {
        width: 200px;
        height: 70px;
        margin-top: 50px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid lightgrey;
        background: #F2F2F2;
        
    }

`
export const MiddleContainer = styled.div`
border: 2px solid black;
width:45%;
display:flex;
flex-direction:column;

`
export const Reviews = styled.div`
    //border: 2px solid blue;
    width: 100%;
    height: 58%;
    display: flex;
    flex-direction:column;
    background: #FFFFFF;
    overflow:auto;

    p{
        margin: 5px;
    }

    div{
        display:flex;
        flex-direction:row;
        gap: 10px;
    }
`
export const Comments = styled.div`
    width: 100%;
    height: 58%;
    display: flex;
    flex-direction:column;
    background: #FFFFFF;
    overflow:auto;

`
export const RestNameDate = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    h5 {
        margin-top:6px;
    }
    `

export const ReviewText = styled.p`
    padding: 25px 0px;
`

export const Stars = styled.p`
    width:20px;
    height:20px;    
    color:gold;
`
export const AboutUser = styled.div`
    width: 20%;
    display:flex;
    flex-direction: column;    
    
    p{
        margin: 5px 5px;
    }
`

