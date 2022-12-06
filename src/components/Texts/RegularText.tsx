import React, { FunctionComponent } from "react";
import { TextProps } from "./types";
import styled from "styled-components/native";

import { colors } from "../colors";

const StyledText = styled.Text`
    font-size: 16px;
    color: ${colors.gray};
    text-align: left;
    font-family: Kanit-Regular;
`;

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;
