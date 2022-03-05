import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { SelectCountry } from 'react-native-element-dropdown';
import { colors } from '../utils/index'

const { BORDER_COLOR, PRIMARY_COLOR } = colors; 

const car_types = [
    {
      value: 'Car',
      lable: 'Car',
    },
    {
      value: 'Truck',
      lable: 'Truck'
    },
    {
      value: 'MPV',
      lable: 'MPV'
    },
    {
      value: '',
      lable: 'Any type'
    }
  ];

const TypePicker = ({type, setType}) => {
    
    return(
        <View>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        // containerStyle={styles.containerStyle} for dropdown list
        iconStyle={styles.iconStyle}
        maxHeight={160}
        value={type}
        data={car_types}
        valueField="value"
        labelField="lable"
        placeholder="Vehicle Type"
        searchPlaceholder="Search..."
        onChange={e => {
          setType(e.value);
        }}
      />
        </View>
    )
}

export default TypePicker;

const styles = StyleSheet.create({
    dropdown: {
      margin: 5,
      height: 40,
      width: 110,
      backgroundColor: '#EEEEEE',
      borderRadius: 22,
      paddingHorizontal: 8,
    },

    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    // containerStyle: {
        
    // },
  });
// const TypePicker = ({ type }) => {
    
//     return(
//         <View style={styles.filterItem}>
//             <Text style={styles.text}>{type ? type : 'Vehicle Type'}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     filterItem: {
//         borderWidth: 1,
//         borderColor: BORDER_COLOR,
//         margin: 5
//     },
//     text: {
//         textTransform: 'capitalize'
//     }
// });
  

