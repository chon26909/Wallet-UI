import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { Ionicons } from "@expo/vector-icons";
import { TransectionSectionProps } from "./types";

const TransectionSectionBackground = styled.View`
    width: 100%;
    padding: 5px 25px;
    flex: 2;
`;

const TransectionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransectionList = styled.View`
    width: 100%;
`;

const TransectionSection: FunctionComponent<TransectionSectionProps> = () => {
    return (
        <TransectionSectionBackground>
            <TransectionRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 20, color: colors.secondary }}>
                    Transection
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons />
                </SmallText>
            </TransectionRow>
        </TransectionSectionBackground>
    );
};

export default TransectionSection;
