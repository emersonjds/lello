import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";

import { Box, BoxFull, SafeAreaFull } from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { H1, TextRegular } from "../../components/Title";

import * as Animatable from "react-native-animatable";
import MapView from "react-native-maps";
import { customMapStyleRetro } from "./customMapStyle";

import HouseMarkerImage from "../../../assets/house-marker-v2.png";
import { Colors } from "../../contants";

const MapViewer = () => {
  const housePositions = [
    {
      title: "lello house 1",
      latitude: -23.596138109192314,
      longitude: -46.6453128976586,
    },
    {
      title: "lello house 2",
      latitude: -23.581877338612347,
      longitude: -46.648497207297225,
    },
    {
      title: "lello house 3",
      latitude: -23.595532470916933,
      longitude: -46.648797613866904,
    },
    {
      title: "lello house 4",
      latitude: -23.58771398033771,
      longitude: -46.63888419706742,
    },
    {
      title: "lello house 5",
      latitude: -23.585511504521076,
      longitude: -46.647656068902116,
    },
    {
      title: "lello house 6",
      latitude: -23.58242797627887,
      longitude: -46.64657460525127,
    },
    {
      title: "lello house 7",
      latitude: -23.580555798788055,
      longitude: -46.63906444100924,
    },
    {
      title: "lello house 8",
      latitude: -23.578628529234138,
      longitude: -46.654084769574446,
    },
    {
      title: "lello house 9",
      latitude: -23.574718838627042,
      longitude: -46.64693509321604,
    },
  ];

  useEffect(() => {});

  const handleMarkerItem = (houseItem) => {
    console.log("handleMarkerItem INVOKED", houseItem);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <MapView
        style={styles.map}
        showsUserLocation={true}
        loadingEnabled={true}
        // customMapStyle={customMapStyleRetro}
        region={{
          latitude: -23.586117189055603,
          longitude: -46.64411127137988,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }}
      >
        {housePositions.map((house) => {
          return (
            <MapView.Marker
              coordinate={{
                latitude: house.latitude,
                longitude: house.longitude,
              }}
              title={house.title}
              // description={'Condominio Lelo 1'}
              onPress={() => handleMarkerItem(house)}
            >
              <Animatable.Image
                source={HouseMarkerImage}
                style={{ width: 40, height: 40 }}
                resizeMode={"contain"}
                animation={"bounce"}
              />
            </MapView.Marker>
          );
        })}
      </MapView>

      <Animatable.View
        style={{
          position: "absolute",
          backgroundColor: "white",
          borderWidth: 0.2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 300,
          width: "95%",
          alignSelf: "center",
          bottom: 0,
          padding: 10,
        }}
        animation={"bounceInUp"}
        duration={1000}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {housePositions.map((house) => {
            return (
              <TouchableOpacity
                style={{
                  paddingVertical: 20,
                  marginHorizontal: 10,
                  borderBottomWidth: 0.2,
                }}
                onPress={() => handleMarkerItem(house)}
              >
                <TextRegular color={Colors.secondary}>
                  {house.title}
                </TextRegular>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapViewer;
