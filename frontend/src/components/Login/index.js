import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {ContentContainer, RegistrationTitle, LoginInput, OrangeLine, LoginButton} from '../../styles/registrationMail';
//////// Logos and Icons
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate= useNavigate();
    
    const updateEmail = (event) =>{
        setEmail(event.target.value);
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value);
    }
    const login = (event) =>{
        event.preventDefault();
        const url = "https://luna.propulsion-learn.ch/backend/api/token/"
        const data = {
            email:email,
            password:password,
        };
        const fetchConfig = {
            method:"POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.access === undefined) {
                alert("Please try again")
            }else{
                localStorage.setItem('token',data.access);
                navigate("/")
            }; 
        }); 
    }
    return (
        <ContentContainer>
            <RegistrationTitle>LOGIN</RegistrationTitle>
            <OrangeLine/>
                <LoginInput onChange={updateEmail} type="text" placeholder="Email"/>
                <LoginInput onChange={updatePassword} type="password" placeholder="Password"/>
            <LoginButton onClick={login}>Login</LoginButton>
        </ContentContainer>

    )
}

export default Login;