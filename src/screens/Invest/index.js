import React from "react";
import { View, Image } from "react-native";
import { Box } from "../../components/Spacing";
import { H1, TextLow, TextRegular } from "../../components/Title";
import { Colors } from "../../contants";

// import { Container } from './styles';

const Invest = () => {
  return (
    <Box p={20}>
      <Box mt={20} height="50%" width="100%">
        <H1 color={Colors.primary}> Lello My Home</H1>
        <Image
          style={{
            height: "100%",
            width: "100%",
          }}
          resizeMode="contain"
          source={require("../../img/rent.png")}
        />
      </Box>
      <Box mt={40}>
        <TextRegular>Valorização do ativo desde 18/09/2019</TextRegular>
      </Box>
      <Box mt={20}>
        <H1 color={Colors.primary}>Valor atual: R$ 128.000,00</H1>
      </Box>

      <Box mt={20}>
        <TextRegular>Rentabilidade Lello</TextRegular>
      </Box>
      <Box mt={20}>
        <TextLow>pré fixado</TextLow>
        <H1 color={Colors.primary}>a.a 1.2%</H1>
      </Box>

      <Box mt={20}>
        <TextRegular color={Colors.secondary}>
          A rentabiliade segue normas da CVM
        </TextRegular>
      </Box>
    </Box>
  );
};

export default Invest;
