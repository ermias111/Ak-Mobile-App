import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import {  TextInput, Button } from 'react-native-paper'
import { useForm } from "react-hook-form";
import FormBuilder from 'react-native-paper-form-builder';


const SignUp = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Common } = useTheme()
  const styles = StyleSheet.create({
    emailInp : {
      marginBottom: 100/7
    },
    btn : {
      marginTop: 100/20
    },
    img: {
      marginHorizontal: 100/1.2,
      marginVertical: 100 / 5
    },
  })

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')


  return (
      <KeyboardAwareScrollView
        // resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{
          justifyContent: 'center',
          paddingHorizontal: 100 / 6,
          paddingVertical: 100/4
        }}
        scrollEnabled={true}
      >        
          <Image style = {styles.img} source={require('@/Assets/Images/logo.png')}/>
            <TextInput 
              style={styles.emailInp}
              label="First Name"
              value = {firstName}
              type="string"
              onChangeText={text => setFirstName(text)}
              // ref={register({ required: true, maxLength: 2 })}
            />
            <TextInput 
              style={styles.emailInp}
              label="Last name"
              value = {lastName}
              type="string"
              onChangeText={text => setLastName(text)}
            />
            <TextInput 
              style={styles.emailInp}
              label="Email"
              value = {email}
              type="email"
              onChangeText={text => setEmail(text)}
            />
            <TextInput 
              placeholder="Password"
              value = {password}  
              type="password"
              onChangeText={text => setPassword(text)}
            /> 
            <Button
              style={styles.btn}
              color={"#004d99"}
              mode={"contained"}
            >
              SignUp
            </Button>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
