import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Campus Hoodie', price: '$39.99', image: 'https://placehold.co/300x300?text=Hoodie' },
  { id: '2', name: 'Campus T-Shirt', price: '$19.99', image: 'https://placehold.co/300x300?text=T-Shirt' },
  { id: '3', name: 'Campus Cap', price: '$14.99', image: 'https://placehold.co/300x300?text=Cap' },
  { id: '4', name: 'Campus Mug', price: '$9.99', image: 'https://placehold.co/300x300?text=Mug' },
  { id: '5', name: 'Campus Backpack', price: '$49.99', image: 'https://placehold.co/300x300?text=Backpack' },
  { id: '6', name: 'Campus Water Bottle', price: '$12.99', image: 'https://placehold.co/300x300?text=Bottle' },
];

export default function Shop() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shop</Text>
      <View style={styles.grid}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.cardImage} />
            <Text style={styles.cardName}>{product.name}</Text>
            <Text style={styles.cardPrice}>{product.price}</Text>
          </View>
        ))}
      </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    marginBottom: 16,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 13,
    color: '#555555',
    marginTop: 4,
  },
});

