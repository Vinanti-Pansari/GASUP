import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Styles from './Styles';
import Color from '../utility/colors'

const Input = (props) => {
    const { placeholder } = props;
    return (
        <View>
            {
                placeholder !== '0' &&
                <Text style={Styles.labelInput}>{placeholder}</Text>
            }

        <TextInput
            style={Styles.input}
            underlineColorAndroid="transparent"
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor={Color.PLACEHOLDER_COLOR}
            blurOnSubmit={false}
            ref={props.inputRef}
            returnKeyType="next"
            {...props}
            />
        </View>
    )
};
export default Input;