import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const TeamScreen = ({ navigation }) => {
  const { teams } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered teams based on the search query
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Teams</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Teams"
          placeholderTextColor="#FFF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Ionicons name="search" size={24} color="#FFF" />
      </View>

      {/* Teams List */}
      <FlatList
        data={filteredTeams}
        keyExtractor={(item) => item.id.toString()} // Use the team ID as the key
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.teamItem}
            onPress={() => navigation.navigate('TeamDetail', { teamId: item.id })}
          >
            <Ionicons name="people-outline" size={24} color="#FF4081" />
            <Text style={styles.teamText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {searchQuery ? 'No matching teams found.' : 'No teams yet.'}
          </Text>
        }
      />

      {/* Create Team Button */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateTeam')}
      >
        <Text style={styles.createButtonText}>Create a New Team</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
  },
  teamItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  teamText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#FFF',
  },
  createButton: {
    backgroundColor: '#0D0070',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default TeamScreen;
