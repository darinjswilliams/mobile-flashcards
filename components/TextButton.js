import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, green, gray } from '../utils/colors'

export default function TextButton ({ children, onPress,disabled, style = {}  }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={ disabled ?[styles.buttonReset,style] : [styles.button, style]}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: green,
    margin: 10,
    padding: 15,
    width: 300
  },
  reset: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: blue
  },
  buttonReset: {
    borderRadius: 5,
    backgroundColor: gray,
    margin: 10,
    padding: 15,
    width: 300
  },
});