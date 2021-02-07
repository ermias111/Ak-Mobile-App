import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexExampleContainer, SignIn, SignUp, Home, CourseDetail, Classroom } from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './DrawerContent'

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

// @refresh reset
const MainNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator 
      edgeWidth={0} 
      drawerContent={props => <DrawerContent {...props} />}
      >
      <Drawer.Screen 
        name="SignIn" 
        component={SignIn}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={{
          title: 'Course Detail',
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Classroom"
        component={Classroom}
        options={{
          title: 'Classroom',
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigator
