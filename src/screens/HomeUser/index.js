import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box } from "../../components/Spacing";
import { TextRegular } from "../../components/Title";
import { Colors } from "../../contants";

// import { Container } from './styles';

const HomeUser = () => {
  return (
    <Box p={20}>
      <Box mt={30}>
        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextRegular color={Colors.quaternary}>
            Segunda via de boletos
          </TextRegular>
        </TouchableOpacity>
      </Box>

      <Box mt={30}>
        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: Colors.tertiary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextRegular color={Colors.quaternary}>
            Acompanhar meus investimentos
          </TextRegular>
        </TouchableOpacity>
      </Box>

      <Box mt={30}>
        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextRegular color={Colors.quaternary}>Imoveis Lello</TextRegular>
        </TouchableOpacity>
      </Box>
      <Box mt={30}>
        <TouchableOpacity
          style={{
            height: 52,
            width: "100%",
            borderRadius: 10,
            backgroundColor: Colors.tertiary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextRegular color={Colors.quaternary}>Serviços</TextRegular>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default HomeUser;
