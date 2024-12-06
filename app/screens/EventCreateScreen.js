// screens/EventCreateScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function EventCreateScreen({ navigation }) {
  const { accessToken } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const createEvent = async () => {
    // Validate inputs
    if (!title.trim()) {
      alert('Please enter an event title');
      return;
    }

    try {
      const eventData = {
        summary: title,
        description: description,
        start: { dateTime: startDate.toISOString() },
        end: { dateTime: endDate.toISOString() }
      };

      await axios.post('http://YOUR_BACKEND_URL/events', eventData, {
        headers: { 
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      // Navigate back to calendar after successful event creation
      navigation.navigate('Calendar');
    } catch (error) {
      console.error('Event creation failed:', error);
      alert('Failed to create event. Please try again.');
    }
  };

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Event Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter event title"
        required
      />

      <Text style={styles.label}>Description (Optional)</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter event description"
        multiline
      />

      <Text style={styles.label}>Start Date and Time</Text>
      <TouchableOpacity 
        style={styles.dateButton}
        onPress={() => setShowStartDatePicker(true)}
      >
        <Text>{startDate.toLocaleString()}</Text>
      </TouchableOpacity>
      {showStartDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={handleStartDateChange}
        />
      )}

      <Text style={styles.label}>End Date and Time</Text>
      <TouchableOpacity 
        style={styles.dateButton}
        onPress={() => setShowEndDatePicker(true)}
      >
        <Text>{endDate.toLocaleString()}</Text>
      </TouchableOpacity>
      {showEndDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={handleEndDateChange}
        />
      )}

      <TouchableOpacity 
        style={styles.createButton}
        onPress={createEvent}
      >
        <Text style={styles.createButtonText}>Create Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  multilineInput: {
    height: 100,
  },
  dateButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  createButton: {
    backgroundColor: '#009688',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});