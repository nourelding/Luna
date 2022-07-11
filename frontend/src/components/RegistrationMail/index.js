import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {ContentContainer, RegistrationTitle, OrangeLine, EmailInput, RegisterButton} from '../../styles/registrationMail';
//////// Logos and Icons
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";


const RegistrationMail = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const url = "https://luna.propulsion-learn.ch/backend/api/registration/";

    const updateEmail = (event) => {
        setEmail(event.target.value);
    }
    const sendVerificationCode = (event) => {
        event.preventDefault();
        if (email.length > 0) {
        const data = {
            email: email
        };
        console.log(data);
        const fetchConfig = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
        return response.json();
        })
        const action = {
            type:"setEmail",
            payload:email
        };
        dispatch(action)
        navigate("/registrationsent")
    }else{
        alert("Please enter an email address");
    }

    }
    return (
        <ContentContainer>
            <RegistrationTitle>REGISTRATION</RegistrationTitle>
            <OrangeLine/>
            <EmailInput onClick={updateEmail} type="email"  placeholder="E-Mail address"/>
            <RegisterButton onClick={sendVerificationCode}>Register</RegisterButton>
        </ContentContainer>

    )
}

export default RegistrationMail;