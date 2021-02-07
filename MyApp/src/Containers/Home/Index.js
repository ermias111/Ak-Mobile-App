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
  const [courses, setCourses] = useState([
    {
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
    },
    {
      title: 'English for Beginners',
      preparedBy: "Fekede",
      instructorPhoto: '/images/avatars/avatar_11.png',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [

      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: 'https://picsum.photos/706',
      enrolledStudents: 0,
      description: "is a web-based hosting service for version control o",
      categoryId: "",
      rating: 0,
      totalDownloads: 0,
      updatedAt: "2020-08-07T15:48:33.322Z",
      about: "",
      requirements: "",
      objectives: [
        ""
      ],
      id: "5f3176854262d10017f033b9"
    },
    {
      title: 'English for Beginners',
      preparedBy: "Fekede",
      instructorPhoto: '/images/avatars/avatar_11.png',
      length: 0,
      // time: 3, not in the model
      certificate: true,
      videos: [

      ],
      publishedDate: "2020-08-07T15:48:33.322Z",
      icon: 'https://picsum.photos/677',
      enrolledStudents: 0,
      description: "is a web-based hosting service for version control o",
      categoryId: "",
      rating: 0,
      totalDownloads: 0,
      updatedAt: "2020-08-07T15:48:33.322Z",
      about: "",
      requirements: "",
      objectives: [
        ""
      ],
      id: "5f3176854262d10017f033b9"
    }
  ])
  const styles = StyleSheet.create({
    card: {
      marginTop: 100/10
    }
  })

  return (
    <ScrollView>
      {
        courses.map((course, i) => (
          <Card
            onPress={() => {navigation.navigate('CourseDetail', {
              course: course
            })}}
            key={i}
          >
            <Card.Cover source={{ uri: `${course.icon}` }} />
            
            <Card.Content>
              <Title>{course.title}</Title>
              <Paragraph>{course.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
            </Card.Actions>
          </Card>
        ))
      }
    </ScrollView>
  )
}

export default Home
