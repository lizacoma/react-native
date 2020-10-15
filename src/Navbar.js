import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export const Navbar = (props) => {

    const [themeNow, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(pre => !pre);
    };

    return (
        <View style={StyleSheet.compose(themeNow ? theme.lightTheme : theme.darkTheme, styles.navbar)}>
            <Text style={StyleSheet.compose(themeNow ? theme.lightTheme : theme.darkTheme, styles.text)}>
                {props.title}
            </Text>
            <TouchableHighlight
                style={styles.button}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={changeTheme}>
                    <Text>
                        {themeNow ? 'light' : 'dark'}
                    </Text>
            </TouchableHighlight>
        </View>
    )
};

const theme = StyleSheet.create({
    lightTheme: {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '#000'
    },
    darkTheme: {
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#fff'
    }
});

const styles = StyleSheet.create({
    navbar:{
        width: '100%',
        alignItems: 'center',
        padding: 15
    },
    text:{
        fontSize: 24
    }
});