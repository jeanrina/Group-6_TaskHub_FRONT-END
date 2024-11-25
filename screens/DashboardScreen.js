import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TASKHUB</Text>
      <View style={styles.userInfo}>
        <Icon name="person-circle" size={50} color="#007BFF" />
        <Text style={styles.username}>Jeany Enterina</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="notifications" size={24} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#555"
      />
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Icon name="document-text" size={30} color="#007BFF" />
          <Text style={styles.cardText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="people" size={30} color="#007BFF" />
          <Text style={styles.cardText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="calendar" size={30} color="#007BFF" />
          <Text style={styles.cardText}>Calendar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Icon name="home" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={24} color="#007BFF" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#007BFF',
  },
  searchBar: {
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  cardText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#007BFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#007BFF',
    paddingTop: 10,
  },
  footerText: {
    color: '#007BFF',
    fontSize: 14,
  },
});

export default DashboardScreen;