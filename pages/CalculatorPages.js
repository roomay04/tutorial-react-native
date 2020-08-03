import React, { useState, useEffect } from 'react';
import KeypadButton from '../components/KeypadButton';
import { View, StyleSheet } from 'react-native';
import Colors from '../components/Colors'

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState(0);

    const onPressNumber = function (text) {
        setResultText(text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.contResult}> 
            </View>

            <View style={styles.contButtons}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    contResult: {
        flex: 3,
        backgroundColor: Colors.light,
        justifyContent: 'flex-end',
    },
    contButtons: {
        flex: 7,
        alignItems: 'stretch',
        backgroundColor: Colors.lighter,
    }
})