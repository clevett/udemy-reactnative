import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>React Native!</Text>
      <Button 
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
       />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('List') }
        title="Go to List Demo"
      />
      <Button 
        style={styles.button}
        onPress={() => navigation.navigate('Image') }
        title="Go to Image Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Counter') }
        title="Go to Counter Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Color') }
        title="Go to Color Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginBottom: "5px"
  }
});

export default HomeScreen;
