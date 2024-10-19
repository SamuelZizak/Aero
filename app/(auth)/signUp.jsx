import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/formFIeld'
import { images } from '../../constants';
import CustomButton from '../../components/customButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
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
          <Text className='text-2xl text-white mt-10 font-psemibold '>Sign Up to Aoura</Text>
          <FormField title='Username' value={form.username} handleChange={(e)=>setForm({...form,username:e})} otherStyles='mt-10'/>
          <FormField title='Email' value={form.email} handleChange={(e)=>setForm({...form,email:e})} otherStyles='mt-7' keyboardType='email-address'/>
          <FormField title='Password' value={form.password} handleChange={(e)=>setForm({...form,password:e})} otherStyles='mt-7' keyboardType='password'/>
          <CustomButton title="Sign In" handlePress={submit} continerStyles={"mt-7"} isLodading={isSubmiting}></CustomButton>
          <View className='flex-row justify-center pt-5 gap-2'>
            <Text className='text-gray-100 font-pregular'>Have have an account already? </Text>
            <Link href={'/signIn'} className='text-secondary font-psemibold'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp