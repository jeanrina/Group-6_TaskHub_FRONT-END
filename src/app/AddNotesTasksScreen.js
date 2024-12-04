import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const AddNotesTasksScreen = ({ navigation, route }) => {
  const { addNote, addTask, editNote, editTask } = useContext(AppContext);
  const { editMode, type, item, index } = route.params || {};
  const [title, setTitle] = useState(editMode ? item.title : '');
  const [body, setBody] = useState(editMode ? item.body : '');
  const [selectedColor, setSelectedColor] = useState('#FFF'); // Default color
  const [colorModalVisible, setColorModalVisible] = useState(false);

  const colors = ['#FFFFFF', '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2DFDB', '#C8E6C9'];

  const handleSave = () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert('Error', 'Please fill in both the title and body.');
      return;
    }

    const noteOrTask = { title, body, color: selectedColor };

    if (editMode) {
      if (type === 'Note') {
        editNote(index, noteOrTask);
        Alert.alert('Success', 'Note updated!');
      } else {
        editTask(index, { ...noteOrTask, text: title });
        Alert.alert('Success', 'Task updated!');
      }
    } else {
      if (type === 'Note') {
        addNote(noteOrTask);
        Alert.alert('Success', 'Note added!');
      } else {
        addTask({ ...noteOrTask, id: Date.now(), text: title, completed: false });
        Alert.alert('Success', 'Task added!');
      }
    }

    setTitle('');
    setBody('');
    navigation.goBack();
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{editMode ? `Edit ${type}` : 'Add Notes & Tasks'}</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.toolbarIconText}>Aa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setColorModalVisible(true)}
          >
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
          style={[styles.titleInput, { backgroundColor: selectedColor }]}
          placeholder="Title"
          placeholderTextColor="#AAA"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.bodyInput, { backgroundColor: selectedColor }]}
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

      {/* Color Picker Modal */}
      <Modal transparent={true} visible={colorModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Color</Text>
            <FlatList
              data={colors}
              keyExtractor={(item) => item}
              numColumns={5}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.colorOption, { backgroundColor: item }]}
                  onPress={() => {
                    setSelectedColor(item);
                    setColorModalVisible(false);
                  }}
                />
              )}
            />
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // Add or modify styles to include modal and color picker options
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
  titleInput: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
  },
  bodyInput: {
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
    borderRadius: 8,
    padding: 10,
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
});

export default AddNotesTasksScreen;
