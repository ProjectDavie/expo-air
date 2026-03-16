// D:\ProjectDavie\CODE\expo-air\src\components\MainLayout.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function MainLayout({ children, navigation, activeRoute }) {
  const tabs = [
    { name: 'Table', icon: '⚛️', route: 'PeriodicTable' },
    { name: 'Search', icon: '🔍', route: 'Search' },
    { name: 'Favorites', icon: '⭐', route: 'Favorites' },
    { name: 'Groups', icon: '🧪', route: 'Groups' },
    { name: 'Profile', icon: '👤', route: 'Profile' },
    { name: 'Settings', icon: '⚙️', route: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {/* LEFT NAV BAR */}
        <View style={styles.leftNav}>
          <Text style={styles.logo}>⚛️</Text>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={[styles.tabItem, activeRoute === tab.route && styles.activeTab]}
              onPress={() => navigation.navigate(tab.route)}
            >
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text style={styles.tabText}>{tab.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* RIGHT CONTENT AREA */}
        <View style={styles.rightContent}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  row: { flex: 1, flexDirection: 'row' },
  leftNav: {
    width: 80,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: { fontSize: 30, marginBottom: 30 },
  tabItem: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  activeTab: {
    backgroundColor: '#34495e',
    borderLeftWidth: 4,
    borderLeftColor: '#73D2DE',
  },
  tabIcon: { fontSize: 20 },
  tabText: { color: '#fff', fontSize: 10, marginTop: 4 },
  rightContent: { flex: 1, backgroundColor: '#f5f5f5' },
});