import React from "react";
import { View, Text, ScrollView } from "react-native";

import { Box } from "../../components/Spacing";
import { TextRegular, TextLow } from "../../components/Title";
import { Colors } from "../../contants";

// import { Container } from './styles';

const LelloHouses = () => {
  return (
    <Box p={20}>
      <Box color={Colors.primary}>
        <TextRegular>Lançamentos Lello até o fim do seu contrato</TextRegular>
      </Box>

      <TextRegular color={Colors.primary}>Legenda</TextRegular>

      <TextLow>* Lello MAR : Meu ativo representa</TextLow>

      <ScrollView>
        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Details</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Details</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Condominio : Morada Verde</Text>
            <Text>Lançamento: 21/12/2022 </Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Condomini</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Details</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Details</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>

        <Box width="100%" height="110" bg="blue" flexDirection="row" mt={20}>
          <Box bg="yellow" width="30%">
            <Text>Image</Text>
          </Box>
          <Box bg="orange" width="70%">
            <Text>Lello MAR : 10% desse montante</Text>
            <Text>Details</Text>
            <Text>Details</Text>
            <Text>Details</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default LelloHouses;
