import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const TodoList = (props) => {
    const { state, todos } = props;

    return (
            <View style={StyleSheet.compose(styles.container)}>

                <Navbar title='Todo list'/>
                <View style={styles.darkWrap}>
                    <AddTodo/>

                    <View>
                        { todos.map(todo => {
                            return <Todo key={todo.id} todo={todo}/>
                        })
                        }
                    </View>
                </View>
            </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    darkWrap: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontSize: 26
    }
});

const mapStateToProps = state => {
    return {
        state,
        todos: state.stateReducer.todos
    };
};

export default connect(mapStateToProps) (TodoList);