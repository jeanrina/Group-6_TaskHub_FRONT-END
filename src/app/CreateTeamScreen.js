import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CreateTeamScreen = ({ navigation }) => {
  const [teamName, setTeamName] = useState('');

  return (
    <LinearGradient
      colors={['#FFFFFF', '#A0D9FF']}
      style={styles.container}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TASKHUB</Text>
      </View>

      {/* Team Icon and Title */}
      <View style={styles.teamHeader}>
        <Ionicons name="people-outline" size={50} color="#000066" />
        <Text style={styles.teamTitle}>Team</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter team name"
          placeholderTextColor="#A0A0A0"
          value={teamName}
          onChangeText={setTeamName}
        />
        <TouchableOpacity 
          style={styles.createButton} 
          onPress={() => {
            // Add your create team logic here
            console.log('Team Created:', teamName);
          }}
        >
          <Text style={styles.createButtonText}>Create Team</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 180,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  teamHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 15,
  },
  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  createButton: {
    backgroundColor: '#004BA0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CreateTeamScreen;
