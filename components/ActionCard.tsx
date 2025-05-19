import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        What's new in JS 21- ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://imgs.search.brave.com/cFiyyUIscBs2JJevxaYMHVEoOyhNdCUSeM8hbxs6PPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/ODI5OTc3MC9waG90/by9jbG9zZS11cC1v/Zi1zdW1hdHJhbi10/aWdlci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RFJKdTdM/RTBnR3FIYlhpOHJN/NmtnbjN4QUNNREc2/aEFyTzFYVDlfRDBv/RT0'

                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardContainer}>
                    <Text numberOfLines={3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis, quidem temporibus repellat commodi ipsa modi accusamus nesciunt totam obcaecati nostrum labore libero beatae harum fugiat quam doloribus cumque laudantium!</Text>

                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                    onPress={()=>openWebsite('https://reactnative.dev/docs/linking')}>
                        <Text style={styles.socialLinks}>
                            READ MORE
                        </Text>
                    </TouchableOpacity>
                       <TouchableOpacity
                    onPress={()=>openWebsite('https://reactnative.dev/docs/linking')}>
                        <Text style={styles.socialLinks}>
                            Follow Me
                        </Text>
                    </TouchableOpacity>
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
        color: '#FFFFFF'

    },
    card: {
        width: 360,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cardElevated: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headerContainer: {
        height:26,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        fontSize:16,
        fontWeight:'600'

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
    },
    cardContainer: {
        padding:10

    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        backgroundColor:'#FFF',
        paddingHorizontal:24,
        paddingVertical:6,
        borderRadius:8

    }
})