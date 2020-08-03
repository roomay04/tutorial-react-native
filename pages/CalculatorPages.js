import React, { useState, useEffect } from 'react';
import KeypadButton from '../components/KeypadButton';
import { View, StyleSheet } from 'react-native'

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState(0);

    const onPressNumber = function (text) {
        setResultText(text)
    }

    return (
        <View style={styles.container}>
            <KeypadButton onPress={onPressNumber} textButton={1} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
})