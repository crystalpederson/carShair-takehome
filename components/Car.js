import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'

const { BORDER_COLOR } = colors; 

const Car = ({ car }) => {
    const { Make_Name, Model_Name} = car;
    return(
        <View style={styles.carInfoContainer}>
            <Text>{Make_Name}</Text>
            <Text>{Model_Name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    carInfoContainer:{
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        margin: 2,
    }
  });
  

export default Car;