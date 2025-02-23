import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = ({ navigation, currentRoute }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.item}>
        <Ionicons 
          name={currentRoute === 'index' ? "home" : "home-outline"} 
          size={24} 
          color={currentRoute === 'index' ? "#007AFF" : "#666"} 
        />
        <Text style={[styles.label, currentRoute === 'index' && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('activity')} style={styles.item}>
        <Ionicons 
          name={currentRoute === 'activity' ? "pulse" : "pulse-outline"} 
          size={24} 
          color={currentRoute === 'activity' ? "#007AFF" : "#666"} 
        />
        <Text style={[styles.label, currentRoute === 'activity' && styles.activeLabel]}>Activity</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('learn')} 
        style={[styles.learnButton, currentRoute === 'learn' && styles.activeLearnButton]}
      >
        <View style={styles.learnContent}>
          <Ionicons name="book-outline" size={28} color="white" />
          <Text style={styles.learnLabel}>Learn</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('earn')} style={styles.item}>
        <Ionicons 
          name={currentRoute === 'earn' ? "cash" : "cash-outline"} 
          size={24} 
          color={currentRoute === 'earn' ? "#007AFF" : "#666"} 
        />
        <Text style={[styles.label, currentRoute === 'earn' && styles.activeLabel]}>Earn</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('settings')} style={styles.item}>
        <Ionicons 
          name={currentRoute === 'settings' ? "settings" : "settings-outline"} 
          size={24} 
          color={currentRoute === 'settings' ? "#007AFF" : "#666"} 
        />
        <Text style={[styles.label, currentRoute === 'settings' && styles.activeLabel]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  item: {
    alignItems: 'center',
  },
  learnButton: {
    backgroundColor: '#007AFF',
    borderRadius: 30,
    width: 65,
    height: 65,
    marginTop: -25,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  activeLearnButton: {
    backgroundColor: '#005DC5',
    transform: [{scale: 1.05}],
  },
  learnContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeLabel: {
    color: '#007AFF',
    fontWeight: '500',
  },
  learnLabel: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
    marginTop: 2,
  },
};

export default BottomNavigation; 