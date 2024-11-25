import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from './screens/GetStartedScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import DashboardScreen from './screens/DashboardScreen';
import ReminderScreen from './screens/ReminderScreen';
import SettingsScreen from './screens/SettingsScreen';
import AccountSettingsScreen from './screens/AccountSettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='GetStarted' component={GetStartedScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} />
        <Stack.Screen name='Reminder' component={ReminderScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
        <Stack.Screen name='AccountSettings' component={AccountSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
