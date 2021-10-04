import React, {useRef, useState, useEffect} from "react";
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
    FlatList
} from "react-native";

import { Box, BoxFull, SafeAreaFull } from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { H1, TextRegular } from "../../components/Title";

import * as Animatable from 'react-native-animatable'
import MapView from 'react-native-maps';
import {customMapStyleRetro} from './customMapStyle'

import HouseMarkerImage from '../../../assets/house-marker-v2.png'
import { Rating } from 'react-native-ratings'
import Home from "../Home";
import { useNavigation } from "@react-navigation/core";

const MapViewer = () => {
    const navigation = useNavigation()

    const housePositions = [
        {
            title: "lello house 1",
            latitude: -23.596138109192314, 
            longitude: -46.6453128976586,
            description: 'Casa com 2 quartos e 1 garagem (Prox. Mercado)',
            bairro: 'Vila Mariana - SP',
            rate: 3
        },
        {
            title: 'lello house 2',
            latitude: -23.581877338612347, 
            longitude: -46.648497207297225,
            description: 'Apto Cond. com 2 quartos, 1 banheiro, 1 cozinha',
            bairro: 'Vila Mariana - SP',
            rate: 5
        },
        {
            title: 'lello house 3',
            latitude: -23.595532470916933,
            longitude: -46.648797613866904,
            description: 'Apto Cond. Suite com 2 quartos com banheiro',
            bairro: 'Vila Mariana - SP',
            rate: 4
        },
        {
            title: 'lello house 4',
            latitude: -23.58771398033771,
            longitude: -46.63888419706742,
            description: 'Apto Cond. com 1 quartos, 1 banheiro, 1 cozinha (Prox. Metro)',
            bairro: 'Vila Mariana - SP',
            rate: 3
        },
        {
            title: 'lello house 5',
            latitude: -23.585511504521076, 
            longitude: -46.647656068902116,
            description: 'Apto Cond. com 2 quartos, 1 banheiro, 1 cozinha',
            bairro: 'Vila Mariana - SP',
            rate: 4
        },
        {
            title: 'lello house 6',
            latitude: -23.58242797627887, 
            longitude: -46.64657460525127,
            description: 'Apto Cond. com 1 quartos, 1 banheiro, 1 cozinha (Prox. Metro)',
            bairro: 'Vila Mariana - SP',
            rate: 5
        },
        {
            title: 'lello house 7',
            latitude: -23.580555798788055, 
            longitude: -46.63906444100924,
            description: 'Casa com 2 quartos, 1 banheiro (Prox. Farmacia, Shopping)',
            bairro: 'Vila Mariana - SP',
            rate: 4
        },
        {
            title: 'lello house 8',
            latitude: -23.578628529234138, 
            longitude: -46.654084769574446,
            description: 'Casa com 2 quartos, 1 banheiro (Prox. Farmacia, Shopping)',
            bairro: 'Vila Mariana - SP',
            rate: 4
        },{
            title: 'lello house 9',
            latitude: -23.574718838627042,
            longitude:  -46.64693509321604,
            description: 'Casa com 2 quartos, 1 banheiro (Prox. Parque, Padaria)',
            bairro: 'Vila Mariana - SP',
            rate: 5
        }
    ]

    useEffect(() => {
        
    })

    const handleMarkerItem = (houseItem) => {
        console.log('handleMarkerItem INVOKED', houseItem)
        navigation.navigate('Details', {
            title: 'lello house 9',
            latitude: -23.574718838627042,
            longitude:  -46.64693509321604,
            description: 'Casa com 2 quartos, 1 banheiro (Prox. Parque, Padaria)',
            bairro: 'Vila Mariana - SP',
            rate: 5
        })
    }

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
                customMapStyle={customMapStyleRetro}
                region={{
                    latitude: -23.586117189055603, 
                    longitude: -46.64411127137988,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.025
                }}
            >
                {housePositions.map(house => {
                    return <MapView.Marker 
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
                            style={{width: 40, height: 40}}
                            resizeMode={'contain'}
                            animation={'bounce'}
                        />
                    </MapView.Marker>
                })}
                
            </MapView>

            <Animatable.View 
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderWidth: 0.2,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 300,
                    width: '95%',
                    alignSelf: 'center',
                    bottom: 0,
                    padding: 10
                }}
                animation={'bounceInUp'}
                duration={1000}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                {housePositions.map(house => {
                    return <TouchableOpacity 
                        style={{
                            paddingVertical: 20,
                            marginHorizontal: 10,
                            borderBottomWidth: 0.2,
                        }}
                        onPress={() => handleMarkerItem(house)}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text>{house.title}</Text>
                            <Rating
                                ratingCount={house.rate}
                                imageSize={12}
                                showRating
                                ratingColor='gray'
                                ratingBackgroundColor='#c8c7c8'
                                ratingTextColor={'gray'}
                            />
                        </View>
                    <Text style={{fontSize: 12, paddingTop: 5, color: 'gray'}}>{house.description}</Text>
                    </TouchableOpacity>
                })}
                </ScrollView>
                    
             </Animatable.View>    
            

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
})

export default MapViewer