import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import {  ScrollView, View } from 'react-native'
import { useTheme } from '@/Theme'
import { Avatar, Button, Card, Title, Paragraph, List, Divider } from 'react-native-paper'

const CourseDetail = ({ navigation }) => {
  const { Layout, Common } = useTheme()
  const [currentCourse, setCurrentCourse] = useState({
    title: "Biology in Amharic",
    preparedBy: "Abebe",
    instructorPhoto: '/images/avatars/avatar_11.png',
    length: 0,
    // time: 3, not in the model
    certificate: true,
    videos: [

    ],
    publishedDate: "2020-08-07T15:48:33.322Z",
    icon: 'https://picsum.photos/700',
    enrolledStudents: 1222,
    description: "is a web-based hosting service for version control o",
    categoryId: "",
    rating: 0,
    totalDownloads: 0,
    updatedAt: "2020-08-07T15:48:33.322Z",
    about: "",
    requirements: '',
    objectives: [
      ""
    ],
    id: ''
  })
  const [courseLectures, setCourseLectures] = useState([
    {
      url: `https://www.youtube.com/embed/2wucLthrUjw?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0`,
      title: 'create repository',
      description: "application",
      courseId: "5f3176854262d10017f033b9",
      videoLength: 0,
      materials: "",
      part: 1,
      id: "",
    },
    {
      url: 'https://www.youtube.com/embed/2wucLthrUjw?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0',
      title: 'cloning a repository',
      description: "application",
      courseId: "5f3176854262d10017f033b9",
      videoLength: 0,
      materials: "",
      part: 2,
      id: "",
    }
  ])
  const styles = StyleSheet.create({
    emailInp : {
      marginBottom: 100/7
    },

    card: {
      marginTop: 100/50
    }
  })

  return (
    <ScrollView>
        <Card>
          <Card.Cover source={{ uri: `${currentCourse.icon}` }} />
          <Card.Content>
            <Title>{currentCourse.title}</Title>
            <Paragraph>
              {currentCourse.description} 
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => { navigation.navigate('Classroom', {
                courseLectures: courseLectures
              })}}
            >Enroll</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Content</Title>
            <Divider/>
            <List.Section >
                {
                  courseLectures.map((lecture) => (
                    <View>
                      <List.Item
                        title={lecture.title} 
                      />
                      <Divider/>
                    </View>
                  ))
                }
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
