import { View, Text ,TextInput, TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const FormField = ({title, value, handleChangeText,placeholder,otherStyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className='space-y-2'>
      <Text className={`text-base text-gary-100 font-pmedium text-white ${otherStyles}`}>{title}</Text>
      <View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secendary items-center flex-row'>
        <TextInput className='flex-1 text-white text-base font-pmedium' defaultValue={value} secureTextEntry={title === 'Password'&& !showPassword} onChangeText={handleChangeText} placeholderTextColor={'#7b7b8b'} placeholder={placeholder}></TextInput>
      {title === "Password" && (
        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
          <Image source={showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' />
        </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField