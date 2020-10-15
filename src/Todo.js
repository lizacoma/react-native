import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';
import { TodoTitle } from './TodoTitle';
import { InputForm } from './InputForm';
import { editTodo, deleteTodo } from "./redux/actions/todos";

const Todo = (props) => {
    const { todo, editTodoAct, deleteTodoAct } = props;

    const [toggle, setToggleOn] = useState(false);

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
        <View style={StyleSheet.compose(styles.todo)}>
            {!toggle ?
                <TodoTitle changeForm = {onChange} todo = {todo} onDelete = {deleteTodoAct}/> :
                <InputForm changeForm = {onChange} todo = {todo} onEdit = {onEdit}/>}
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

const mapDispatchToProps = dispatch => {
    return {
        editTodoAct: todo => dispatch(editTodo(todo)),
        deleteTodoAct: id => dispatch(deleteTodo(id))
    };
};

export default connect(null, mapDispatchToProps) (Todo);