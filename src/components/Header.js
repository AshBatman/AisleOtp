import { useNavigation } from '@react-navigation/core';
import { colors } from '../common/colors';
import { SCREENS } from '../constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(props) {
    const color = props.color || props.tintColor || "#000023"
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <View style={styles.iconContainer}>
                {props.children !== SCREENS.HOME && <TouchableOpacity onPress={() => navigation.goBack()}>
                </TouchableOpacity>}
            </View>
            <View style={styles.HeadingRoot}>
                <Text style={[styles.heading, { color: colors.text }, { color }]}>{props.children}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CART)}>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 0
    },
    iconContainer: {
        justifyContent: 'center',
    },
    HeadingRoot: {
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Segoe UI',
    },
});
