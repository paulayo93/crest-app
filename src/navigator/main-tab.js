import React from 'react';
import { COLORS, ROUTES } from './../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import {Home, Assets, Account, Support, SaveUp} from './../screens/main';

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
        marginTop: 6,
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
        //   tabBarIcon: ({ focused }) => (
        //     <Image
        //       source={focused ? dashboard : dashboard2}
        //       style={styles.icon}
        //     />
        //   ),
      }}
    />

    <Tab.Screen
      name={ROUTES.ASSETS}
      component={Assets}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Trips
          </Text>
        ),
        //   tabBarIcon: ({ focused }) => (
        //     <Image source={focused ? trips : trips2} style={styles.icon} />
        //   ),
      }}
    />

    <Tab.Screen
      name={ROUTES.SUPPORT}
      component={Support}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Profile
          </Text>
        ),
        //   tabBarIcon: ({ focused }) => (
        //     <Image source={focused ? profile2 : profile} style={styles.icon} />
        //   ),
      }}
    />
    <Tab.Screen
      name={ROUTES.SAVEUP}
      component={SaveUp}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Profile
          </Text>
        ),
        //   tabBarIcon: ({ focused }) => (
        //     <Image source={focused ? profile2 : profile} style={styles.icon} />
        //   ),
      }}
    />
    <Tab.Screen
      name={ROUTES.ACCOUNT}
      component={Account}
      options={{
        tabBarLabel: ({ focused }) => (
          <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
            Profile
          </Text>
        ),
        //   tabBarIcon: ({ focused }) => (
        //     <Image source={focused ? profile2 : profile} style={styles.icon} />
        //   ),
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
    // color: COLORS.SUB_TEXT,
  },
  activeLabelStyle: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
    marginTop: 4,
    // color: COLORS.BLUE._400,
  },
  container: {
    backgroundColor: COLORS.WHITE,
  },
});