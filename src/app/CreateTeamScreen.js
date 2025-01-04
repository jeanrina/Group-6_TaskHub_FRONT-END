import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const CreateTeamScreen = ({ navigation }) => {
  const [teamName, setTeamName] = useState('');
  const { addTeam } = useContext(AppContext);

  const handleCreateTeam = () => {
    if (!teamName.trim()) {
      Alert.alert('Error', 'Team name cannot be empty.');
      return;
    }

    addTeam(teamName); // Add team to context
    Alert.alert('Success', `Team "${teamName}" created!`);
    setTeamName('');
    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Team</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter team name"
          placeholderTextColor="#aaa"
          value={teamName}
          onChangeText={setTeamName}
        />
        <TouchableOpacity style={styles.createButton} onPress={handleCreateTeam}>
          <Text style={styles.createButtonText}>Create Team</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  inputContainer: {
    marginTop: 50,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#0D0070',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CreateTeamScreen;
