import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    Alert.alert('Date Selected', `You picked: ${day.dateString}`);
  };

  return (
    <LinearGradient colors={['#0096FF', '#A0D9FF']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Calendar</Text>
        </View>
        <Ionicons name="menu-outline" size={28} color="#FFF" />
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Text style={styles.sectionTitle}>Select date</Text>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#0096FF' },
          }}
          theme={{
            calendarBackground: '#000080',
            dayTextColor: '#FFF',
            monthTextColor: '#FFF',
            todayTextColor: '#FFF',
            arrowColor: '#FFF',
            textDayFontWeight: '700',
            selectedDayBackgroundColor: '#0078D4',
          }}
          style={styles.calendar}
        />
        {/* Selected Event Example */}
        {selectedDate && (
          <View style={styles.eventBubble}>
            <Text style={styles.eventText}>Exercise</Text>
            <Text style={styles.eventDate}>{selectedDate}</Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
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
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10, // Adds spacing between the back arrow and title
  },
  calendarContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#000080',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  calendar: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: '600',
  },
  eventBubble: {
    position: 'absolute',
    top: 80,
    left: '30%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  eventText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  eventDate: {
    fontSize: 12,
    color: '#888',
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

export default CalendarScreen;
