import React from 'react';
import { ScrollView, View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.label}>Enable Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Send Notifications</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other Settings</Text>
        {[...Array(20)].map((_, i) => (
          <Text key={i}>Setting option #{i + 1}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  setting: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  label: { fontSize: 16 },
  section: { marginTop: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});