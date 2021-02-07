import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@/Theme'
import { Avatar, Button, Card, TextInput, List, Divider } from 'react-native-paper'
import { navigate } from '@/Navigators/Root'
import { NavigationContainer } from '@react-navigation/native';
import { CourseDetail } from '@/Containers';
import { WebView } from 'react-native-webview';
import { NavigationEvents } from "react-navigation";
import { ListItem } from 'native-base';

const Classroom = ({ navigation, route }) => {
  const { Layout, Common } = useTheme()
  const { courseLectures } = route.params;
  const [isThePageActive, setIsThePageActive] = useState(true);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      text: "Awesome Lecture",
      userName: "Ermias",
      avatar: "@/Assets/Images/TOM.png",
      likes: 12,
      dislikes: 1,
      replies: [
          "string"
      ],
      id: "5f325263c1e3d500174c2e2d",
      commentId: "",
      videoId: "5f3178044262d10017f033ba",
      courseId: "5f3176854262d10017f033b9"
    }, 
    {
      text: "Awesome Lecture",
      userName: "Ermias",
      avatar: "@/Assets/Images/TOM.png",
      likes: 12,
      dislikes: 1,
      replies: [
          "string"
      ],
      id: "5f325263c1e3d500174c2e2e",
      commentId: "",
      videoId: "5f3178044262d10017f033ba",
      courseId: "5f3176854262d10017f033b9"
    }
  ])
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
                source={{ uri: `${courseLectures[0].url}` }}
                style={{ height: 250 }}
              />
            }
            
          </View>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="text"
            color="#004d99"
            onPress={() => {
              Alert.alert('')
            }}
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
            {
              courseLectures.map((lecture, i) => (
                <View>
                  <List.Item
                    title={lecture.title}
                    key={i} 
                  />
                  <Divider/>
                </View>
              ))
            }
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
        {
          comments.map((comment, i) => (
            <View key={i}>
              <List.Item
                title={comment.userName} 
                description={comment.text}
                left={props => <Avatar.Image size={40} style={{
                  marginTop: 100/15
                }} source={require('@/Assets/Images/TOM.png')}/>}
                descriptionNumberOfLines= {4}
              />
              <Divider/>
            </View>
          ))
        }
       
      </List.Section>
    </ScrollView>
  ) 
}

export default Classroom
