import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from './supabaseClient'; // import the supabase client

export default function SignInScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("signIn");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async () => {
    if (!username) {
      setErrorMessage("Missing username or email");
      return;
    }
    
    if (!password) {
      setErrorMessage("Missing password");
      return;
    }
  
    // If all required fields are present, proceed to sign-in
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,  // Supabase treats email as username here
      password,
    });
  
    if (error) {
      setErrorMessage(error.message);
    } else {
      // On successful login, navigate to HomeScreen and pass the username
      navigation.navigate('Home', { username: data.user.email }); // or use data.user.user_metadata if you store username differently
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>TASKHUB</Text>
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={styles.tab} 
          onPress={() => {
            setActiveTab("signIn");
            navigation.navigate('SignIn');
          }}
        >
          <Text style={[styles.tabText, activeTab === "signIn" && styles.activeTabText]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.tab} 
          onPress={() => {
            setActiveTab("signUp");
            navigation.navigate('SignUp');
          }}
        >
          <Text style={[styles.tabText, activeTab === "signUp" && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Ionicons name="person-circle" size={100} color="#0094FF" style={styles.icon} />
      
      {/* Sign In Form */}
      <TextInput 
        style={styles.input} 
        placeholder="Email or Username" 
        placeholderTextColor="#aaa" 
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      {/* Sign In Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSignIn}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}
      <TouchableOpacity 
        style={styles.forgotPasswordContainer}
        onPress={() => navigation.navigate('ForgotPassword')} // Navigate to ForgotPasswordScreen
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Don't have an account link */}
      {activeTab === "signIn" && (
        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {
            setActiveTab("signUp");
            navigation.navigate('SignUp');
          }}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0094FF',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tab: {
    marginHorizontal: 10,
  },
  tabText: {
    fontSize: 22,
    color: '#0094FF',
    fontWeight: '600',
  },
  activeTabText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  button: {
    backgroundColor: '#0094FF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#0094FF',
    fontSize: 14,
    textAlign: 'center',
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  dontHaveAccountText: {
    fontSize: 16,
    color: '#777',
  },
  signUpLink: {
    fontSize: 16,
    color: '#0094FF',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
