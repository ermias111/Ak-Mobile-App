import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import {  ScrollView } from 'react-native'
import { useTheme } from '@/Theme'
import { Avatar, Button, Card, Title, Paragraph, List, Divider } from 'react-native-paper'

const CourseDetail = ({ navigation }) => {
  const { Layout, Common } = useTheme()
  const styles = StyleSheet.create({
    emailInp : {
      marginBottom: 100/7
    },

    card: {
      marginTop: 100/50
    }
  })
  // const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <ScrollView>
        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/709' }} />
          <Card.Content>
            <Title>Lorem Ipsum</Title>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown 
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => { navigation.navigate('Classroom')}}
            >Enroll</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Content</Title>
            <Divider/>
            <List.Section >
                <List.Item
                  title="Lecture 1" 
                />
                <Divider/>
                <List.Item
                  title="Lecture 2" 
                />
            </List.Section>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Review</Title>
            <List.Section title='Comments'>   
              <List.Item
                title="First item" 
                description="industry. Lorem Ipsum has been the indu
                  stry's standard dummy text ever since th
                  e 1500s, when an unknown printer took"
                left={props => <Avatar.Image size={40} style={{
                  marginTop: 100/15
                }} source={require("@/Assets/Images/TOM.png" )}/>}
                descriptionNumberOfLines= {4}
              />
              <Divider/>
              <List.Item
                title="First item" 
                description="industry. Lorem Ipsum has been the indu
                  stry's standard dummy text ever since th
                  e 1500s, when an unknown printer took"
                left={props => <Avatar.Image size={40} style={{
                  marginTop: 100/15
                }} source={require("@/Assets/Images/TOM.png" )}/>}
                descriptionNumberOfLines= {4}
              />
          </List.Section>
          </Card.Content>
        </Card>
    </ScrollView>
  )
}

export default CourseDetail
