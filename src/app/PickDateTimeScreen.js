import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const PickDateTimeScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date'); // 'date' or 'time'

  const { saveType, noteTitle } = route.params || {}; // Get parameters from route

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios'); // Keep iOS picker visible
    if (selectedDate) setDate(selectedDate); // Update date only if selected
  };

  const showMode = (currentMode) => {
    setShowPicker(true);
    setMode(currentMode);
  };

  const handleSave = () => {
    // This is where you can save or pass the picked date and time
    console.log(`Saved for ${saveType}: ${noteTitle} at ${date}`);
    navigation.goBack(); // Return to the previous screen
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Pick Date & Time</Text>
      </View>

      {/* Selected Date and Time */}
      <View style={styles.selectedContainer}>
        <Text style={styles.selectedText}>Selected:</Text>
        <Text style={styles.selectedValue}>{date.toLocaleString()}</Text>
      </View>

      {/* Buttons to Open Pickers */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.pickButton}
          onPress={() => showMode('date')}
        >
          <Ionicons name="calendar-outline" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Pick a Date</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.pickButton}
          onPress={() => showMode('time')}
        >
          <Ionicons name="time-outline" size={20} color="#FFF" />
          <Text style={styles.buttonText}>Pick a Time</Text>
        </TouchableOpacity>
      </View>

      {/* DateTimePicker */}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Date & Time</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
  selectedContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedText: {
    fontSize: 18,
    color: '#FFF',
  },
  selectedValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  pickButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D0070',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 5,
  },
  saveButton: {
    backgroundColor: '#FFD700',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PickDateTimeScreen;
