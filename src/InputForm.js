import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';

export const InputForm = (props) => {
    const { todo, onEdit, changeForm } = props;

    const [text, setText] = useState(todo.title);

    const handleChange = (text) => {
        setText(text);
    };

    const handleSubmit = () => {
        if (text !== '' && text !== todo.title) onEdit(text);
        changeForm();
    };

    return (
        <View style={styles.todo}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={text => handleChange(text)}
            />
            <View accessibilityRole = 'button' style={styles.buttonWrap}>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => handleSubmit()}>

                    <Text style={styles.buttonText}>
                        &#10003;
                    </Text>

            </TouchableHighlight>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={changeForm}>

                    <Text style={styles.buttonText}>

                        &#10006;
                    </Text>

            </TouchableHighlight>
            </View>
         </View>
    )
};

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    todoTitle: {
        width: '80%',
        fontSize: 23,
        // color: '#7e529f',
        fontWeight: '700'
    },
    buttonWrap: {
        flexDirection: 'row'
    },
    button: {
        margin: 1,
        // backgroundColor: '#8565c5'
    },
    buttonText: {
        // color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});