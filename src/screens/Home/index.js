import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";

import {
  Box,
  BoxFull,
  BoxTouchable,
  SafeAreaFull,
} from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { H1, TextRegular } from "../../components/Title";
import { houses } from "./houses";
import { FontAwesome5 } from "@expo/vector-icons";
import { initialHouses } from "./initialHouses";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
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
          {initialHouses.map((house) => (
            <Box
              key={house.id}
              height="150"
              width="250"
              mr="10"
              border={0.5}
              borderRadius={10}
              onPress={() => navigation.navigate("Details", { house })}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                }}
                resizeMode="cover"
                source={house.img}
              />
            </Box>
          ))}
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
          <Box
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {houses.map((house) => (
              <BoxTouchable
                key={house.id}
                height="120"
                width={
                  house.id === 3 || house.id === 6 || house.id === 9
                    ? "100%"
                    : "46%"
                }
                mt="20"
                borderRadius={10}
                style={{
                  zIndex: 1,
                }}
                onPress={() => navigation.navigate("Details", { house })}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                  source={house.img}
                />

                <Box
                  bg="#000"
                  style={{
                    position: "absolute",
                    top: 10,
                    opacity: 0.7,
                    marginLeft: "2%",
                    paddingHorizontal: 5,
                  }}
                >
                  <TextRegular
                    style={{
                      color: "#fff",
                      zIndex: 5,
                      fontSize: 12,
                    }}
                  >
                    {house.title}
                  </TextRegular>
                </Box>

                <Box
                  style={{
                    position: "absolute",
                    right: 5,
                    bottom: 5,
                    flexDirection: "row",
                    width: 45,
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    opacity: 0.7,
                  }}
                >
                  <TextRegular style={{ color: "#000", fontSize: 12 }}>
                    {house.likes}
                  </TextRegular>
                  <FontAwesome5 name="heart" size={18} color="#F05454" />
                </Box>

                <Box
                  style={{
                    position: "absolute",
                    left: 5,
                    bottom: 5,
                    flexDirection: "row",
                    width: 45,
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    opacity: 0.7,
                  }}
                >
                  <TextRegular style={{ color: "#000", fontSize: 12 }}>
                    {house.views}
                  </TextRegular>
                  <FontAwesome5 name="eye" size={18} color="black" />
                </Box>
              </BoxTouchable>
            ))}
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
