import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../components/Colors'
import KeypadButtons from '../components/KeypadButtons';

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState(0);

    const onPress = function (text) {
        setResultText(text);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.contResult}> 
                <Text style={styles.resultText}>{resultText}</Text>
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
        alignItems: 'flex-end',
    },
    contButtons: {
        flex: 7,
        alignItems: 'stretch',
        backgroundColor: Colors.lighter,
    },
    resultText:{
        fontSize: 50,
    }
})