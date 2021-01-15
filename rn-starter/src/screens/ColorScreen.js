import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const styles = StyleSheet.create({

})

const CounterScreen = () => {
    const [color, setColor] = useState([])

    return(
        <View>
            <Button title="Add a Color" onPress={()=> setColor([...color, randomRgb()])} />
            <FlatList
                keyExtractor={(item) => item}
                data={color}
                renderItem={({ item }) => {
                    return <View style={{ 
                        height: 100,
                        width: 100,
                        backgroundColor: item
                    }} />
                }}
            />
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