import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../components/Colors'
import KeypadButtons from '../components/KeypadButtons';

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState(0);

    const onPress = function (text) {
        setResultText(text);
        switch (text){
            case buttons[0][1]:

        }
    }

    const buttons = [
        ['CLEAR', 'DEL'],
        ['7', '8', '9', '÷'],
        ['4', '5', '6', 'x'],
        ['1', '2', '3', '+'],
        ['.', '0', '=','-']
      ]

    return (
        <View style={styles.container}>
            <View style={styles.contHistory}><Text>History</Text></View>
            <View style={styles.contResult}> 
                <Text style={styles.resultText}>{resultText}</Text>
            </View>

            <View style={styles.contButtons}>
                <KeypadButtons onPress={onPress} buttons={buttons} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    contHistory: {
        flex: 2
    },
    contResult: {
        flex: 1,
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