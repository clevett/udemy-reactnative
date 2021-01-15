import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({

})

const CounterScreen = () => {
    const [color, setColor] = useState(randomRgb())

    return(
        <View>
            <Button title="Add a Color" onPress={()=> setColor(randomRgb())} />
            <View style={{ 
                height: 100,
                width: 100,
                backgroundColor: color
            }} />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default CounterScreen