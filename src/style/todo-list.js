import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    block: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row'
    },
    input: {
        width: '80%',
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 19,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    button: {
        width: '20%'
    },
    buttonText: {
        marginLeft: 2,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        paddingVertical: 11,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    }
});