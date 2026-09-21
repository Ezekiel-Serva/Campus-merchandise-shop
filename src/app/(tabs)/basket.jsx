import { ScrollView, View, Text, StyleSheet } from 'react-native';

const basketItems = [
  { id: '1', name: 'Campus Hoodie', price: '$39.99', qty: 1 },
  { id: '2', name: 'Campus Cap', price: '$14.99', qty: 2 },
];

export default function Basket() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Basket</Text>
      {basketItems.map((item) => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.itemName}>{item.name} x{item.qty}</Text>
          <Text style={styles.price}>{item.price}</Text>
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
  price: {
    fontSize: 14,
    color: '#555555',
  },
});

