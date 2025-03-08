import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import Svg, {Path} from 'react-native-svg'

interface RouterProps {
    navigation : NavigationProp<any, any>;
}

interface OptionsProps {
  color?: string,
  width?: number,
  height?: number,
}

const Home = ({navigation}: RouterProps, {color='red', width = 200, height = 200}: OptionsProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray'}}>
      <View style={styles.boxContainer}>
        <Button onPress={() => navigation.navigate('Setting')} title="Setting"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 20,
    marginVertical: 30,
    height: '100%',
    width: '90%',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.25,
    backgroundColor: 'white',
  }
});

export default Home