import React, {useRef, useState} from "react";
import { 
    View, 
    Text, 
    SafeAreaView, 
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Modal
} from "react-native";

import { Box, BoxFull, SafeAreaFull } from "../../components/Spacing";
import { Divider } from "react-native-paper";
import { H1, TextRegular } from "../../components/Title";

import * as Animatable from 'react-native-animatable'
import * as ImagePicker from 'expo-image-picker';

const EnvioDocumentos = () => {

    
    const [modalVisible, setModalVisible] = useState(false)
    const [docType, setDocType] = useState('')
    const [imageRG, setImageRG] = useState(null);
    const [imageCPF, setImageCPF] = useState(null);
    const [imageHolerite, setImageHolerite] = useState(null);

    const CardItem = props => {

        return (
            <TouchableOpacity
                onPress={props.onPress}
            >
                <View style={styles.documentItemContainer}>
                    <Text style={styles.documentItemText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const Button = (props) => {
        return (
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    width: '70%',
                    height: 40,
                    marginVertical: 20,
                    borderRadius: 10,
                    borderColor: 'gray',
                    justifyContent: 'center'
                }}
                onPress={props.onPress}
            >
                <Text style={{textAlign: 'center'}}>{props.title}</Text>
            </TouchableOpacity>
        )
    }

    const handleCamera = async () => {
        
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if(status === 'granted'){

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
          
              console.log(result);
          
              if (!result.cancelled) {
                setImage(result.uri);
              }
        }

        handleCloseModal()
    }

    const handleLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if(status === 'granted'){

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
          
              console.log(result);
          
              if (!result.cancelled) {
                switch (docType) {
                    case 'RG':
                        setImageRG(result.uri)
                        break;

                    case 'CPF':
                        setImageCPF(result.uri)
                        break;

                    case 'Holerite':
                        setImageHolerite(result.uri)
                        break;
                
                    default:
                        break;
                }
              }
        }

        handleCloseModal()
    }

    const handleOpenModal = (docType) => {
        setDocType(docType)
        setModalVisible(true)
    }
    
    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return (
        <SafeAreaView
            style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingTop: 40,
            paddingHorizontal: 30,
            }}
        >
            <Box mt="20" mb={20}>
                <H1>Envio de documentos</H1>
                
                <View
                    style={styles.listDocuments}
                >

                    <CardItem text={'RG'} onPress={() => handleOpenModal('RG')}/>
                    <CardItem text={'CPF'} onPress={() => handleOpenModal('CPF')}/>
                    <CardItem text={'Holerite'} onPress={() => handleOpenModal('Holerite')}/>

                </View>
                

            </Box>

            <Modal
                visible={modalVisible}
                // animationType={'slide'}
                onRequestClose={handleCloseModal}
                transparent={true}
            >
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0, 0.5)',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}

                >
                    <Animatable.View
                        style={{
                            width: '80%',
                            height: 300,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        animation={'slideInUp'}
                        duration={500}
                    >
                        <Button title={'Tirar Foto'} onPress={handleCamera}/>
                        <Button title={'Selecionar do Album de Fotos'} onPress={handleLibrary}/>
                    </Animatable.View>
                </View>
            </Modal>

            {imageRG && <Animatable.Image 
                source={{ uri: imageRG}} 
                resizeMode={'cover'}
                style={{
                    width: '80%',
                    height: 150,
                    alignSelf: 'center',
                    marginVertical: 20,
                    borderRadius: 10,
                    
                }}
                animation={'pulse'}
            />}

            {imageCPF && <Animatable.Image 
                source={{ uri: imageCPF}} 
                resizeMode={'cover'}
                style={{
                    width: '80%',
                    height: 150,
                    alignSelf: 'center',
                    marginVertical: 20,
                    borderRadius: 10
                }}
                animation={'bounce'}
            />}

            {imageHolerite && <Animatable.Image 
                source={{ uri: imageHolerite}} 
                resizeMode={'cover'}
                style={{
                    width: '80%',
                    height: 150,
                    alignSelf: 'center',
                    marginVertical: 20,
                    borderRadius: 10
                }}
                animation={'bounce'}
            />}

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    listDocuments: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20
    },
    documentItemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    documentItemText: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default EnvioDocumentos
