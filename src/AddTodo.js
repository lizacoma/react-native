import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/actions/todos';
import { styles, darkTheme, lightTheme } from './style/todo-list';
// import DateTimePicker from "react-native-modal-datetime-picker";

const AddTodo = (props) => {
    const { themeBool, addTodo } = props;
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const basicStyle = themeBool ? lightTheme : darkTheme;

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

    // const handleDatePicked = date => {
    //     // console.log("A date has been picked: ", date);
    //     setDatePickerVisible(false)
    // };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
        <View style={StyleSheet.compose(basicStyle.input, styles.block)}>
                <TextInput
                    style={StyleSheet.compose(basicStyle.input, styles.input)}
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
                    <Text style={StyleSheet.compose(basicStyle.button, styles.buttonText)}>
                        add
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
            <View>
            <Button title="запланувати" onPress={showDatepicker}/>
                {show && (<DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />)}
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
        addTodo: todo => dispatch(addNewTodo(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo);