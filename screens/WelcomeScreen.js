import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Wave Design */}
      <View style={styles.waveContainer}>
        <View style={styles.topWave} />
        <View style={styles.bottomWave} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>TASKHUB</Text>
        <Text style={styles.subtitle}>
          Personal and Collaborative Task Management
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    zIndex: -1,
  },
  topWave: {
    position: 'absolute',
    width: '120%',
    height: '70%',
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: [{ scaleX: 1.5 }, { translateY: -30 }], // Curves and lifts the wave
  },
  bottomWave: {
    position: 'absolute',
    width: '120%',
    height: '60%',
    backgroundColor: '#69BFF8', // Lighter blue
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: [{ scaleX: 1.6 }, { translateY: 80 }], // Adjusts layer position
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%', // Adjusts content below the wave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // Rounded button edges
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#fff', // White button for "Sign Up"
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  signUpButtonText: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
