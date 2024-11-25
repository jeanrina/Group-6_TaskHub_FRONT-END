import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header with Bell Icon */}
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity
          style={styles.bellIcon}
          onPress={() => navigation.navigate('Reminder')} // Navigate to Reminder screen
        >
          <MaterialIcons name="notifications" size={30} color="#007BFF" />
        </TouchableOpacity>
      </View>

      {/* Account Settings */}
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate('AccountSettings')}
      >
        <Text style={styles.optionText}>Account Settings</Text>
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          thumbColor={darkMode ? '#007BFF' : '#fff'}
          trackColor={{ false: '#ccc', true: '#007BFF' }}
        />
      </View>

      {/* Other Settings */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Customization</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  bellIcon: {
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 16,
    color: '#007BFF',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SettingsScreen;
