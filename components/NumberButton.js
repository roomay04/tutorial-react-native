import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default KeypadButton = ({textButton, onPressAction}) => {
    <TouchableOpacity 
        accessibilityRole={'button'}
        onPress={onPressAction}
        style={styles.container}>
            <Text style={styles.text}>{textButton}</Text>
        
    </TouchableOpacity>
}

styles = StyleSheet.create({
    container:{
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text:{
        fontSize: 18,
    }
})