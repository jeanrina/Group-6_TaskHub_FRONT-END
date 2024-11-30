import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Add this package if not already installed
import { Ionicons } from '@expo/vector-icons'; // Add this package for icons

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#005bea', '#00C6FB']} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>TASKHUB</Text>
          <Text style={styles.subtitle}>Personal & Collaborative Task Management</Text>
        </View>
      </LinearGradient>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Ionicons name="log-in-outline" size={24} color="#00A3FF" style={styles.icon} />
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Ionicons name="person-add-outline" size={24} color="#00A3FF" style={styles.icon} />
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 20,
    elevation: 4, // Add slight elevation for a subtle shadow
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#d6f3ff',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#e6f4f9',
    borderRadius: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#75CFEB',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00A3FF',
    marginLeft: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
});
