import styled from "styled-components/native";
import { space, color, layout, flex } from "styled-system";
import { Dimensions, SafeAreaView } from "react-native";

export const Box = styled.View`
  ${space}
  ${color}
${layout}
${flex}
`;

export const BoxFull = styled.View`
  flex: 1;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export const SafeAreaFull = styled(SafeAreaView)`
  flex: 1;
`;
