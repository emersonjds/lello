import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Box } from "../../components/Spacing";
import { TextRegular } from "../../components/Title";

import { Colors } from "../../contants";

// import { Container } from './styles';

const LelloDetails = () => {
  const navigation = useNavigation();

  return (
    <Box p={20}>
      <Box>
        <TextRegular color={Colors.primary}>
          O Lello My Home é uma forma de voce poupar seu dinheiro para que no
          futuro possamos te ajudar a conquistar a tao sonhada casa propria.
        </TextRegular>
      </Box>

      <Box mt="20">
        <TextRegular color={Colors.secondary}>
          Acompanhamos toda sua jornada rumo a realização desse sonho, e voce
          pode conferir como esta indo esse investimento aqui pelo app também.
        </TextRegular>
      </Box>

      <Box mt="20">
        <TextRegular color={Colors.primary}>
          Alem disso, nosso sistema identifica quando voce está proximo de
          utilizar este valor como entrada para o seu ape dos sonhos ou sua
          casa.
        </TextRegular>
      </Box>

      <Box mt="20">
        <TextRegular color={Colors.secondary}>
          Que tal caminharmos juntos nessa jornada , cuidamos do seu dinheiro
          como ele deve ser cuidado e ainda rentabilizamos ele, enquanto voce se
          preocupa somente em pagar normalmente o aluguel.
        </TextRegular>
      </Box>

      <Box mt="20">
        <TouchableOpacity
          style={{
            height: 52,
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("UserForm");
          }}
        >
          <TextRegular color={Colors.quaternary}>
            Bora realizar o sonho
          </TextRegular>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default LelloDetails;
