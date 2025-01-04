import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const AddNotesTasksScreen = ({ navigation, route }) => {
  const { addNote, addTask } = useContext(AppContext);
  const { editMode = false, type = 'Note', item = {}, index } = route.params || {};
  const [title, setTitle] = useState(editMode ? item.title : '');
  const [body, setBody] = useState(editMode ? item.body : '');

  const handleSave = (saveType) => {
    if (!title.trim() || !body.trim()) {
      Alert.alert('Error', 'Please fill in both the title and body.');
      return;
    }

    const itemData = { title, body };

    if (editMode) {
      // Logic for updating a note or task in edit mode
      Alert.alert('Success', `${saveType} updated!`);
    } else {
      if (saveType === 'Note') {
        addNote(itemData);
      } else {
        addTask({ id: Date.now(), text: title, body, completed: false });
      }
      Alert.alert('Success', `${saveType} added!`);
    }

    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>
          {editMode ? `Edit ${type}` : 'Add Notes & Tasks'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('Note')}>
          <Text style={styles.saveButtonText}>Save as Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => handleSave('Task')}>
          <Text style={styles.saveButtonText}>Save as Tasks</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginLeft: 10 },
  inputContainer: { backgroundColor: '#FFF', borderRadius: 15, padding: 20, marginBottom: 20 },
  titleInput: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginBottom: 15,
  },
  bodyInput: { fontSize: 16, textAlignVertical: 'top', flex: 1 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  saveButton: { backgroundColor: '#0D0070', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  saveButtonText: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
});

export default AddNotesTasksScreen;
