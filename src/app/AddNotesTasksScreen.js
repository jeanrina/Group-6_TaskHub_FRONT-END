import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const AddNotesTasksScreen = ({ navigation, route }) => {
  const { addNote, addTask, editNote, editTask } = useContext(AppContext);
  const { editMode, type, item, index } = route.params || {};
  const [title, setTitle] = useState(editMode ? item.title : '');
  const [body, setBody] = useState(editMode ? item.body : '');

  const handleSave = () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert('Error', 'Please fill in both the title and body.');
      return;
    }

    if (editMode) {
      if (type === 'Note') {
        editNote(index, { title, body });
        Alert.alert('Success', 'Note updated!');
      }
      if (type === 'Task') {
        editTask(index, { text: title, body });
        Alert.alert('Success', 'Task updated!');
      }
    } else {
      if (type === 'Note') {
        addNote({ title, body });
        Alert.alert('Success', 'Note added!');
      }
      if (type === 'Task') {
        addTask({ id: Date.now(), text: title, body, completed: false });
        Alert.alert('Success', 'Task added!');
      }
    }

    // Clear the inputs after saving
    setTitle('');
    setBody('');
    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{editMode ? `Edit ${type}` : 'Add Notes & Tasks'}</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
      <View style={styles.toolbar}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.toolbarIconText}>Aa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="color-palette-outline" size={20} color="#0096FF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="list-outline" size={20} color="#0096FF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={20} color="#0096FF" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          placeholderTextColor="#AAA"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.bodyInput}
          placeholder="Write something..."
          placeholderTextColor="#AAA"
          value={body}
          onChangeText={setBody}
          multiline
        />
      </View>

    {/* Save Buttons */}
    <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSave('Note')}
        >
          <Text style={styles.saveButtonText}>Save as Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSave('Task')}
        >
          <Text style={styles.saveButtonText}>Save as Tasks</Text>
        </TouchableOpacity>
      </View>  

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
    paddingHorizontal: 20, 
    paddingTop: 40 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 30 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginLeft: 10 
  },
  inputContainer: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 20, 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    minHeight: 400,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 8,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  toolbarIconText: {
    fontSize: 16,
    color: '#0096FF',
    fontWeight: 'bold',
  },
  titleInput: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    borderBottomWidth: 1, 
    borderBottomColor: '#DDD', 
    marginBottom: 15 
  },
  bodyInput: { 
    fontSize: 16, 
    textAlignVertical: 'top', 
    flex: 1 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#0D0070',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007BFF',
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

export default AddNotesTasksScreen;
