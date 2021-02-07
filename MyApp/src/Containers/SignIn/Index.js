import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import { Formik } from 'formik';
import { TextInput, Button, Form } from 'react-native-paper'

const SignIn = ({ navigation }) => {
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
    txt: {
      alignContent: 'center',
      justifyContent: 'center',
      marginHorizontal: 100/1,
      marginVertical: 100/6
    }
  })
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <View style={[Layout.container] }>
        <Image style = {styles.img} source={require('@/Assets/Images/logo.png')}/>
        <Formik 
            initialValues={{ 
              email: '',
              password: '',
            }}
            onSubmit={values => {
              // Alert.alert(values.email + values.password)
              navigation.navigate('Home')
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput 
                  style={styles.emailInp}
                  placeholderTextColor= "#000000"
                  label="Email"
                  value = {values.email}
                  type="email"
                  onChangeText={handleChange('email')}
                />
                <TextInput 
                  label="Password"
                  value = {values.password}  
                  type="password"
                  onChangeText={handleChange('password')}
                />
                <Button
                  style={styles.btn}
                  color="#004d99"
                  mode="contained"
                  // onPress={() => navigation.navigate('Home')}
                  onPress={handleSubmit}
                >
                  SignIn
                </Button>
              </View>
            )}
          </Formik>
        <Text 
          style={styles.txt}
          onPress={() => navigation.navigate('SignUp')}
        > 
          New here ? Register 
        </Text>
    </View>
  )
}

export default SignIn
