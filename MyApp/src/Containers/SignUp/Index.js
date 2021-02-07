import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import {  TextInput, Button, HelperText } from 'react-native-paper'
import { useForm } from "react-hook-form";
import { Formik } from 'formik';
import FormBuilder from 'react-native-paper-form-builder';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password too short(must be at least 8 characters)')
    .required('Required')
});


const SignUp = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Common } = useTheme()
  const styles = StyleSheet.create({
    emailInp : {
      marginBottom: 100/7
    },
    inpErr : {
      marginBottom: 0
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
            validationSchema={SignupSchema}
            onSubmit={values => Alert.alert(values.firstName + values.lastName)}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <View>
                <TextInput 
                  style={errors.firstName && touched.firstName ? styles.inpErr : styles.emailInp}
                  label="First Name"
                  value = {values.firstName}
                  // onChangeText={text => setFirstName(text)}
                  onChangeText={handleChange('firstName')}
                />
                {
                  errors.firstName && touched.firstName ? (
                    <HelperText 
                      type="error"
                      style={styles.emailInp}
                    >
                      {errors.firstName}
                    </HelperText>
                  ) : null
                }
                <TextInput 
                  style={errors.lastName && touched.lastName ? styles.inpErr : styles.emailInp}
                  label="Last name"
                  value = {values.lastName}
                  type="string"
                  onChangeText={handleChange('lastName')}
                />
                {
                  errors.lastName && touched.lastName ? (
                    <HelperText 
                      type="error"
                      style={styles.emailInp}
                    >
                      {errors.lastName}
                    </HelperText>
                  ) : null
                }
                <TextInput 
                  style={errors.email && touched.email ? styles.inpErr : styles.emailInp}
                  label="Email"
                  value = {values.email}
                  type="email"
                  onChangeText={handleChange('email')}
                />
                {
                  errors.email && touched.email ? (
                    <HelperText 
                      type="error"
                      style={styles.emailInp}
                    >
                      {errors.email}
                    </HelperText>
                  ) : null
                }
                <TextInput 
                  placeholder="Password"
                  style={errors.password && touched.password ? styles.inpErr : styles.emailInp}
                  value = {values.password}  
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                /> 
                {
                  errors.password && touched.password ? (
                    <HelperText 
                      type="error"
                      style={styles.emailInp}
                    >
                      {errors.password}
                    </HelperText>
                  ) : null
                }
                <Button
                  style={styles.btn}
                  color={"#004d99"}
                  mode={"contained"}
                  onPress={handleSubmit} 
                  title="Submit"
                  disabled={
                    errors.email || errors.password || errors.firstName || errors.lastName ? true : false
                  }
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
