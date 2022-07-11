import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {FooterContainer, SocialContainer, AboutUs, TextLinks,FooterSocialImage,Space, CopyrightContainer, CopyrightText} from '../../styles/footer';
//////// Logos and Icons
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import GooglePlus from "../../assets/googleplus.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const toAbout = () => {
        navigate("/about");
    }
    const toBlog = () =>{
        navigate("/blog");
    }
    const toPress = () =>{
        navigate("/Press")
    }

    const toAndroid = () => {
        window.open("https://play.google.com/store/apps?hl=de_CH&gl=US", '_blank').focus()
    }
    const toApple= () =>{
        window.open("https://www.apple.com/ch-de/store", '_blank').focus()
    }
    const toFacebook = () => {
        window.open("https://www.facebook.com/", '_blank').focus()
    }
    const toTwitter= () =>{
        window.open("https://twitter.com/", '_blank').focus()
    }
    const toGooglePlus = () => {
        window.open("https://hangouts.google.com/?hl=de", '_blank').focus()
    }
    const toInstagram = () =>{
        window.open("https://www.instagram.com/", '_blank').focus()
    }
    return (
        <FooterContainer>
            <SocialContainer>
                <AboutUs onClick={toAbout}>About Us</AboutUs>
                <TextLinks onClick={toPress}>Press</TextLinks>
                <TextLinks onClick={toBlog}>Blog</TextLinks>
                <TextLinks onClick={toApple}>iOS</TextLinks>
                <TextLinks onClick={toAndroid}>Android</TextLinks>
                <Space></Space>
                <FooterSocialImage> <img onClick={toFacebook} src={Facebook}/></FooterSocialImage>
                <FooterSocialImage> <img onClick={toTwitter}src={Twitter}/></FooterSocialImage>
                <FooterSocialImage> <img onClick={toGooglePlus} src={GooglePlus}/></FooterSocialImage>
                <FooterSocialImage> <img onClick={toInstagram} src={Instagram}/></FooterSocialImage>
            </SocialContainer>
            <CopyrightContainer>
                <CopyrightText>
                    © Copyright Luna 2022
                </CopyrightText>
            </CopyrightContainer>
        </FooterContainer>
    )
}

export default Footer;