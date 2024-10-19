import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/formFIeld'
import { images } from '../../constants';
import CustomButton from '../../components/customButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const submit = ()=>{

  }
  const [isSubmiting, setisSubmiting] = useState(false)

  return (  
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full justify-center min-h-[85vh] my-4 px-4'>
          <Image source={images.logo} className='w-[115px] h-[35px]' resizeMode='contain'/>
          <Text className='text-2xl text-white mt-10 font-psemibold '>Log in to Aoura</Text>
          <FormField title='Email' value={form.email} handleChange={(e)=>setForm({...form,email:e})} otherStyles='mt-7' keyboardType='email-address'/>
          <FormField title='Password' value={form.password} handleChange={(e)=>setForm({...form,password:e})} otherStyles='mt-7' keyboardType='password'/>
          <CustomButton title="Sign In" handlePress={submit} continerStyles={"mt-7"} isLodading={isSubmiting}></CustomButton>
          <View className='flex-row justify-center pt-5 gap-2'>
            <Text className='text-gray-100 font-pregular'>Don't have an account? </Text>
            <Link href={'/signUp'} className='text-secondary font-psemibold'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn