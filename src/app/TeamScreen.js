import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const TeamScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#FFFFFF", "#A0D9FF"]} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TASKHUB</Text>
      </View>

      {/* Team Icon and Title */}
      <View style={styles.teamHeader}>
        <Ionicons name="people-outline" size={50} color="#000066" />
        <Text style={styles.teamTitle}>Team</Text>
      </View>

      {/* Team List */}
      <View style={styles.teamList}>
        <TouchableOpacity
          style={styles.teamButton}
          onPress={() => navigation.navigate("SoftEngScreen")}
        >
          <Text style={styles.teamText}>Soft Eng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <Text style={styles.teamText}>Mob Prog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <Text style={styles.teamText}>Group 8 IAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.teamButton}>
          <Text style={styles.teamText}>Group 3 Techno</Text>
        </TouchableOpacity>
      </View>

      {/* Create Team Button */}
      <TouchableOpacity style={styles.createTeamButton} onPress={() => navigation.navigate("CreateTeamScreen")}>
        <Text style={styles.createTeamText}>Create a team</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home-outline" size={24} color="#FFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Settings")}>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 180,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
  },
  teamHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 15,
  },
  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    marginLeft: 10,
  },
  teamList: {
    paddingHorizontal: 20,
  },
  teamButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  teamText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  createTeamButton: {
    backgroundColor: '#004BA0',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  createTeamText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004BA0',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default TeamScreen;
