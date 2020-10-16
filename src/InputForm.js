import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import { styles, todoInputBlock } from './style/todo-list';

export const InputForm = (props) => {
    const { todo, onEdit, changeForm, styleTheme } = props;

    const [text, setText] = useState(todo.title);

    const handleChange = (text) => {
        setText(text);
    };

    const handleSubmit = () => {
        if (text !== '' && text !== todo.title) onEdit(text);
        changeForm();
    };

    return (
        <View style={todoInputBlock.wrap}>
            <TextInput
                style={StyleSheet.compose(styleTheme.basic, styles.input)}
                value={text}
                autoFocus={true}
                onChangeText={text => handleChange(text)}
            />
            <View accessibilityRole = 'button'
                  style={styles.buttonWrap}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => handleSubmit()}>
                    <Text style={StyleSheet.compose(styleTheme.button, todoInputBlock.button)}>
                        &#10003;
                    </Text>
            </TouchableHighlight>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={changeForm}>

                    <Text style={StyleSheet.compose(styleTheme.button, todoInputBlock.button)}>
                        &#10006;
                    </Text>

            </TouchableHighlight>
            </View>
         </View>
    )
};
//
// const styles = StyleSheet.create({
//
//
//     buttonText: {
//         // color: '#fff',
//         fontSize: 15,
//         fontWeight: '700',
//         paddingVertical: 5,
//         paddingHorizontal: 10
//     }
// });