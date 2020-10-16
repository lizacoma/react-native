import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { connect } from "react-redux";
import { changeTheme } from './redux/actions/todos';
import { styles, darkTheme, lightTheme } from './style/todo-list';

const Navbar = (props) => {
    const { title, themeBool, changeTheme } = props;
    const basicStyle = themeBool ? lightTheme : darkTheme;

    return (
        <View style={StyleSheet.compose(basicStyle.basic, styles.navbar)}>
            <Text style={StyleSheet.compose(basicStyle.basic, styles.navText)}>
                {title}
            </Text>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => changeTheme(!themeBool)}>
                <View>
                    <Text style={StyleSheet.compose(basicStyle.button, styles.buttonText)}>
                        {!themeBool ? 'light on' : 'dark on'}
                    </Text>
                </View>
            </TouchableHighlight>
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
        changeTheme: bool => dispatch(changeTheme(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);