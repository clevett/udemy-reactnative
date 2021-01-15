import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({

})

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score: {score}</Text>
        </View>
    )
}

export default ImageDetail