import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const ReminderScreen = ({ navigation }) => {
  const { tasks = [], notes = [] } = useContext(AppContext); // Default to empty arrays if undefined

  // Combine notes and tasks into one list (if needed)
  const reminderList = [...tasks, ...notes];

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Reminder</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Reminder List */}
      <FlatList
        data={reminderList}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()} // Safely use `id` or fallback to index
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Ionicons name="alarm-outline" size={24} color="#FF4081" />
            <Text style={styles.reminderText}>{item.title}</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>
                navigation.navigate('AddNotesTasks', {
                  editMode: true,
                  type: item.completed ? 'Task' : 'Note', // Add appropriate type (Note or Task)
                  item,
                  index: reminderList.indexOf(item), // Pass the index for editing
                })
              }
            >
              <Ionicons name="pencil" size={20} color="#FF4081" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noRemindersText}>No reminders added yet!</Text>}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color="#FFF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  reminderList: {
    flex: 1,
    marginTop: 20,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  reminderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
    flex: 1,
  },
  editButton: {
    marginLeft: 10,
  },
  noRemindersText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0096FF',
    paddingVertical: 15,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
});

export default ReminderScreen;
