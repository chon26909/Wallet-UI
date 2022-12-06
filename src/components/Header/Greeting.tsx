import React, { FunctionComponent } from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const StyledView = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 22
                    },
                    props.mainTextStyles
                ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                        color: colors.secondary,
                        fontSize: 14
                    },
                    props.mainTextStyles
                ]}
            >
                {props.subText}
            </SmallText>
        </StyledView>
    );
};

export default Greeting;
