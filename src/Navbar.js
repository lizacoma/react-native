import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { connect } from "react-redux";
import { changeTheme } from './redux/actions/todos';

const Navbar = (props) => {
    const { title, themeBool, changeTheme } = props;

    const theme = StyleSheet.create({
        basic: {
            backgroundColor: themeBool ? '#fff' : '#000',
            color: themeBool ? '#000' : '#fff',
            borderColor: themeBool ? '#000' : '#fff'
        }
    });

    return (
        <View style={StyleSheet.compose(theme.basic, styles.navbar)}>
            <Text style={StyleSheet.compose(theme.basic, styles.text)}>
                {title}
            </Text>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => changeTheme(!themeBool)}>
                <View>
                    <Text style={StyleSheet.compose(theme.basic, styles.buttonText)}>
                        {themeBool ? 'light' : 'dark'}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
};



const styles = StyleSheet.create({
    navbar:{
        width: '100%',
        alignItems: 'center',
        padding: 15
    },
    text:{
        fontSize: 24
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 10
    }
});

const mapStateToProps = state => {
    return {
        state,
        themeBool: state.stateReducer.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeTheme: bool => dispatch(changeTheme(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);