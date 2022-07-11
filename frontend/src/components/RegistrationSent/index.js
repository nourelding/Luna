import React from "react";
import styled from "styled-components";
//////// Imported Styles
import {ContentContainer, RegistrationTitle, OrangeLine, MailText} from '../../styles/registrationMail';
//////// Logos and Icons
import { useNavigate } from "react-router-dom";

const RegistrationSent = () => {
    const navigate = useNavigate();
    setTimeout(function() {navigate("/verification")}, 3000)
    return (
        <ContentContainer>
            <RegistrationTitle>REGISTRATION</RegistrationTitle>
            <OrangeLine/>
            <MailText>
                Thanks for your registration. 
                Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.
            </MailText>
        </ContentContainer>

    )
}

export default RegistrationSent;