import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Label(props) {
    return (
        props.value === '' ?
            null:
            <View style={styles.container}>
                <Text
                    style={styles.titleText}
                >{props.title}:</Text>
                <Text style={styles.valueText}>{props.value}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#fff',
        marginRight: 100,
        marginBottom: 20
    },
    titleText: {
        fontSize: 20,
        color: '#050510',
        fontWeight: "bold",
        marginLeft: 5
    },
    valueText: {
        fontSize: 20,
        color: '#050510',
        marginLeft: 5
    },
})