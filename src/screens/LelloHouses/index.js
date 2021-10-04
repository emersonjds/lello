import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { Box } from "../../components/Spacing";
import { TextRegular, TextLow } from "../../components/Title";
import { Colors } from "../../contants";

const imoveis = [
  {
    id: 1,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 83,
    valor: "235.000,00",
    img: require("../../img/1.jpeg"),
  },
  {
    id: 2,
    title: "Morada do Sol",
    lancamento: "Abril 2024",
    lello_mar: 72,
    valor: "180.000,00",
    img: require("../../img/2.jpeg"),
  },
  {
    id: 4,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 69,
    valor: "235.000,00",
    img: require("../../img/4.jpeg"),
  },
  {
    id: 5,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 83,
    valor: "215.000,00",
    img: require("../../img/5.jpeg"),
  },
  {
    id: 6,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 83,
    valor: "215.000,00",
    img: require("../../img/6.jpeg"),
  },
  {
    id: 7,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 72,
    valor: "215.000,00",
    img: require("../../img/7.jpeg"),
  },
  {
    id: 8,
    title: "Morada Verde",
    lancamento: "Abril 2025",
    lello_mar: 71,
    valor: "215.000,00",
    img: require("../../img/9.jpeg"),
  },
];

const LelloHouses = () => {
  return (
    <Box p={20}>
      <Box color={Colors.primary}>
        <TextRegular>Lançamentos Lello até o fim do seu contrato</TextRegular>
      </Box>

      <TextRegular color={Colors.primary}>Legenda</TextRegular>

      <TextLow>* Lello MAR : Meu ativo representa</TextLow>

      <ScrollView>
        {imoveis.map((imovel) => (
          <Box width="100%" height="110" flexDirection="row" mt={20}>
            <Box width="30%">
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                }}
                resizeMode="cover"
                source={imovel.img}
              />
            </Box>
            <Box width="70%" p={1}>
              <Text>Lello MAR : {imovel.lello_mar} % desse montante</Text>

              <Text>Lançamento: {imovel.lancamento}</Text>
              <Text>Valor: {imovel.valor}</Text>
            </Box>
          </Box>
        ))}

        {/* 
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
        </Box> */}
      </ScrollView>
    </Box>
  );
};

export default LelloHouses;
