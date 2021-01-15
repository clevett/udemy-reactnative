import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    subHeaderStyle: {
        fontSize: 30
    }
})

const ComponentsScreen = () => {
    const greeting  = <Text style={styles.textStyle}>JSX Text</Text>

    return(
        <View>
            <Text style={styles.subHeaderStyle}>React Native</Text>
            {greeting}
        </View>
    )
}

export default ComponentsScreen