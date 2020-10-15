import { ADD_NEW_TODO, EDIT_TODO, DELETE_TODO, CHANGE_THEME } from '../constants/types';

export function addNewTodo(todo) {
    return {
        type: ADD_NEW_TODO,
        todo
    }
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        todo
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

export function changeTheme(bool) {
    return {
        type: CHANGE_THEME,
        bool
    }
}