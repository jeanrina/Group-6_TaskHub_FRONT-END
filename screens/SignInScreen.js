import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignInScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (name && password) {
      // Simple validation (you can replace this with actual authentication logic)
      navigation.navigate('Dashboard'); // Navigate to the Dashboard screen
    } else {
      alert('Please enter your name and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASKHUB</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.activeTab}>Sign In</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.inactiveTab}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <FontAwesome name="user-circle" size={80} color="#1E90FF" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <FontAwesome name="eye" size={20} color="#aaa" style={styles.eyeIcon} />
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E90FF',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginRight: 10,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#aaa',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  signInButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
