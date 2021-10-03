import React from "react";
import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";

import { Box, BoxFull, SafeAreaFull } from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { H1, TextRegular } from "../../components/Title";

// import { Container } from './styles';

const Login = () => (
  <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 40,
      paddingHorizontal: 30,
    }}
  >
    <Box mt="20" mb={20}>
      <H1>Ultimos adicionados</H1>
    </Box>

    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box
          height="150"
          width="250"
          mr="10"
          border={0.5}
          borderRadius={10}
          p={2}
        >
          <Text>Card</Text>
        </Box>

        <Box
          height="150"
          width="250"
          mr="10"
          border={0.5}
          borderRadius={10}
          p={2}
        >
          <Text>Card</Text>
        </Box>

        <Box
          height="150"
          width="250"
          mr="10"
          border={0.5}
          borderRadius={10}
          p={2}
        >
          <Text>Card</Text>
        </Box>
      </ScrollView>
    </Box>

    <Box mt="20">
      <Divider
        style={{
          borderWidth: 0.5,
        }}
      />
    </Box>

    <Box>
      <Box
        bg="red"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="20"
      >
        <H1>Mais vistos</H1>
        <TextRegular>Ver mais...</TextRegular>
      </Box>

      <Box bg="pink" height="100%"></Box>
    </Box>
  </SafeAreaView>
);

export default Login;
