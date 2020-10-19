import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import { styles, todoTitleBlock } from './style/todo-list';

export const TodoTitle = (props) => {
    const { todo, onDelete, changeForm, styleTheme } = props;


    return (
        <View style={StyleSheet.compose(styleTheme.basic, todoTitleBlock.wrap)}>
            <TouchableWithoutFeedback
                onPress={changeForm}>
                <Text style={StyleSheet.compose(styleTheme.basic, todoTitleBlock.text)}>
                    {todo.title}
                </Text>
            </TouchableWithoutFeedback>

            <TouchableHighlight
                style={StyleSheet.compose(styleTheme.basic)}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => onDelete(todo.id)}>
                <View accessibilityRole = 'button'>
                    <Text style={StyleSheet.compose(styleTheme.button, todoTitleBlock.button)}>
                        &#10006;
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};