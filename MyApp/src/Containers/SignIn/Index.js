import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, Text } from 'react-native'
import { useTheme } from '@/Theme'
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

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <View style={[Layout.container] }>
        <Image style = {styles.img} source={require('@/Assets/Images/logo.png')}/>
        <TextInput 
          style={styles.emailInp}
          placeholderTextColor= "#000000"
          label="Email"
          value = {email}
          type="email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput 
          label="Password"
          value = {password}  
          type="password"
          onChangeText={text => setPassword(text)}
        />
        <Button
          style={styles.btn}
          color="#004d99"
          mode="contained"
          
        >
          SignIn
        </Button>
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
