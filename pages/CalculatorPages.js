import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../components/Colors'
import KeypadButtons from '../components/KeypadButtons';

export default CalculatorPages = () => {
    let [resultText, setResultText] = useState('0');
    let [history, setHistory] = useState([]);

    const buttons = [
        ['CLEAR', 'DEL', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '+'],
        ['1', '2', '3','-'],
        ['.', '0', '=']
      ]

    const onPress = function (value) {
        if (!isNaN(value) || value == '.'){
            concatToResult(value)
        }else{
            switch (value){
                case buttons[0][0]:
                    setResultText('0');
                    break;
                case buttons[0][1]:
                    replaceLastIndex("");
                    break;
                case buttons[4][2]:
                    evaluate(value);
                    break;
                default:
                    let strLastChar = resultText.slice(-1);
                    if(isNaN(strLastChar)){
                        replaceLastIndex(value);
                    }
                    else{
                        concatToResult(value);
                    }
            }
        }
    }

    const convertToMathExpression = (value) => {
        let strTemp = value.replace(new RegExp(escapeRegExp(buttons[1][3]), 'g'), '/');
        strTemp = strTemp.replace(new RegExp(escapeRegExp(buttons[2][3]), 'g'), '*');
        return strTemp;
    }

    const escapeRegExp = (str) => {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    const concatToResult = (value) => {
        if (resultText == '0'){
            setResultText(value);
        }else{
            setResultText(resultText+value);
        }
    }

    const replaceLastIndex = (value) => {
        var str1 = resultText.replace(/.$/,value)
        setResultText(str1)
    }

    const evaluate = () => {
        var strCurOutput = resultText;
        if(isNaN(strCurOutput)){
            let dEval = eval(convertToMathExpression(resultText));
    
            let aHistory = [...history];
            aHistory.push([strCurOutput, dEval])
    
            setResultText(''+dEval);
            setHistory(aHistory);
        }
    }

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