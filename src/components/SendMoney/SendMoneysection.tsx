import React, { FunctionComponent, useRef } from "react";
import { SendMoneySectionProps } from "./types";
import BottomSheet from "reanimated-bottom-sheet";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const SendMoneySectionBackground = styled.View`
    width: 100%;
    padding-top: 15px;
    background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px;
`;

const SendMoneyList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height: 80%;
    padding: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneysection: FunctionComponent<SendMoneySectionProps> = (props) => {
    const sheetRef = useRef<BottomSheet>(null);

    const renderContent = () => {
        return (
            <SendMoneySectionBackground>
                <SendMoneyRow style={{ marginBottom: 25 }}>
                    <RegularText textStyles={{ fontSize: 20, color: colors.secondary }}>
                        Send money to
                    </RegularText>
                    <TextButton onPress={() => alert("Add")}>
                        <SmallText textStyles={{ fontWeight: "bold", color: colors.tertiary }}>
                            {" "}
                            +Add
                        </SmallText>
                    </TextButton>
                </SendMoneyRow>
                <SendMoneyList
                    data={props.data}
                    contentContainerStyle={{ alignItems: "flex-start" }}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={}
                />
            </SendMoneySectionBackground>
        );
    };

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[240, 85]}
            borderRadius={25}
            initialSnap={1}
            enabledContentTapInteraction={false}
            renderContent={renderContent}
        />
    );
};

export default SendMoneysection;
