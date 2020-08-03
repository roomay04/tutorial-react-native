import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from './Colors';
import axios from 'axios';

export default HistoryView = () => {
    let [history, setHistory] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(
                'https://run.mocky.io/v3/e2f08553-f21e-4c08-8386-2d51d03a019c'
            )

            setHistory(result.data);
        }
        fetchData();
    },[])

    return (
        <ScrollView style={styles.container}>
            {
                history.map((item, index) => (
                    <View key={index} style={styles.historyItem}>
                        <Text style={styles.operationText}>{item.operation}</Text>
                        <Text style={styles.resultText}>={item.result}</Text>
                    </View>)
                )
            }
        </ScrollView>
    )
}

styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    historyItem:{
        height: 50,
        borderTopWidth: 2,
        borderTopColor: Colors.dark,
        marginRight: 10,
        marginLeft: 10,
        padding: 5,
    },
    operationText:{
        flex:1,
        fontSize: 13,
        alignSelf: 'flex-end',
    },
    resultText:{
        flex:1,
        fontSize: 18,
        alignSelf: 'flex-end',
    }
})