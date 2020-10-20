import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import { addNewTodo } from './redux/actions/todos';
import { styles, darkTheme, lightTheme } from './style/todo-list';
// import DateTimePicker from "react-native-modal-datetime-picker";

const AddTodo = (props) => {
    // const { themeBool, addTodo } = props;
    //
    // const [text, setText] = useState('');
    // const [date, setDate] = useState(new Date(1598051730000));
    // // const initialState = {
    // //     id: Date.now().toString(),
    // //     title: text,
    // //     date: date,
    // //     time: ''
    // // };
    //
    // // const [newTodo, setNewTodo] = useState(initialState);
    //
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);
    //
    // const basicStyle = themeBool ? lightTheme : darkTheme;
    //
    // const handleChangeText = (text) => {
    //     if(text !== '') setText(text);
    //     // console.log('show:', show);
    // };
    //
    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };
    //
    // const showDatepicker = () => {
    //     console.log(show);
    //     showMode('date');
    // };
    //
    // const changeData = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'android');
    //     setDate(currentDate);
    //     // console.log('show changeData:', show);
    //     // setNewTodo({...newTodo, date: currentDate});
    // };
    //
    // const handleSubmit = () => {
    //     // if(text !== '' ) addTodo(newTodo);
    //     // setText('');
    //     console.log('date:', date, 'text:', text);
    // };

    //
    // return (
    //     <View>
    //         {/*<Text>*/}
    //         {/*    {console.log(newTodo)}*/}
    //         {/*</Text>*/}
    //     <View style={StyleSheet.compose(basicStyle.input, styles.block)}>
    //         <TextInput
    //             style={StyleSheet.compose(basicStyle.input, styles.input)}
    //             value={text}
    //             autoFocus={true}
    //             onChangeText={text => handleChangeText(text)}
    //         />
    //
    //         <TouchableHighlight
    //             style={styles.button}
    //             activeOpacity={0.6}
    //             underlayColor="#DDDDDD"
    //             onPress={handleSubmit}>
    //             <View accessibilityRole = 'button'>
    //                 <Text style={StyleSheet.compose(basicStyle.button, styles.buttonText)}>
    //                     add
    //                 </Text>
    //             </View>
    //         </TouchableHighlight>
    //     </View>
    //         <View>
    //         <Button title="запланувати" onPress={showDatepicker}/>
    //             {show ?
    //                 <DateTimePicker
    //                     testID="dateTimePicker"
    //                     value={date}
    //                     mode={mode}
    //                     is24Hour={true}
    //                     display="default"
    //                     onChange={changeData}
    //             /> : <Text> '' </Text>}
    //         </View>
    //     </View>
    // )
    const { themeBool, addTodo, state } = props;
    const basicStyle = themeBool ? lightTheme : darkTheme;

    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const handleChangeText = (text) => {
        setText(text);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const changeDateAndTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false); //?? was "Platform.OS === 'ios'"
        console.log('date:', currentDate, 'show:', show, 'mode:', mode);
    };

    const handleSubmit = () => {
        const newTodo = {
            id:Date.now().toString(),
            title: text,
            date: date
        }
        if(text !== '' ) addTodo(newTodo);
        setText('');
        console.log('newTodo:', newTodo, 'state:', state.stateReducer.todos);
    };


    return (
        <View>
            <View style={StyleSheet.compose(basicStyle.input, styles.block)}>
                <TextInput
                    style={StyleSheet.compose(basicStyle.input, styles.input)}
                    value={text}
                    autoFocus={true}
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
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={changeDateAndTime}
                />
            )}
            {console.log(show, mode, date, text)}
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