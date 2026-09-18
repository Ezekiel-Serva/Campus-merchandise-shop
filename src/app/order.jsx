import { ScrollView, View, Text, StyleSheet } from 'react-native';

const orders = [
  { id: '1001', item: 'Campus Hoodie', status: 'Delivered' },
  { id: '1002', item: 'Campus Cap', status: 'Shipped' },
  { id: '1003', item: 'Campus Mug', status: 'Processing' },
];

export default function Order() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      {orders.map((order) => (
        <View key={order.id} style={styles.row}>
          <Text style={styles.itemName}>{order.item}</Text>
          <Text style={styles.status}>{order.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  itemName: {
    fontSize: 15,
  },
  status: {
    fontSize: 14,
    color: '#555555',
  },
});

