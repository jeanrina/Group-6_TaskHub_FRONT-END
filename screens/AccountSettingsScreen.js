import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountSettingsScreen = () => {
  const [name, setName] = useState('Jeany Enterina');
  const [email, setEmail] = useState('jeanyenterina@gmail.com');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSave = () => {
    console.log('Saved:', { name, email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Setting</Text>
      <Icon name="person-circle" size={80} color="#007BFF" />
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <Icon
          name={passwordVisible ? 'eye' : 'eye-off'}
          size={24}
          color="gray"
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  editProfileButton: {
    marginVertical: 10,
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AccountSettingsScreen;