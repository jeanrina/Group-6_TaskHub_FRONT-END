import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Reminder Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
});

export default ReminderScreen;
