import React, { useState, useContext, useEffect } from 'react';
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
  const [headingModalVisible, setHeadingModalVisible] = useState(false);
  const [headingStyle, setHeadingStyle] = useState('normal'); // Track selected heading style
  const [listType, setListType] = useState('none'); // Track list type (none, bullet, or numbered)

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

  const handleHeadingSelect = (style) => {
    setHeadingStyle(style);
    setHeadingModalVisible(false); // Hide the modal after selection
  };

  const toggleListType = () => {
    const newListType = listType === 'number' ? 'bullet' : (listType === 'bullet' ? 'none' : 'number');
    setListType(newListType);
  };

  const getHeadingStyle = () => {
    switch (headingStyle) {
      case 'heading1':
        return { fontSize: 24, fontWeight: 'bold' }; // Heading 1 is bold
      case 'heading2':
        return { fontSize: 20, fontWeight: 'normal' }; // Heading 2 is normal
      case 'heading3':
        return { fontSize: 18, fontWeight: 'normal' }; // Heading 3 is normal
      case 'heading4':
        return { fontSize: 16, fontWeight: 'normal' }; // Heading 4 is normal
      default:
        return { fontSize: 16 }; // Normal text
    }
  };

  const formatBodyWithList = (bodyText) => {
    const lines = bodyText.split('\n');
    if (listType === 'bullet') {
      return lines.map(line => `• ${line}`).join('\n');
    } else if (listType === 'number') {
      return lines.map((line, index) => `${index + 1}. ${line}`).join('\n');
    }
    return bodyText;
  };

  // Automatically format body text based on list type
  useEffect(() => {
    if (listType !== 'none') {
      setBody(formatBodyWithList(body));
    }
  }, [listType]);

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
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setHeadingModalVisible(!headingModalVisible)} // Toggle heading options
          >
            <Text style={styles.toolbarIconText}>Aa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setColorModalVisible(true)}
          >
            <Ionicons name="color-palette-outline" size={20} color="#0096FF" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={toggleListType} // Toggle list type
          >
            <Ionicons name={listType === 'number' ? 'list-number' : 'list-outline'} size={20} color="#0096FF" />
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
          style={[styles.bodyInput, { backgroundColor: selectedColor }, getHeadingStyle()]}
          placeholder="Write something..."
          placeholderTextColor="#AAA"
          value={body}
          onChangeText={text => setBody(text)} // Just set body text directly
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

      {/* Heading Options Modal */}
      <Modal transparent={true} visible={headingModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Heading Style</Text>
            <FlatList
              data={['heading1', 'heading2', 'heading3', 'heading4']}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.headingOption}
                  onPress={() => handleHeadingSelect(item)}
                >
                  <Text style={[styles.headingOptionText, headingStyle === item && styles.selectedHeading]}>
                    {item === 'heading1' ? 'Heading 1' : item === 'heading2' ? 'Heading 2' : item === 'heading3' ? 'Heading 3' : 'Heading 4'}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
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
  headingOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  headingOptionText: {
    fontSize: 18,
  },
  selectedHeading: {
    fontWeight: 'bold',
  },
});

export default AddNotesTasksScreen;
