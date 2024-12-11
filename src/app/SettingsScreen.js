import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SettingsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Dynamic styles based on dark mode
  const dynamicStyles = darkMode ? darkModeStyles : lightModeStyles;

  return (
    <LinearGradient 
      colors={darkMode ? ['#121212', '#1E1E1E'] : ['#0096FF', '#A0D9FF']} 
      style={styles.container}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={darkMode ? "#FFF" : "#000"} />
        </TouchableOpacity>
        <Text style={[styles.title, dynamicStyles.text]}>Settings</Text>
      </View>

      {/* Account Settings */}
      <TouchableOpacity
        style={[styles.option, dynamicStyles.option]}
        onPress={() => navigation.navigate('AccountSettings')}
      >
        <Text style={[styles.optionText, dynamicStyles.text]}>Account Settings</Text>
      </TouchableOpacity>

      {/* Dark Mode Toggle */}
      <View style={[styles.option, dynamicStyles.option]}>
        <Text style={[styles.optionText, dynamicStyles.text]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
          thumbColor={darkMode ? '#0096FF' : '#FFF'}
          trackColor={{ false: '#CCC', true: '#007BFF' }}
        />
      </View>

      {/* Customization Button */}
      <TouchableOpacity
        style={[styles.option, dynamicStyles.option]}
        onPress={() => navigation.navigate('Customization')}
      >
        <Text style={[styles.optionText, dynamicStyles.text]}>Customization</Text>
      </TouchableOpacity>

      {/* Other Settings */}
      <TouchableOpacity style={[styles.option, dynamicStyles.option]}>
        <Text style={[styles.optionText, dynamicStyles.text]}>About Us</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity 
        style={[styles.logoutButton, dynamicStyles.logoutButton]} 
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],
        })}
      >
        <Text style={[styles.logoutButtonText, dynamicStyles.text]}>Logout</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNavigation, dynamicStyles.bottomNavigation]}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color={darkMode ? "#FFF" : "#000"} />
          <Text style={[styles.navText, dynamicStyles.text]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color={darkMode ? "#FFF" : "#000"} />
          <Text style={[styles.navText, dynamicStyles.text]}>Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Styles for SettingsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#0D0070',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    marginTop: 5,
  },
});

const lightModeStyles = StyleSheet.create({
  text: {
    color: '#333',
  },
  option: {
    backgroundColor: '#FFF',
  },
  logoutButton: {
    backgroundColor: '#007BFF',
  },
  bottomNavigation: {
    backgroundColor: '#0096FF',
  },
});

const darkModeStyles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
  option: {
    backgroundColor: '#333',
  },
  logoutButton: {
    backgroundColor: '#444',
  },
  bottomNavigation: {
    backgroundColor: '#121212',
  },
});

export default SettingsScreen;
