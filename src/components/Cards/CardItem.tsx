import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";

import bg from "../../../assets/images/bg-card.jpg";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import { CardProps } from "./types";
import { View } from "react-native";
import SmallText from "../Texts/SmallText";

const CardBackground = styled.ImageBackground`
    height: 100%;
    width: ${ScreenWidth * 0.8}px;
    object-fit: cover;
    background-color: ${colors.accent};
    margin-right: 20px;
    border-radius: 25px;
    overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 20px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    flex: 1;
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.Image`
    width: 300px;
    height: 40px;
    flex: 1;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => {};

    return (
        <CardBackground source={bg}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText>******{props.accountNo.slice(6, 10)}</RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText textStyles={{ marginBottom: 5, color: colors.graylight }}>
                                Total balance
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19, color: colors.graylight }}>
                                {props.balance} ฿
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;
