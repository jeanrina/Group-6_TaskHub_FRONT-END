import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignInSignUpScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#0096FF', '#A0D9FF']} // Gradient background
      style={styles.container}
    >
      {/* Title and Subtitle */}
      <View style={styles.topContainer}>
        <LinearGradient
          colors={['#0046FF', '#0096FF']}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>TASKHUB</Text>
        </LinearGradient>
        <Text style={styles.subtitle}>
          Personal and Collaborative{'\n'}Task Management
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 20,
  },
  titleContainer: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
    letterSpacing: 0.5,
    opacity: 0.9,
  },
  buttonsContainer: {
    marginBottom: 60,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    width: '75%',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#0066FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
