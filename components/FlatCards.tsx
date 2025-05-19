import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>RED</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>BLUE</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>GREEN</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>RED</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>RED</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color:'#FFFFFF'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,

    },
    card: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 200,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})