import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@/Theme'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { navigate } from '@/Navigators/Root'
import { NavigationContainer } from '@react-navigation/native';
import { CourseDetail } from '@/Containers';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = ({ navigation }) => {
  const { Layout, Common } = useTheme()
  const styles = StyleSheet.create({
    card: {
      marginTop: 100/10
    }
  })

  return (
    <ScrollView>
      <Card
        onPress={() => {navigation.navigate('CourseDetail')}}
      >
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Card  style={styles.card}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
        
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  )
}

export default Home
