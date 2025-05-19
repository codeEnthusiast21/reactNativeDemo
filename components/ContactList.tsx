import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contact = [
        {
            uid: 1,
            name: 'Aviral Agarwal',
            status: 'Making your Gpay smooth',
            imageUrl: 'https://randomwordgenerator.com/img/picture-generator/57e9d3414e54b10ff3d8992cc12c30771037dbf85254784a70287bd39144_640.jpg'
        },
        {
            uid: 2,
            name: 'Aviral Agarwal',
            status: 'Making your Gpay smooth',
            imageUrl: 'https://randomwordgenerator.com/img/picture-generator/55e0d0414d52a914f1dc8460962e33791c3ad6e04e507441722872d6964ac5_640.jpg'
        },
        {
            uid: 3,
            name: 'Aviral Agarwal',
            status: 'Making your Gpay smooth',
            imageUrl: 'https://randomwordgenerator.com/img/picture-generator/54e6dc444357ab14f1dc8460962e33791c3ad6e04e507441722a72d39e45cc_640.jpg'
        },
        {
            uid: 4,
            name: 'Aviral Agarwal',
            status: 'Making your Gpay smooth',
            imageUrl: 'https://randomwordgenerator.com/img/picture-generator/57e2d74a4251b10ff3d8992cc12c30771037dbf85254794177277dd3934c_640.jpg'
        },


    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container}
            >
                {contact.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>


                    </View>
                ))}


            </ScrollView>
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor:'#8D3DAF',
        padding:4,
        borderRadius:10,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,

    },
    userName: {
        fontSize: 16,
        fontWeight:'600',
        color:'#FFF'


    },
    userStatus: {
        fontSize:12,
        color:'#FFF000'

    }
})