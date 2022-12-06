import React, { FunctionComponent } from "react";
import { TextProps } from "./types";
import styled from "styled-components/native";

import { colors } from "../colors";

const StyledText = styled.Text`
    font-size: 36px;
    color: ${colors.gray};
    text-align: left;
    font-family: Kanit-Bold;
    line-height: 40px;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;
