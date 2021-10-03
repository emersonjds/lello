import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Box } from "../../components/Spacing";
import { TextRegular } from "../../components/Title";

// import { Container } from './styles';

const Details = ({ house }) => {
  return (
    <Box pt={20} pr={20} pl={20}>
      <Box>
        <TextRegular color="#F05454">Details</TextRegular>
        <TextRegular color="#30475E">Financiamento facilitado</TextRegular>
      </Box>

      <Box>
        <ScrollView></ScrollView>
      </Box>

      <Box>
        <TextRegular color="#F05454">Sobre</TextRegular>
        <Text>
          Localizado próximos a metros e a 2 shoppins esse novo emprrendimento
          da Construtora Odebretch é o seu sonho de casa para começar bem o ano
          de 2021. Com lançamento previsto para 2024, o prédio conta com : spa,
          academia, garagem privativa ...
        </Text>
      </Box>

      {/* Mapa */}
      <Box height="40%" width="100%" bg="blue"></Box>
    </Box>
  );
};

export default Details;
