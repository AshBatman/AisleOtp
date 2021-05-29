import React, { useEffect } from 'react';
import { Text } from 'react-native-elements';
import Storage from '../../common/Storage';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Button from "../../components/Button";
import { BlurView as Blurred } from "@react-native-community/blur";

export default function HomePage() {

    const checkLoggedIn = async () => {
        const isLoggedIn = await Storage.getItem('isLoggedIn')
        if (isLoggedIn === "True") {
            console.log('home')
        }
    }

    useEffect(() => {
        checkLoggedIn()
    }, [])

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', textAlign: 'center' }}>Notes</Text>
                <Text style={{ fontSize: 21, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>Personal Messages for you</Text>
                <ImageBackground source={require('../../assets/images/photo_1.png')} style={styles.mainImage}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-end', display: 'flex', flex: 1, margin: 10 }}>
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Meena, 23</Text>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: '600' }}>Tap to review 50+ notes</Text>
                    </View>
                </ImageBackground>
                <View style={{ flexDirection: 'row', margin: '3%' }}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-end', display: 'flex', flex: 1 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Meena, 23</Text>
                        <Text numberOfLines={2} style={{ fontSize: 15, fontWeight: '600', color: '#9B9B9B', width: '80%' }}>Premium members can view all their likes at once</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="Upgrade"
                            onPress={() => { }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <ImageBackground source={require('../../assets/images/photo_2.png')} style={styles.blurImage}>
                            <View key={'firstImage'} style={{ alignItems: 'flex-start', justifyContent: 'flex-end', display: 'flex', flex: 1, margin: 10 }}>
                                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Teena</Text>
                            </View>
                        </ImageBackground>
                        <Blurred
                            style={styles.absolute}
                            blurType="light"
                            blurAmount={15}
                            reducedTransparencyFallbackColor="white"
                        />
                    </View>
                    <ImageBackground source={require('../../assets/images/photo_3.png')} style={styles.blurImage}>
                        <View key={'secondImage'} style={{ alignItems: 'flex-start', justifyContent: 'flex-end', display: 'flex', flex: 1, margin: 10 }}>
                            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Teena</Text>
                        </View>
                        <Blurred
                            style={styles.absolute}
                            blurType="light"
                            blurAmount={15}
                            reducedTransparencyFallbackColor="white"
                        />
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    topImage: {
        width: '100%',
        height: 200,
    },
    mainImage: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: '5%'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: '2%'
    },
    blurImage: {
        width: 160,
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        margin: '2%'
    }
})