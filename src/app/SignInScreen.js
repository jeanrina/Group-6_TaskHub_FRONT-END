import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASKHUB</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {/* Forgot Password Link */}
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>
          Forgot Password?
        </Text>
      </View>
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  form: {
    width: '80%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginBottom: 10, 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#007BFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
