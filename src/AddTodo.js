import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/actions/todos';
import { styles, darkTheme, lightTheme } from './style/todo-list';
// import DateTimePicker from "react-native-modal-datetime-picker";

const AddTodo = (props) => {
    const { themeBool, addTodo, state } = props;
    const basicStyle = themeBool ? lightTheme : darkTheme;

    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const handleChangeText = (text) => {
        setText(text);
    };

    const changeDateAndTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false); //?? in the example was "Platform.OS === 'ios'", why?
    };

    const showMode = (currentMode) => {
        setMode(currentMode);
       if(show === false) setShow(true);
    };

    const showDatepicker = () => {
        showMode('date');
        // console.log('date mode!')
    };

    const showTimepicker = () => {
        showMode('time');
        // console.log('time mode!')
    };

    const handleSubmit = () => {
        const newTodo = {
            id:Date.now().toString(),
            title: text,
            date: date
        }
        const dateNow = new Date().toString().substring(0, 21);

        if(text === '') { //if input is empty
            alert('Add text!');
        } else {
            if (date.toString().substring(0, 21) === dateNow) {
                alert('Change date!');
            } else {
                addTodo(newTodo);
                setText('');
                setDate(new Date());
            };
        };
    };


    return (
        <View>
            <View style={StyleSheet.compose(basicStyle.input, styles.block)}>
                <TextInput
                    style={StyleSheet.compose(basicStyle.input, styles.input)}
                    value={text}
                    autoFocus={true}
                    placeholder='add todo...'
                    onChangeText={text => handleChangeText(text)}
                />

                <TouchableHighlight
                    style={styles.button}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={handleSubmit}
                >
                    <View accessibilityRole = 'button'>
                        <Text style={StyleSheet.compose(basicStyle.button, styles.buttonText)}>
                            add
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View>
                <Button onPress={showDatepicker} title="change date" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="change time" />
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    minimumDate={new Date()}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={changeDateAndTime}
                />
            )}
        </View>
    );
};

const mapStateToProps = state => {
    return {
        state,
        themeBool: state.stateReducer.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addNewTodo(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);