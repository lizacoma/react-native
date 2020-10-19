import {StyleSheet} from "react-native";

export const lightTheme = StyleSheet.create({
    basic: {
        backgroundColor: '#7e529f',
        color: '#fff',
        borderColor: '#7e529f'
    },
    button: {
        backgroundColor: '#8565c5',
        color: '#fff',
        borderColor: '#8565c5'
    },
    input: {
        backgroundColor: '#fff',
        color: '#8565c5',
        borderColor: '#8565c5'
    }
});

export const darkTheme = StyleSheet.create({
    basic: {
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#fff'
    },
    button: {
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#fff'
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '#000'
    }
});

export const styles = StyleSheet.create({
    block: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },
    input: {
        width: '80%',
        padding: 10,
        fontSize: 19,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    button: {
        margin: 1,
        width: '20%'
    },
    buttonText: {
        marginLeft: 2,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    todosWrap: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    todo: {
        margin: 5,
        flexDirection: 'row',
        width: '87%',
        borderStyle: 'solid',
        borderWidth: 1
    },
    todoTitle: {
        width: '80%',
        fontSize: 23,
        fontWeight: '700'
    },
    navbar:{
        width: '100%',
        alignItems: 'center',
        padding: 15
    },
    navText:{
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 10
    },
    todoInput: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'

    }

});

export const todoTitleBlock = StyleSheet.create({
    wrap: {
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        width: '80%',
        fontSize: 23,
        fontWeight: '700'
    },
    button: {
        fontSize: 15,
        fontWeight: '700',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 3
    }
});

export const todoInputBlock = StyleSheet.create({
    wrap: {
        margin: 5,
        flexDirection: 'row',
        maxWidth: '100%',
        justifyContent: 'space-between'
    },
    button: {
        margin: 1,
        fontSize: 15,
        fontWeight: '700',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    }
});