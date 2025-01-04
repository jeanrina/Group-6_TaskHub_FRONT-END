import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, CheckBox, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';

const NotesTaskHomeScreen = ({ navigation }) => {
  const { notes, tasks, removeNote, removeTask } = useContext(AppContext);
  const [showNotes, setShowNotes] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [taskStatus, setTaskStatus] = useState({});
  const [noteStatus, setNoteStatus] = useState({});

  // Toggle task completion status
  const toggleTaskStatus = (id) => {
    setTaskStatus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Toggle note completion status
  const toggleNoteStatus = (index) => {
    setNoteStatus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Delete confirmation
  const confirmDelete = (type, idOrIndex) => {
  Alert.alert(
    'Delete Confirmation',
    `Are you sure you want to delete this ${type}?`, // Corrected string interpolation
    [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => {
          console.log("Deleting", type, idOrIndex); // Debug log for delete action
          if (type === 'note') {
            removeNote(idOrIndex);
          }
          if (type === 'task') {
            removeTask(idOrIndex);
          }
        },
      },
    ],
    { cancelable: true }
  );
};

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Notes and Tasks</Text>
      </View>

      {/* Add Notes and Tasks */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNotesTasks')}
      >
        <Text style={styles.addButtonText}>Add Notes and Task</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        {/* Notes Dropdown */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setShowNotes((prev) => !prev)}
        >
          <Ionicons name="document-text-outline" size={24} color="#0096FF" />
          <Text style={styles.optionText}>Notes</Text>
          <Ionicons
            name={showNotes ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#0096FF"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
        {showNotes && (
          <View style={styles.dropdown}>
            {notes.map((note, index) => (
              <View key={index} style={styles.listItem}>
                <CheckBox
                  value={noteStatus[index] || false}
                  onValueChange={() => toggleNoteStatus(index)}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.listText,
                    noteStatus[index] && { textDecorationLine: 'line-through', color: '#888' },
                  ]}
                >
                  {note.title}
                </Text>
                <Text style={styles.listText}>{note.body}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AddNotesTasks', {
                        editMode: true,
                        type: 'Note',
                        item: note,
                        index,
                      })
                    }
                  >
                    <Ionicons name="create-outline" size={24} color="#0096FF" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => confirmDelete('note', index)}>
                    <Ionicons name="trash-outline" size={24} color="#FF3D00" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Tasks Dropdown */}
        <TouchableOpacity
          style={styles.option}
          onPress={() => setShowTasks((prev) => !prev)}
        >
          <Ionicons name="checkmark-circle-outline" size={24} color="#D81B60" />
          <Text style={styles.optionText}>Tasks</Text>
          <Ionicons
            name={showTasks ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#D81B60"
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
        {showTasks && (
          <View style={styles.dropdown}>
            {tasks.map((task) => (
              <View key={task.id} style={styles.listItem}>
                <CheckBox
                  value={taskStatus[task.id] || false}
                  onValueChange={() => toggleTaskStatus(task.id)}
                  style={styles.checkbox}
                />
                <Text
                  style={[
                    styles.listText,
                    taskStatus[task.id] && { textDecorationLine: 'line-through', color: '#888' },
                  ]}
                >
                  {task.text}
                </Text>
                <Text style={styles.listText}>{task.body}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AddNotesTasks', {
                        editMode: true,
                        type: 'Task',
                        item: task,
                        index: task.id,
                      })
                    }
                  >
                    <Ionicons name="create-outline" size={24} color="#0096FF" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => confirmDelete('task', task.id)}>
                    <Ionicons name="trash-outline" size={24} color="#FF3D00" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginLeft: 10 },
  addButton: {
    marginBottom: 20,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#0D0070',
  },
  addButtonText: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  optionText: { fontSize: 18, fontWeight: 'bold', color: '#333', marginLeft: 15 },
  dropdown: { backgroundColor: '#F0F0F0', borderRadius: 10, padding: 10, marginBottom: 15 },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  listText: { fontSize: 16, flex: 1 },
  icons: { flexDirection: 'row', gap: 10 },
  checkbox: { marginRight: 10 },
  scrollView: { marginBottom: 80 },
});

export default NotesTaskHomeScreen;