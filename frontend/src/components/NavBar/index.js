import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {NavContainer, NavLeftSide, NavLogoImg, NavRightSide, NavLuna, NavHome, NavSearch, NavProfile, SignUpLoginButton, TextClick, ButtonContainer, WhiteLine } from '../../styles/navBar';
//////// Logos and Icons
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const toLogin = () => {
        navigate("/login");
    }
    const toSignUp = () =>{
        navigate("/registrationmail");
    }
    const toHome = () =>{
        navigate("/")
    }
    const toSearch = () =>{
        navigate("/restaurants")
    }
    const toProfile = () =>{
        navigate("/userprofile")
    }
    return (
        <NavContainer>

            <NavLeftSide>
                <NavLuna>
                    <NavLogoImg>
                        <img onClick={toHome} src={Logo} alt="Luna Logo"/>
                    </NavLogoImg>
                </NavLuna>
            </NavLeftSide>

            <NavRightSide>
                <NavHome onClick={toHome}>
                    Home
                </NavHome>
                <NavSearch onClick={toSearch}>
                    Search
                </NavSearch>
                <NavProfile onClick={toProfile}>
                    Profile
                </NavProfile>
                <ButtonContainer>
                    <SignUpLoginButton>
                        <TextClick onClick={toSignUp}>SIGNUP</TextClick>
                        <WhiteLine></WhiteLine>
                        <TextClick onClick={toLogin}>LOGIN</TextClick>
                    </SignUpLoginButton>
                </ButtonContainer>

            </NavRightSide>

        </NavContainer>
    )
}

export default NavBar;