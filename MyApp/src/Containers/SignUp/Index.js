import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import {  TextInput, Button } from 'react-native-paper'
import { useForm } from "react-hook-form";
import { Formik } from 'formik';
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
          <Formik 
            initialValues={{ 
              firstName: '',
              lastName: '',
              email: '',
              password: ''
            }}
            onSubmit={values => Alert.alert(values.firstName + values.lastName)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput 
                  style={styles.emailInp}
                  label="First Name"
                  value = {values.firstName}
                  // onChangeText={text => setFirstName(text)}
                  onChangeText={handleChange('firstName')}
                />
                <TextInput 
                  style={styles.emailInp}
                  label="Last name"
                  value = {values.lastName}
                  type="string"
                  onChangeText={handleChange('lastName')}
                />
                <TextInput 
                  style={styles.emailInp}
                  label="Email"
                  value = {values.email}
                  type="email"
                  onChangeText={handleChange('email')}
                />
                <TextInput 
                  placeholder="Password"
                  value = {values.password}  
                  type="password"
                  onChangeText={handleChange('password')}
                /> 
                <Button
                  style={styles.btn}
                  color={"#004d99"}
                  mode={"contained"}
                  onPress={handleSubmit} 
                  title="Submit"
                >
                  SignUp
                </Button>
              </View>
            )}
            
          </Formik>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
