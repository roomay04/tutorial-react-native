import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../components/Colors'
import KeypadButtons from '../components/KeypadButtons';
import HistoryView from '../components/HistoryView';
import { historyAdded } from '../reducers/HistorySlice'
import { useDispatch } from 'react-redux';

const initialResult = '0'

export default CalculatorPages = () => {
    const dispatch = useDispatch();
    let [resultText, setResultText] = useState(initialResult);
    let [onRestart, setOnRestart] = useState(true);
    
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
        }
        else{
            switch (value){
                case buttons[0][0]:
                    setResultText(initialResult);
                    break;
                case buttons[0][1]:
                    replaceLastIndex("");
                    break;
                case buttons[4][2]:
                    evaluate(value);
                    setOnRestart(true);
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
        let strTemp = value.replace(new RegExp(escapeRegExp(buttons[0][2]), 'g'), '/');
        strTemp = strTemp.replace(new RegExp(escapeRegExp(buttons[1][3]), 'g'), '*');
        return strTemp;
    }

    const escapeRegExp = (str) => {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    const concatToResult = (value) => {
        if (onRestart){
            if (!isNaN(value)){
                setResultText(value);
            }else{
                setResultText(resultText+value);
            }
            setOnRestart(false);
        }else if (resultText == initialResult){
            if (value == buttons[0][2] || value == buttons[1][3]){
                alert("Can't start with operations!");
            }else{
                setResultText(value);
            }
        }else{
            setResultText(resultText+value);
        }
    }

    const replaceLastIndex = (value) => {
        var str1 = resultText.replace(/.$/,value)
        if (str1 != ""){
            setResultText(str1);
        }else{
            setResultText(initialResult);
        }
    }

    const evaluate = () => {
        var strCurOutput = resultText;
        if(isNaN(strCurOutput)){
            let dEval = eval(convertToMathExpression(resultText));
    
            let history = {
                operation: strCurOutput,
                result: dEval
            }
    
            setResultText(''+dEval);
            dispatch(historyAdded(history))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contHistory}><HistoryView /></View>
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
        flex: 3
    },
    contResult: {
        flex: 2,
        backgroundColor: Colors.white,
        padding:10,
        borderTopWidth:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    contButtons: {
        flex: 6,
        alignItems: 'stretch',
        backgroundColor: Colors.lighter,
    },
    resultText:{
        fontSize: 35,
        fontFamily: 'Helvetica-Light',
    }
})