import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const DashboardScreen = () => {
  const navigation = useNavigation(); // Hook to navigate between screens

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>TASKHUB</Text>
        <View style={styles.profileSection}>
          <FontAwesome name="user-circle" size={50} color="#1E90FF" />
          <Text style={styles.profileName}>Jeany Enterina</Text>
        </View>
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => navigation.navigate('Reminder')} // Navigate to Reminder screen
        >
          <MaterialIcons name="notifications" size={30} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#555"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Task Categories */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <FontAwesome name="file-text" size={24} color="#FF6347" />
          <Text style={styles.categoryText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <FontAwesome name="users" size={24} color="#1E90FF" />
          <Text style={styles.categoryText}>Team</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <FontAwesome name="calendar" size={24} color="#8A2BE2" />
          <Text style={styles.categoryText}>Calendar</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="home" size={24} color="#1E90FF" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="cog" size={24} color="#1E90FF" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  notificationIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 20,
  },
  categories: {
    flex: 1,
    justifyContent: 'space-around',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    marginTop: 5,
    color: '#1E90FF',
  },
});

export default DashboardScreen;
