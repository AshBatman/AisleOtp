import { colors } from '../common/colors';
import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as Btn } from 'react-native-elements'

export default function Button(props) {
    return (
        <Btn
            titleStyle={styles.titleStyle} buttonStyle={styles.buttonStyle} {...props}
        />)
}

// buttonStyle={styles.root}
//             titleStyle={{ color: 'pink' }}
//             {...props}
//             titleProps={style={color: 'black'}}



const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#F9CB10',
        opacity: 1, color: colors.MAIN,
        shadowOpacity: 0,
        width: 100,
        borderRadius: 20,
        height: 40
    },
    titleStyle: {
        color: 'black',
        fontSize: 14
    }
});