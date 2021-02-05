import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@/Theme'
import { Avatar, Button, Card, TextInput, List, Divider } from 'react-native-paper'
import { navigate } from '@/Navigators/Root'
import { NavigationContainer } from '@react-navigation/native';
import { CourseDetail } from '@/Containers';
import { WebView } from 'react-native-webview';
import { NavigationEvents } from "react-navigation";
import { ListItem } from 'native-base';

const Classroom = ({ navigation }) => {
  const { Layout, Common } = useTheme()
  const [isThePageActive, setIsThePageActive] = useState(true);
  const [comment, setComment] = useState('');
  // const isFocused = navigation.isFocused();
  const styles = StyleSheet.create({
    
  })

  useEffect(() => {
      // setIsThePageActive(!isThePageActive)
  })


  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <View
            style={{flex: 1 }}
          >
            {
              isThePageActive && 
              <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: `https://www.youtube.com/embed/2wucLthrUjw?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0` }}
                style={{ height: 250 }}
              />
            }
            
          </View>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="text"
            color="#004d99"
          >
            Prev
          </Button>
          
          <Button
            mode="text"
            color="#004d99"
            style={{paddingLeft: 245 }}
          >
            Next
          </Button>
        </Card.Actions>
      </Card>
      <Divider/> 
      <Card>
      <List.Section title="Course Content">
            <List.Item 
              title="Lecture 1"
            />
            <Divider/>
            <List.Item 
              title="Lecture 2"
            />
          </List.Section>
      </Card>
      <Divider/>
      <Card>
        <Card.Content>
          <TextInput
            label="Email"
            value={comment}
            onChangeText={text => setComment(text)}
          />
          <Button
            mode="text"
            color="#004d99"
            style={{paddingLeft: 250 }}
          >
            Reply
          </Button>
        </Card.Content>
      </Card> 
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
    </ScrollView>
  ) 
}

export default Classroom
