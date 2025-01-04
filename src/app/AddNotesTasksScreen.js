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
    setTitle('');
    setBody('');

    // Navigate to PickDateTimeScreen and pass parameters
    navigation.navigate('PickDateTimeScreen', {
      saveType,        // Type of the saved item (Note or Task)
      noteTitle: title,  // Title of the note or task
    });

    // Go back to the previous screen
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
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSave('PickDateTime')}
        >
          <Text style={styles.saveButtonText}>Save as Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => handleSave('PickDateTime')}
        >
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
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  bodyInput: {
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
    borderRadius: 8,
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#0D0070',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#DDD',
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
  headingOption: {
    padding: 10,
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
