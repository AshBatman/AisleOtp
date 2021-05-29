import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import Button from "../../components/Button"
import { login as loginApi } from '../../utils/LoginApi';
import { colors } from '../../common/colors'
import { useNavigation } from '@react-navigation/core';
import { SCREENS } from '../../constants'
export default function Login({ route }) {
    const { load = false } = route.params;
    const [logInData, setLogInData] = useState({ number: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ number: '' })
    const navigation = useNavigation();

    const handleLogin = async () => {
        const { number = '9999999999' } = logInData
        const concatNum = '+91' + number.toString();
        const errorObj = {}
        let isValid = true;
        if (!number) {
            errorObj.email = "Enter Phone Number!"
            isValid = false
        }

        if (!isValid) {
            setError(errorObj)
        } else {
            setError(errorObj)
            setLoading(true)
            const data = {
                number: concatNum
            }
            loginApi(data).then((response) => {
                const { status } = response;
                setLoading(true);
                if (status) {
                    console.log(status)
                    navigation.navigate(SCREENS.OTP, data)
                } else {
                    Alert.alert("Enter Valid Number")
                    setLoading(false);
                }
            }).catch((err) => console.warn(err))
        }
    }

    useEffect(() => {
        setLoading(load);
    })

    return (
        <View style={styles.root}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Get OTP</Text>
            <Text numberOfLines={2} style={{ fontSize: 30, width: '60%', marginBottom: 12, fontWeight: 'bold' }}>Enter Your Phone Number</Text>
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                <TextInput
                    defaultValue={'+91'}
                    placeholder="Enter Phone"
                    keyboardType="phone-pad"
                    style={styles.textStyle}

                />
                <TextInput
                    placeholder="Enter Phone"
                    keyboardType="phone-pad"
                    style={[styles.textStyle, { width: '40%' }]}
                    value={logInData.number}
                    onChangeText={(text) => setLogInData({ number: text })}
                />
            </View>
            <Button
                title="Continue"
                onPress={handleLogin}
                loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: '5%',
        marginTop: '20%'
    },
    loginBtn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: colors.MAIN,
        width: 100,
        elevation: 6
    },
    textStyle: {
        borderRadius: 6,
        borderColor: colors.DESCRIPTION_GREY,
        borderWidth: 1,
        width: '14%',
        height: 42,
        textAlign: 'center',
        marginRight: 8,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }
})