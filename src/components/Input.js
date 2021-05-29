import React from 'react';
import { Input as InputComponent } from 'react-native-elements';

export default function Input(props) {
    return (
        <InputComponent
            style={{ padding: 10, marginTop: 10 }}
            inputStyle={{ color: '#9E9E9E' }}
            inputContainerStyle={{ borderColor: "#9E9E9E", }}
            {...props}
        />
    )
}