import React, {useRef, useState, useEffect} from "react";
import { 
    Image,
    View
} from "react-native";

import { Box, BoxFull, SafeAreaFull } from "../../components/Spacing";

import * as Animatable from 'react-native-animatable'

import Logo from '../../../assets/logo-lello.png'
import { useNavigation } from "@react-navigation/core";

const ANIMATION_DURATION = 1000

const SplashScreen = () => {

    const imageLogoRef = useRef()
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            imageLogoRef.current.swing().then(() => {
                navigation.navigate('Home')
            })
        }, ANIMATION_DURATION)

    }, [])

    return (
        <View
            style={{
                backgroundColor: 'rgb(240, 84, 84)',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Animatable.Image 
                source={Logo}
                animation={'slideInUp'}
                ref={imageLogoRef}
                duration={ANIMATION_DURATION}
            />
        </View>
    )	
}

export default SplashScreen