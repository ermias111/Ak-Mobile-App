import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import { Formik } from 'formik';
import { TextInput, Button, HelperText } from 'react-native-paper'
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required')
});

const SignIn = ({ navigation }) => {
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
            validationSchema={SigninSchema}
            onSubmit={values => {
              // Alert.alert(values.email + values.password)
              navigation.navigate('Home')
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <View>
                <TextInput 
                  style={errors.email && touched.email ? styles.inpErr : styles.emailInp}
                  placeholderTextColor= "#000000"
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
                  label="Password"
                  style={errors.password && touched.password ? styles.inpErr : styles.emailInp}
                  value = {values.password}  
                  type="password"
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
                  color="#004d99"
                  mode="contained"
                  // onPress={() => navigation.navigate('Home')}
                  onPress={handleSubmit}
                  disabled={
                    errors.email || errors.password ? true : false
                  }
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
