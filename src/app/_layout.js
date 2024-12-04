import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from '../context/AppContext';

import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import ReminderScreen from './ReminderScreen';
import SettingsScreen from './SettingsScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import AccountSettingsScreen from './AccountSettingsScreen';
import CustomizationScreen from './CustomizationScreen';
import NotesTaskHomeScreen from './NotesTaskHomeScreen';
import AddNotesTasksScreen from './AddNotesTasksScreen';
<<<<<<< HEAD
import TeamScreen from './TeamScreen';
import CreateTeamScreen from './CreateTeamScreen';
import SoftEngScreen from './SoftEngScreen';
=======
>>>>>>> 777dc75d3db35e7b3db9b9417a9364b1bad4f086

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
        <Stack.Screen name="Customization" component={CustomizationScreen} />
        <Stack.Screen name="NotesTask" component={NotesTaskHomeScreen} />
        <Stack.Screen name="AddNotesTasks" component={AddNotesTasksScreen} />
<<<<<<< HEAD
        <Stack.Screen name="TeamScreen" component={TeamScreen} />
        <Stack.Screen name="CreateTeamScreen" component={CreateTeamScreen} />
        <Stack.Screen name="SoftEngScreen" component={SoftEngScreen} />


=======
>>>>>>> 777dc75d3db35e7b3db9b9417a9364b1bad4f086
      </Stack.Navigator>
      </AppProvider>
  );
}
