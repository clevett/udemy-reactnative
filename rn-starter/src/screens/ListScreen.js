import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
})

const ListScreen = () => {
    const friends = [
        {name: "Joey", age:34},
        {name: "Rachel", age: 18},
        {name: "Ross", age: 40},
        {name: "Monica", age: 38},
        {name: "Chandler", age: 23}
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
}

export default ListScreen