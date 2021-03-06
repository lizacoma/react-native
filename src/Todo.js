import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';
import { TodoTitle } from './TodoTitle';
import { InputForm } from './InputForm';
import { editTodo, deleteTodo } from "./redux/actions/todos";
import { styles, darkTheme, lightTheme } from './style/todo-list';

const Todo = (props) => {
    const { todo, editTodoAct, deleteTodoAct, themeBool } = props;
    const [toggle, setToggleOn] = useState(false);
    const basicStyle = themeBool ? lightTheme : darkTheme;
    const dateAndTime = todo.date.toString();

    const onChange = () => {
        setToggleOn(pre => !pre);
    };

    const onEdit = (text) => {
        const newTodo = {
            ...todo,
            title: text
        };
        editTodoAct(newTodo);
    };

    return (
        <View style={StyleSheet.compose(basicStyle.basic, styles.todo)}>
            {!toggle ?
                <TodoTitle
                    changeForm = {onChange}
                    todo = {todo}
                    onDelete = {deleteTodoAct}
                    theme={themeBool}
                    styleTheme={basicStyle}/> :
                <InputForm
                    changeForm = {onChange}
                    todo = {todo}
                    onEdit = {onEdit}
                    theme={themeBool}
                    styleTheme={basicStyle}/>
            }
                    <View style={StyleSheet.compose({paddingBottom: 10})}>
                        <Text style={StyleSheet.compose(basicStyle.basic, styles.todoDate)}>
                            date: {dateAndTime.substring(0, 15)}
                        </Text>
                        <Text style={StyleSheet.compose(basicStyle.basic, styles.todoDate)}>
                            time: {dateAndTime.substring(16, 21)}
                        </Text>
                    </View>
        </View>
    )
};


const mapStateToProps = state => {
    return {
        themeBool: state.stateReducer.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editTodoAct: todo => dispatch(editTodo(todo)),
        deleteTodoAct: id => dispatch(deleteTodo(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Todo);