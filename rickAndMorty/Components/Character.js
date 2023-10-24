import React, {useEffect} from "react";
import {StyleSheet, Text, View, Image, TextInput, FlatList, TouchableHighlight} from 'react-native';
import Label from "./Label";
export default function Character({route, navigation, options}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: route.params.item.image,
                    }}
                />
                <Text style={styles.text}>{route.params.item.name}</Text>
            </View>
            <Label
                title='Species'
                value={route.params.item.species}
            ></Label>
            <Label
                title='Type'
                value={route.params.item.type}
            ></Label>
            <Label
                title='Origin name'
                value={route.params.item.origin.name}
            ></Label>
            <Label
                title='Location name'
                value={route.params.item.location.name}
            ></Label>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        height: '100%',
        marginTop: 20
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 5,
    },

    imageContainer: {
        marginBottom: 30,
        display: "flex",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        color: '#050510',
        fontWeight: "bold",
        marginLeft: 5,
    }
})