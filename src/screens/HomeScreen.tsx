import React, { FunctionComponent } from "react";
import { Container } from "../components/shared";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import mastercard from "../../assets/images/MasterCard.png";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
    const data = [
        {
            id: 1,
            accountNo: "4324544343",
            balance: 43232,
            alias: "Work Debit",
            logo: mastercard
        },
        {
            id: 1,
            accountNo: "4324544397",
            balance: 43232,
            alias: "Work Debit",
            logo: mastercard
        }
    ];

    return (
        <HomeContainer>
            <CardSection data={data} />
        </HomeContainer>
    );
};

export default HomeScreen;
