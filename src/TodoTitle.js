import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';

export const TodoTitle = (props) => {
const { todo, onDelete, changeForm } = props;

    return (
        <View style={styles.todo}>
            <TouchableWithoutFeedback
                onPress={changeForm}>
                <Text style={styles.todoTitle}>
                    {todo.title}
                </Text>
            </TouchableWithoutFeedback>

            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => onDelete(todo.id)}>
                <View accessibilityRole = 'button'>
                    <Text style={styles.buttonText}>
                        &#10006;
                    </Text>
                </View>
            </TouchableHighlight>
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
        fontWeight: '700'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});