import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import { styles, darkTheme, lightTheme } from './style/todo-list';
import DateTimePicker from "react-native-modal-datetime-picker";

import Navbar from './Navbar';
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const TodoList = (props) => {
    const { todos, themeBool } = props;
    const basicStyle = themeBool ? lightTheme : darkTheme;

    return (
            <View style={StyleSheet.compose(styles.container)}>
                <Navbar title='Todo list'/>
                <View >
                    <AddTodo/>
                    <View style={StyleSheet.compose(styles.todosWrap)}>
                        { todos.map(todo => {
                            return <Todo key={todo.id} todo={todo}/>
                        })
                        }
                    </View>
                </View>
            </View>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.stateReducer.todos,
        themeBool: state.stateReducer.theme
    };
};

export default connect(mapStateToProps) (TodoList);