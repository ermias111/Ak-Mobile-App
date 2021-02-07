import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
// import { useForm } from 'react-hook-form'
import { View, Image, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@/Theme'
import { Avatar, Text, Card, Title, Paragraph } from 'react-native-paper'
import { navigate } from '@/Navigators/Root'
import { NavigationContainer } from '@react-navigation/native';
import { CourseDetail } from '@/Containers';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = ({ navigation }) => {
  const { Layout, Common } = useTheme()
  const [courses, setCourses] = useState([
    {
      title: "Accounting",
      preparedBy: "Girma",
      instructorPhoto: "2020-08-27T08:55:20.992Z_pexels-photo-220453.jpeg",
      length: 0,
      certificate: true,
      videos: [
        ""
      ],
      publishedDate: "2020-08-21T00:00:00.000Z",
      icon: "https://picsum.photos/677",
      enrolledStudents: 0,
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u",
      categoryId: "5f392e474ecbb20017ced439",
      rating: 2,
      totalDownloads: 0,
      updatedAt: "2020-08-21T00:00:00.000Z",
      about: "",
      isFree: false,
      courseFee: 234,
      requirements: "11 mathe",
      objectives: [
        "Revenue",
        "Expense",
        "Saving"
      ],
      id: "5f3f7a5482c92c0017f632b5"
    },
    {
      title: "Biology",
      preparedBy: "Girma",
      instructorPhoto: "2020-08-27T08:55:20.992Z_pexels-photo-220453.jpeg",
      length: 0,
      certificate: true,
      videos: [
        ""
      ],
      publishedDate: "2020-08-21T00:00:00.000Z",
      icon: "https://picsum.photos/627",
      enrolledStudents: 0,
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u",
      categoryId: "5f392e474ecbb20017ced439",
      rating: 2,
      totalDownloads: 0,
      updatedAt: "2020-08-21T00:00:00.000Z",
      about: "",
      isFree: false,
      courseFee: 234,
      requirements: "11 mathe",
      objectives: [
        "Revenue",
        "Expense",
        "Saving"
      ],
      id: "5f3f7a5482c92c0017f632b5"
    },
    {
      title: 'English for Beginners',
      preparedBy: "Girma",
      instructorPhoto: "2020-08-27T08:55:20.992Z_pexels-photo-220453.jpeg",
      length: 0,
      certificate: true,
      videos: [
        ""
      ],
      publishedDate: "2020-08-21T00:00:00.000Z",
      icon: "https://picsum.photos/679",
      enrolledStudents: 0,
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an u",
      categoryId: "5f392e474ecbb20017ced439",
      rating: 2,
      totalDownloads: 0,
      updatedAt: "2020-08-21T00:00:00.000Z",
      about: "",
      isFree: false,
      courseFee: 234,
      requirements: "11 mathe",
      objectives: [
        "Revenue",
        "Expense",
        "Saving"
      ],
      id: "5f3f7a5482c92c0017f632b5"
    }
  ])
  const styles = StyleSheet.create({
    card: {
      marginTop: 100/10
    },
    free_tag: {
      // color: "green",
      fontStyle: 'italic',
      textShadowColor: "green",
      textShadowRadius: 10,
      fontSize: 19,
      textAlign: 'right'
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
              <Title>
                {course.title} 
                
              </Title>
              <Paragraph>{course.description}</Paragraph>
              <Text style={styles.free_tag}> Free</Text> 
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
