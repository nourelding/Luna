import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {ContentContainer, RegistrationTitle, InputContainer, InputLeft, InputRight, VerificationInput, OrangeLine, VerificationButton} from '../../styles/registrationMail';
//////// Logos and Icons
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const RegistrationVerification = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [location,setLocation] = useState();
    const [password,setPassword] = useState();
    const [passwordRepeat,setPasswordRepeat] = useState();
    const [code,setCode] = useState();

    const updateCode = (event) =>{
        setCode(event.target.value);
    }
    const updateEmail = (event) =>{
        setEmail(event.target.value);
    }
    const updateUsername = (event) =>{
        setUsername(event.target.value);
    }
    const updateLocation = (event) =>{
        setLocation(event.target.value);
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value);
    }
    const updatePasswordRepeat = (event) =>{
        setPasswordRepeat(event.target.value);
    }
    const completeRegistration = (event) => {
        event.preventDefault();
        const url = "https://luna.propulsion-learn.ch/backend/api/registration/validate/";
        const data = {
            email:email,
            username:username,
            validation_code:code,
            password:password,
            location:location
        };
        console.log(data);
        if (password != passwordRepeat) {
            alert("Your passwords do not match.")
            return
        }
        const fetchConfig = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
            if (response.status == 200) {
            navigate("/login")
            }
            else {
            alert("Please try again")
            }
        return response.json();
        })
    }

    return (
        <ContentContainer>
            <RegistrationTitle>VERIFICATION</RegistrationTitle>
            <OrangeLine/>
            <InputContainer>
                <InputLeft>
                    <VerificationInput onChange={updateEmail} type="email" placeholder="E-Mail address"/>
                    <VerificationInput onChange={updateUsername} type="text" placeholder="Username"/>
                    <VerificationInput onChange={updatePassword} type="password" placeholder="Password"/>
                </InputLeft>
                <InputRight>
                    <VerificationInput onChange={updateCode} type="text" placeholder="Verification code"/>
                    <VerificationInput onChange={updateLocation} type="text" placeholder="Location"/>
                    <VerificationInput onChange={updatePasswordRepeat} type="password" placeholder="Password repeat"/>
                </InputRight>
            </InputContainer>
            <VerificationButton onClick={completeRegistration}>Finish registration</VerificationButton>
        </ContentContainer>

    )
}

export default RegistrationVerification;