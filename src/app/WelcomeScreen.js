import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#0096FF', '#A0D9FF']}
      style={styles.container}
    >
      {/* Glassmorphism Card */}
      <BlurView intensity={50} tint="light" style={styles.glassCard}>
        <View style={styles.topContainer}>
          {/* Title with Gradient */}
          <LinearGradient
            colors={['#0066FF', '#0096FF']}
            style={styles.titleContainer}
          >
            <Text style={styles.title}>TASKHUB</Text>
          </LinearGradient>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Personal and Collaborative{'\n'}
            Task Management
          </Text>
        </View>
      </BlurView>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignInSignUp')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Space out the content
    alignItems: 'center',
  },
  glassCard: {
    width: width * 0.85,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 90, // Move the card towards the top
  },
  topContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    color: '#444',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.9,
  },
  button: {
    position: 'absolute', // Positioning the button at the bottom
    bottom: 50, // Distance from the bottom
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: '#0066FF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
});
