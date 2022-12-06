import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import background from "../../assets/images/background.png";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-width: 100%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const BottomSection = styled.View`
    width: 100%;
    flex: 1;
    padding: 25px;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style='light' />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: "70%", marginBottom: 15 }}>Best way to track your money</BigText>
                    <SmallText textStyles={{ width: "70%", marginBottom: 15 }}>Best payment method, connects your money t oyour friends, family</SmallText>
                    <RegularButton onPress={() => {}}>Get started</RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;
