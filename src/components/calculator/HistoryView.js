import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import Colors from './Colors';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { historyReset, fetchHistory } from '../../reducers/HistorySlice';

export default HistoryView = () => {
    const dispatch = useDispatch();
    let history = useSelector(state => state.history.data)
    let historyStatus = useSelector(state => state.history.status)
    let error = useSelector(state => state.error)

    useEffect( () => {
        if (historyStatus === 'idle'){
            dispatch(fetchHistory())
        }
    },[historyStatus, dispatch])
    
    let content = <FlatList
    data={history}
    renderItem={({item, index}) => 
        <View style={styles.historyItem}>
            <Text key={index} style={styles.operationText}>{item.operation}</Text>
            <Text style={styles.resultText}>= {item.result}</Text>
        </View>
    }
    keyExtractor={(item, index) => index.toString()}
  />

    if (historyStatus === 'loading'){
        content = <Text style={styles.loader}>Loading...</Text>
    } else if (historyStatus === 'succeeded'){
        content = <FlatList
        data={history}
        renderItem={({item, index}) => 
            <View style={styles.historyItem}>
                <Text key={index} style={styles.operationText}>{item.operation}</Text>
                <Text style={styles.resultText}>= {item.result}</Text>
            </View>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    } else if (historyStatus === 'failed') {
        content = <Text>{error}</Text>
      }

    return (
        <View style={styles.container}>
            {content}
              
            <View style={styles.resetButton}>
                <Button onPress={ () => dispatch(historyReset())} title="Reset" />
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        position: 'relative',
        top: 0,
        left: 0,
    },
    historyItem:{
        height: 50,
        borderTopWidth: 1,
        borderTopColor: Colors.dark,
        marginRight: 15,
        marginLeft: 15,
        padding: 5,
    },
    operationText:{
        flex:1,
        fontSize: 18,
        alignSelf: 'flex-end',
    },
    resultText:{
        flex:1,
        fontSize: 18,
        alignSelf: 'flex-end',
        color: Colors.light,
    },
    resetButton:{
        position: "absolute",
        top: 5,
        left: 5,
    },
    loader: {
        alignSelf: 'center'   
    }
})