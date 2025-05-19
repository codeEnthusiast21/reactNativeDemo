import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/95442265/photo/lottery.jpg?s=612x612&w=0&k=20&c=oflKM4MCpA0QxVefGxRiyQLaRJSahMOcfblIggQe9Co='

          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> KUCH TO H YE </Text>
          <Text style={styles.cardLabel}> Paper he Paper </Text>
          <Text style={styles.cardDescription}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit dolorum iste, delectus nemo tempore.</Text>
          <Text style={styles.cardFooter}> Kahi TO H YE </Text>

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
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16

  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4

  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6

  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6

  },
  cardFooter: {}


})