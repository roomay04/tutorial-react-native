import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../components/Colors'
import KeypadButtons from '../components/KeypadButtons';

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState(0);

    const onPress = function (text) {
        setResultText(text);
    }

    useEffect(() => {
        alert(resultText);
    })

    return (
        <View style={styles.container}>
            <View style={styles.contResult}> 
            </View>

            <View style={styles.contButtons}>
                <KeypadButtons onPress={onPress} />
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