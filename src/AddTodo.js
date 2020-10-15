import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/actions/todos';

const AddTodo = (props) => {
    const [text, setText] = useState('');

    const handleChange = (text) => {
        if(text != '') setText(text);
    };

    const handleSubmit = () => {
        const newTodo = {
            id: Date.now().toString(),
            title: text
        };

        props.addTodo(newTodo);
        setText('');
    };

    return (
        <View style={StyleSheet.compose(styles.block)}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={text => handleChange(text)}
                />

            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={handleSubmit}>
                <View accessibilityRole = 'button'>
                    <Text style={styles.buttonText}>
                        add
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row'
    },
    input: {
        width: '80%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 19,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    button: {
        width: '20%'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 10
    }
});

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addNewTodo(todo))
    };
};

export default connect(null, mapDispatchToProps) (AddTodo);