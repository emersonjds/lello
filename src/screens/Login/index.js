import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";

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
      paddingHorizontal: 20,
    }}
  >
    <Box mt="20" mb={20}>
      <H1>Ultimos adicionados</H1>
    </Box>

    <Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box height="150" width="250" mr="10" border={0.5} borderRadius={10}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
            source={require("../../img/lf-1.jpeg")}
          />
        </Box>

        <Box height="150" width="250" mr="10" border={0.5} borderRadius={10}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
            source={require("../../img/lf-2.jpeg")}
          />
        </Box>

        <Box height="150" width="250" mr="10" border={0.5} borderRadius={10}>
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 10,
            }}
            resizeMode="cover"
            source={require("../../img/lf-3.jpeg")}
          />
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
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="20"
      >
        <H1>Mais vistos</H1>
        <TextRegular>Ver mais...</TextRegular>
      </Box>

      <ScrollView
        style={{
          paddingTop: 10,
          paddingHorizontal: 20,
          showVerticalScrollIndicator: false,
          showsHorizontalScrollIndicator: false,
        }}
      >
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          <Box height="120" width="46%" bg="orange" mt="20" borderRadius={10}>
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-1.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-3.jpeg")}
            />
          </Box>

          <Box height="120" width="100%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-4.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-5.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-6.jpeg")}
            />
          </Box>

          <Box height="120" width="100%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-7.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-8.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-9.jpeg")}
            />
          </Box>

          <Box height="120" width="100%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-10.jpeg")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Image
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
              resizeMode="cover"
              source={require("../../img/loft-11.png")}
            />
          </Box>

          <Box height="120" width="46%" bg="orange" mt="20" borderRadius="10">
            <Text>Imovel</Text>
          </Box>

          <Box height="120" width="100%" bg="orange" mt="20" borderRadius="10">
            <Text>Imovel</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  </SafeAreaView>
);

export default Login;
