import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/actions/todos';
import { styles } from './style/todo-list'

const AddTodo = (props) => {
    const { themeBool, addTodo } = props;
    const [text, setText] = useState('');

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

    const handleChange = (text) => {
        if(text != '') setText(text);
    };

    const handleSubmit = () => {
        const newTodo = {
            id: Date.now().toString(),
            title: text
        };

        addTodo(newTodo);
        setText('');
    };

    return (
        <View style={StyleSheet.compose(theme.basic, styles.block)}>
                <TextInput
                    style={StyleSheet.compose(theme.basic, styles.input)}
                    value={text}
                    autoFocus={true}
                    onChangeText={text => handleChange(text)}
                />

            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={handleSubmit}>
                <View accessibilityRole = 'button'>
                    <Text style={StyleSheet.compose(theme.basic, styles.buttonText)}>
                        add
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};

// const styles = StyleSheet.create({
//     block: {
//         marginHorizontal: 10,
//         marginVertical: 10,
//         flexDirection: 'row'
//     },
//     input: {
//         width: '80%',
//         padding: 10,
//         paddingHorizontal: 20,
//         fontSize: 19,
//         borderStyle: 'solid',
//         borderWidth: 1,
//     },
//     button: {
//         width: '20%'
//     },
//     buttonText: {
//         marginLeft: 2,
//         textAlign: 'center',
//         fontWeight: '700',
//         fontSize: 20,
//         paddingVertical: 11,
//         borderStyle: 'solid',
//         borderWidth: 1,
//     }
// });

const mapStateToProps = state => {
    return {
        themeBool: state.stateReducer.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addNewTodo(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);