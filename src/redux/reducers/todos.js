import { ADD_NEW_TODO, EDIT_TODO, DELETE_TODO, CHANGE_THEME } from '../constants/types';

const initialState = {
    todos: [],
    theme: true
};

export function stateReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_TODO:
            return  {
                ...state,
                todos: [action.todo, ...state.todos]
            };

        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id !== action.todo.id ? todo : action.todo)
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };

        case CHANGE_THEME:
            return {
                ...state,
                theme: action.bool
            };

        default:
            return state;

    };
};