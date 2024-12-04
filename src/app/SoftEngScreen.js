import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SoftEngScreen = ({ navigation }) => {
  const [showNotes, setShowNotes] = useState(false);

  const notes = ['Script', 'Presentation Outline'];

  return (
    <LinearGradient colors={['#E0F7FF', '#FFFFFF']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Soft Eng</Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteText}>Invite</Text>
        </TouchableOpacity>
      </View>

      {/* Add New Item Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNotesTasks')}
      >
        <Text style={styles.addButtonText}>Add New Item</Text>
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
      </TouchableOpacity>

      <ScrollView>
        {/* Notes Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setShowNotes(!showNotes)}
        >
          <Text style={styles.sectionHeaderText}>Notes</Text>
          <Ionicons
            name={showNotes ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
        {showNotes && (
          <View style={styles.sectionContent}>
            {notes.map((note, index) => (
              <View key={index} style={styles.noteItem}>
                <Text style={styles.noteText}>{note}</Text>
                <View style={styles.noteActions}>
                  <TouchableOpacity>
                    <Ionicons name="create-outline" size={20} color="#0096FF" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={20} color="#D81B60" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Tasks Section */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => navigation.navigate('Tasks')}
        >
          <Text style={styles.sectionHeaderText}>Tasks</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#0096FF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#0096FF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  inviteButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#0096FF',
    borderRadius: 20,
  },
  inviteText: {
    fontSize: 16,
    color: '#FFF',
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#0096FF',
    borderRadius: 25,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  noteActions: {
    flexDirection: 'row',
    gap: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navText: {
    fontSize: 12,
    color: '#0096FF',
    textAlign: 'center',
  },
});

export default SoftEngScreen;
