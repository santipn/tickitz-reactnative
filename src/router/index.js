import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ButtomNavigator, Navbar, Footer } from '../components'
import { Home, Movies, Booking, Profile, Splash } from '../screens'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import ForgotPassword from '../screens/Auth/ForgotPassword';
import NewPassword from '../screens/Auth/NewPassword';
import NowShowing from '../screens/Home/NowShowing';
import Upcoming from '../screens/Home/Upcoming';
import Membership from '../screens/Home/Membership';
import ViewAll from '../screens/Movies/ViewAll';
import DetailMovie from '../screens/Movies/DetailMovie';
import Payment from '../screens/Payment';
import IconHome from 'react-native-vector-icons/Entypo'
import IconMovie from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBooking from 'react-native-vector-icons/FontAwesome'
import IconProfile from 'react-native-vector-icons/FontAwesome'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}} >
      <Tab.Screen name="Homepage" component={Home} options={{
        tabBarIcon: ({focused}) => (
          <IconHome name="home" size={25} style={{ 
            color: focused ? '#5F2EEA' : '#6E7191'
          }}/>
        ),
        tabBarLabelStyle: {
          fontSize: 12
        }
      }} />
      <Tab.Screen name="Movies" component={Movies} options={{
        tabBarIcon: ({focused}) => (
          <IconMovie name="movie-open" size={25} style={{ 
            color: focused ? '#5F2EEA' : '#6E7191'
          }}/>
        ),
        tabBarLabelStyle: {
          fontSize: 12
        }
      }}/>
      <Tab.Screen name="Booking" component={Booking} options={{
        tabBarIcon: ({focused}) => (
          <IconBooking name="bookmark" size={25} style={{ 
            color: focused ? '#5F2EEA' : '#6E7191'
          }}/>
        ),
        tabBarLabelStyle: {
          fontSize: 12
        }
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused}) => (
          <IconProfile name="user-circle-o" size={25} style={{ 
            color: focused ? '#5F2EEA' : '#6E7191'
          }}/>
        ),
        tabBarLabelStyle: {
          fontSize: 12
        }
      }}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={MainApp} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="NowShowing" component={NowShowing} />
      <Stack.Screen name="UpComing" component={Upcoming} />
      <Stack.Screen name="Membership" component={Membership} />
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="DetailMovie" component={DetailMovie} />
      <Stack.Screen name="ViewAll" component={ViewAll} />
      <Stack.Screen name="Payment" component={Payment} />
    
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})