import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from './Colors'

export default KeypadButton = ({textButton, onPress}) => {
    return (<TouchableOpacity 
        accessibilityRole={'button'}
        onPress={() => onPress(textButton)}
        style={styles.container}>
            <Text style={styles.text}>{textButton}</Text>
        
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container:{
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.lighter,
        borderWidth: 1,
        borderColor: Colors.dark,
    },
    text:{
        fontSize: 30,
        color: Colors.black,
    }
})