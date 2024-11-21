import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !name || !password || !verifyPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== verifyPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Proceed to the Dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASKHUB</Text>
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.inactiveTab}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.activeTab}>Sign up</Text>
      </View>
      <Text style={styles.subtitle}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Verify password"
          secureTextEntry
          value={verifyPassword}
          onChangeText={setVerifyPassword}
        />
        <FontAwesome name="eye" size={20} color="#aaa" style={styles.eyeIcon} />
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
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
    marginLeft: 10,
  },
  inactiveTab: {
    fontSize: 18,
    color: '#aaa',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
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
  signUpButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
