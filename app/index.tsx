import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import BottomNavigation from './BottomNavigation';

export default function Home() {
  const router = useRouter();

  const menuItems = [
    {
      title: 'Earn Rewards',
      description: 'Discover ways to earn rewards and cash back',
      icon: 'cash-outline',
      screen: 'earn'
    },
    {
      title: 'Settings',
      description: 'Manage your account and preferences',
      icon: 'settings-outline',
      screen: 'settings'
    }
  ];

  const quickLearnTopics = [
    {
      icon: 'cafe-outline',
      title: "Budgeting Basics",
      duration: "3 mins"
    },
    {
      icon: 'bulb-outline',
      title: "Emergency Fund",
      duration: "4 mins"
    },
    {
      icon: 'trending-up-outline',
      title: "Credit Scores",
      duration: "5 mins"
    },
    {
      icon: 'book-outline',
      title: "Smart Saving",
      duration: "3 mins"
    }
  ];

  const learningPaths = [
    {
      icon: 'trending-up-outline',
      title: "Debt-Free Journey",
      description: "Learn strategies to manage and eliminate debt"
    },
    {
      icon: 'trophy-outline',
      title: "Investment Basics",
      description: "Start your investment journey with confidence"
    },
    {
      icon: 'star-outline',
      title: "Smart Spending",
      description: "Master the art of mindful spending"
    }
  ];

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 20,
            height: 80,
            backgroundColor: 'white',
            borderTopColor: '#e5e5e5',
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
            ),
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#666',
          }}
        />
        
        <Tabs.Screen
          name="activity"
          options={{
            title: 'Activity',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'pulse' : 'pulse-outline'} size={24} color={color} />
            ),
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#666',
          }}
        />
        
        <Tabs.Screen
          name="learn"
          options={{
            title: 'Learn',
            tabBarIcon: ({ color }) => (
              <View style={styles.learnIconContainer}>
                <Ionicons name="book-outline" size={24} color="white" />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabLabel, { color: '#007AFF' }]}>Learn</Text>
            ),
          }}
        />
        
        <Tabs.Screen
          name="earn"
          options={{
            title: 'Earn',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'cash' : 'cash-outline'} size={24} color={color} />
            ),
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#666',
          }}
        />
        
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'settings' : 'settings-outline'} size={24} color={color} />
            ),
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#666',
          }}
        />
      </Tabs>

      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Learn with Bree</Text>
          <Text style={styles.headerSubtitle}>Your journey to financial confidence starts here</Text>
          
          {/* Progress Card */}
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View style={styles.progressTitleContainer}>
                <Ionicons name="trophy-outline" size={20} color="#F59E0B" />
                <Text style={styles.progressTitle}>Your Progress</Text>
              </View>
              <Text style={styles.progressCount}>4/12 Complete</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '33%' }]} />
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Featured Course */}
          <View style={styles.featuredCard}>
            <View style={styles.featuredBadge}>
              <Ionicons name="star" size={16} color="#F59E0B" />
              <Text style={styles.featuredText}>FEATURED</Text>
            </View>
            <Text style={styles.featuredTitle}>Master Your Money: 21-Day Challenge</Text>
            <Text style={styles.featuredDescription}>
              Transform your financial habits in just 3 weeks with daily micro-lessons
            </Text>
            <View style={styles.featuredActions}>
              <TouchableOpacity style={styles.startButton}>
                <Ionicons name="play" size={16} color="white" />
                <Text style={styles.startButtonText}>Start Now</Text>
              </TouchableOpacity>
              <View style={styles.durationContainer}>
                <Ionicons name="time-outline" size={16} color="#666" />
                <Text style={styles.durationText}>5 min/day</Text>
              </View>
            </View>
          </View>

          {/* Quick Learns Section */}
          <Text style={styles.sectionTitle}>Quick Learns</Text>
          <View style={styles.quickLearnsGrid}>
            {quickLearnTopics.map((topic, index) => (
              <TouchableOpacity key={index} style={styles.quickLearnCard}>
                <View style={styles.iconContainer}>
                  <Ionicons name={topic.icon} size={24} color="#007AFF" />
                </View>
                <Text style={styles.topicTitle}>{topic.title}</Text>
                <Text style={styles.topicDuration}>{topic.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Learning Paths */}
          <Text style={styles.sectionTitle}>Learning Paths</Text>
          <View style={styles.learningPaths}>
            {learningPaths.map((path, index) => (
              <TouchableOpacity key={index} style={styles.pathCard}>
                <View style={styles.pathContent}>
                  <View style={styles.pathIconContainer}>
                    <Ionicons name={path.icon} size={24} color="#007AFF" />
                  </View>
                  <View style={styles.pathInfo}>
                    <Text style={styles.pathTitle}>{path.title}</Text>
                    <Text style={styles.pathDescription}>{path.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomNavigation navigation={router} currentRoute="index" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 24,
    paddingTop: 60,
    paddingBottom: 80,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#cce0ff',
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  progressCount: {
    color: '#007AFF',
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  content: {
    padding: 16,
    marginTop: -40,
  },
  featuredCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  featuredText: {
    color: '#F59E0B',
    fontWeight: '600',
    fontSize: 12,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredDescription: {
    color: '#666',
    marginBottom: 16,
  },
  featuredActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  startButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  durationText: {
    color: '#666',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  quickLearnsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  quickLearnCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#f0f9ff',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  topicDuration: {
    color: '#666',
    fontSize: 14,
  },
  learningPaths: {
    gap: 16,
  },
  pathCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pathContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  pathIconContainer: {
    backgroundColor: '#f0f9ff',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pathInfo: {
    flex: 1,
  },
  pathTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  pathDescription: {
    color: '#666',
    fontSize: 14,
  },
  learnIconContainer: {
    backgroundColor: '#007AFF',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});
