import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { TransactionProps } from "./types";

const TransectionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = () => {
    return (
        <TransectionRow>
            <LeftView></LeftView>
            <RightView></RightView>
        </TransectionRow>
    );
};

export default TransactionItem;
