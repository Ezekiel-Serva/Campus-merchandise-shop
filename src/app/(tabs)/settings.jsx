import { View, Text, StyleSheet } from 'react-native';

const settings = ['Account', 'Notifications', 'Payment Methods', 'About'];

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {settings.map((item) => (
        <View key={item} style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  rowText: {
    fontSize: 15,
  },
});

