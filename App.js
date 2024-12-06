// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CalendarScreen from './screens/CalendarScreen';
import EventCreateScreen from './screens/EventCreateScreen';
import AuthProvider from './context/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen 
            name="Calendar" 
            component={CalendarScreen} 
            options={{ title: 'My Calendar' }}
          />
          <Stack.Screen 
            name="CreateEvent" 
            component={EventCreateScreen} 
            options={{ title: 'Create Event' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}