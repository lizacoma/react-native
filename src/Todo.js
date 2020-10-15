import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';
import { TodoTitle } from './TodoTitle';
import { InputForm } from './InputForm';
import { editTodo, deleteTodo } from "./redux/actions/todos";

const Todo = (props) => {
    const { todo, editTodoAct, deleteTodoAct, themeBool } = props;

    const [toggle, setToggleOn] = useState(false);

    const theme = StyleSheet.create({
        basic: {
            backgroundColor: themeBool ? '#fff' : '#000',
            color: themeBool ? '#000' : '#fff',
            borderColor: themeBool ? '#000' : '#fff'
        },
        button: {
            backgroundColor: !themeBool ? '#fff' : '#000',
            color: !themeBool ? '#000' : '#fff',
            borderColor: !themeBool ? '#000' : '#fff'
        }
    });

    const onChange = () => {
        setToggleOn(pre => !pre);
    };

    const onEdit = (text) => {
        const newTodo = {
            id: todo.id,
            title: text
        };
        editTodoAct(newTodo);
    };

    return (
        <View style={StyleSheet.compose(theme.basic, styles.todo)}>
            {!toggle ?
                <TodoTitle
                    changeForm = {onChange}
                    todo = {todo}
                    onDelete = {deleteTodoAct}
                    theme={themeBool}
                    styleTheme={theme}/> :
                <InputForm
                    changeForm = {onChange}
                    todo = {todo}
                    onEdit = {onEdit}
                    theme={themeBool}
                    styleTheme={theme}/>}
        </View>
    )
};

const styles = StyleSheet.create({
    todo: {
        margin: 5,
        flexDirection: 'row',
        width: '90%',
        borderStyle: 'solid',
        borderWidth: 1
    }
});

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