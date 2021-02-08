import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
import {  TextInput, Button, HelperText, Avatar } from 'react-native-paper'
import { Formik } from 'formik';
import * as Yup from 'yup';
// import ImagePicker from 'react-native-image-picker'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const profileEditSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required')
});


const Account = ({ height = 200, width = 200, mode = 'contain' }) => {
  const { Layout, Common } = useTheme()
  const [currentUser, setCurrentUser] = useState({
    firstName: 'Richard',
    lastName: 'Wilson',
    email: 'wil@gmail.com',
    phoneNumber: '+1332423442',
    image: ''
  })

  // const [userImage, setUserImage] = useState('')

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
      marginVertical: 100 / 20,
      alignSelf: 'center'
    },
  })

  // const handleChoosePhoto = (e) => {
  //   const options = {
  //     noData: true,
  //   }
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setCurrentUser({
  //         ...useState,
  //         image: response
  //       })
  //     }
  //   })
  // }


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
          <Avatar.Image size={110} style = {styles.img} source={require('@/Assets/Images/avatar.jpg')}/>
          <Button
            style={styles.btn}
            color={"#004d99"}
            mode={"text"}
            // onPress={handleChoosePhoto}
          >
            Change
          </Button>
          <Formik 
            initialValues={{ 
              firstName: `${currentUser.firstName}`,
              lastName: `${currentUser.lastName}`,
              email: `${currentUser.email}`,
              phoneNumber: `${currentUser.phoneNumber}`
            }}
            validationSchema={profileEditSchema}
            onSubmit={values => Alert.alert(values.firstName + values.lastName)}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
              <View>
                <TextInput 
                  style={errors.firstName && touched.firstName ? styles.inpErr : styles.emailInp}
                  label="First Name"
                  value = {values.firstName}
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
                  placeholder="PhoneNumber"
                  style={errors.phoneNumber && touched.phoneNumber ? styles.inpErr : styles.emailInp}
                  value = {values.phoneNumber}  
                  onChangeText={handleChange('phoneNumber')}
                /> 
                {
                  errors.phoneNumber && touched.phoneNumber ? (
                    <HelperText 
                      type="error"
                      style={styles.emailInp}
                    >
                      {errors.phoneNumber}
                    </HelperText>
                  ) : null
                }
                <Button
                  style={styles.btn}
                  color={"#004d99"}
                  mode={"text"}
                  onPress={handleSubmit} 
                  title="Submit"
                  // disabled={
                  //   errors.email || errors.phoneNumber || errors.firstName || errors.lastName ? true : false
                  // }
                >
                  Save Changes
                </Button>
              </View>
            )}
            
          </Formik>
    </KeyboardAwareScrollView>
  )
}

export default Account
