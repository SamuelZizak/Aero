import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,continerStyles,textStyles,isLodading}) => {
  return (
    <TouchableOpacity className={`bg-secondary min-h-[62px] justify-center items-center rounded-xl ${continerStyles} ${isLodading ? 'opacity-50' : ''}`} onPress={handlePress} activeOpacity={0.7} disabled={isLodading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})