// screens/CalendarScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function CalendarScreen({ navigation }) {
  const { accessToken } = useAuth();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://YOUR_BACKEND_URL/events', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      setEvents(response.data);

      // Mark dates with events
      const eventDates = response.data.reduce((acc, event) => {
        const date = moment(event.start.dateTime).format('YYYY-MM-DD');
        acc[date] = { marked: true, dotColor: 'red' };
        return acc;
      }, {});

      setMarkedDates(eventDates);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.summary}</Text>
      <Text>{moment(item.start.dateTime).format('h:mm A')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        monthFormat={'MMMM yyyy'}
        theme={{
          selectedDayBackgroundColor: '#009688',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#009688',
        }}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('CreateEvent')}
      >
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>

      <View style={styles.eventListContainer}>
        <Text style={styles.eventListTitle}>
          Events on {moment(selectedDate).format('MMMM D, YYYY')}
        </Text>
        <FlatList
          data={events.filter(event => 
            moment(event.start.dateTime).format('YYYY-MM-DD') === selectedDate
          )}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.noEventsText}>No events on this day</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  addButton: {
    backgroundColor: '#009688',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eventListContainer: {
    flex: 1,
    padding: 10,
  },
  eventListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventTitle: {
    fontWeight: 'bold',
  },
  noEventsText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});