import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 20

const reducer = (state, action) => {
    const update = currentValue => 
        currentValue + action.amount > 255 || currentValue + action.amount < 0 ? 
            currentValue : currentValue + action.amount 

    switch(action.colorToChange) {
        case 'red':
            return { ...state, red: update(state.red) }
        case 'green':
            return { ...state, green: update(state.green) }
        case 'blue':
            return { ...state, blue: update(state.blue) }
        default:
            return
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state

    return(
        <View>
            <ColorCounter 
                onIncrease={() => dispatch( { colorToChange: 'red', amount: COLOR_INCREMENT } )}
                onDecrease={() => dispatch( { colorToChange: 'red', amount: -1 * COLOR_INCREMENT } ) }
                color="Red" 
            />
            <ColorCounter
                onIncrease={() => dispatch( { colorToChange: 'blue', amount: COLOR_INCREMENT } )}
                onDecrease={() => dispatch( { colorToChange: 'blue', amount: -1 * COLOR_INCREMENT } )}
                color="Blue" 
            />
            <ColorCounter 
                onIncrease={() => dispatch( { colorToChange: 'green', amount: COLOR_INCREMENT } )}
                onDecrease={() => dispatch( { colorToChange: 'green', amount: -1 * COLOR_INCREMENT } )}
                color="Green" 
            />
            <View style={
                {height: 150, 
                    width: 150, 
                backgroundColor:`rgb(${red}, ${green}, ${blue})`
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen
