import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from './Colors';

export default KeypadButtons = ( {onPress, buttons} ) => {
    return (
        <View style={styles.container}>
            {
                buttons.map((row, index) => (
                    <View key={index} style={styles.contRow}>
                        {
                            row.map((col, index) => (
                                <TouchableOpacity 
                                    key={index}
                                    accessibilityRole={'button'}
                                    onPress={() => onPress(col)}
                                    style={styles.contCol}>
                                        <Text style={styles.text}>{col}</Text>
                                    
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    contRow:{
        flexDirection: 'row',
        flex: 1,
    },
    contCol:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.lighter,
        borderWidth: 1,
        borderColor: Colors.white,
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        color: Colors.black,
        fontFamily: 'Helvetica-Light',
    }
})