import React, { useState } from 'react';
import { Text, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, TextInput, Alert, TouchableWithoutFeedback } from 'react-native';
import { SCREENS } from '../../constants'
import { colors } from '../../common/colors'
import Button from "../../components/Button"
import { Otp as otpApi } from '../../utils/OtpApi';

export default function OtpLogin({ route, navigation }) {
    const { number = '99999 99999' } = route.params;
    const [loading, setLoading] = useState(false)
    const [logInData, setLogInData] = useState({ otp: '' })
    const [error, setError] = useState({ otp: '' })

    const handleLogin = async () => {
        let { otp = '1234' } = logInData
        const errorObj = {}
        let isValid = true;
        if (!otp) {
            errorObj.email = "Enter Phone Number!"
            isValid = false
        }

        if (!isValid) {
            setError(errorObj)
        } else {
            setError(errorObj)
            setLoading(true)
            console.log(number)
            const data = {
                number: number,
                otp: otp.toString()
            }
            console.log(data)
            otpApi(data).then((response) => {
                const { token } = response;
                setLoading(true);
                if (token) {
                    console.log(logInData)
                    console.log(token)
                } else {
                    Alert.alert("Enter Valid Otp")
                    setLoading(false);
                }
            }).catch((err) => console.warn(err))
        }
    }
    return (
        <View style={styles.root}>
            <View style={{ flexDirection: 'row', marginBottom: 0 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginRight: 15 }}>{number}</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                    <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>edit</Text>
                </TouchableWithoutFeedback>
            </View>
            <Text numberOfLines={2} style={{ fontSize: 30, width: '40%', marginBottom: 12, fontWeight: 'bold' }}>Enter The OTP</Text>
            <TextInput
                placeholder="OTP"
                keyboardType="phone-pad"
                style={[styles.textStyle, { width: '20%', marginBottom: 15 }]}
                value={logInData.otp}
                onChangeText={(text) => setLogInData({ otp: text })}
            />
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