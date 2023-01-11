import React from 'react';
import { COLORS, ROUTES } from './../constants';
import {Text} from './../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import {Home, Assets, Account, Support, SaveUp} from './../screens/main';
import {HomeIcon, AssetsIcon, SaveUpIcon, SupportIcon, AccountIcon} from './../../assets/icons'

const Tab = createBottomTabNavigator();

const MainTab = () => (

  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.container,
      screenContainerStyle: styles.container,
      tabBarActiveBackgroundColor: null,
      tabBarItemStyle: {
        marginBottom: 2,
        paddingTop: 10,
      },
    }}
  >
    <Tab.Screen
      name={ROUTES.HOME}
      component={Home}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Home
          </Text>
        ),
          tabBarIcon: ({ focused }) => (
           <HomeIcon  focused={focused}/>
          ),
      }}
    />

    <Tab.Screen
      name={ROUTES.ASSETS}
      component={Assets}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Assets
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <AssetsIcon  focused={focused}/>
         ),
      }}
    />

    <Tab.Screen
      name={ROUTES.SAVEUP}
      component={SaveUp}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Save Up
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <SaveUpIcon  focused={focused}/>
         ),
      }}
    />
    <Tab.Screen
      name={ROUTES.SUPPORT}
      component={Support}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Support
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <SupportIcon  focused={focused}/>
         ),
      }}
    />
    <Tab.Screen
      name={ROUTES.ACCOUNT}
      component={Account}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Account
          </Text>
        ),
        tabBarIcon: ({ focused }) => (
          <AccountIcon  focused={focused}/>
         ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  labelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'normal',
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
    color: '#262C55',
    opacity: 0.5

  },
  activeLabelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
    color: '#407BFF',
  },
  container: {
    backgroundColor: COLORS.WHITE,
  },
});