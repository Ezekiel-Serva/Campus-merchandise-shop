import { View, StyleSheet, FlatList, Text, Pressable, useWindowDimensions, Image } from 'react-native'
import { router } from 'expo-router'

const departments = [
  { name: 'CAT', href: '/shop/cat-shop',   image: require('../../../../assets/DepartMent-Logo/Cat.jpeg') },
  { name: 'CCIS', href: '/shop/ccis-shop', image: require('../../../../assets/DepartMent-Logo/Ccis.jpeg') },
  { name: 'CCJS', href: '/shop/ccjs-shop', image: require('../../../../assets/DepartMent-Logo/Ccjs.jpeg') },
  { name: 'CEA', href: '/shop/cea-shop',   image: require('../../../../assets/DepartMent-Logo/Cea.jpeg') },
  { name: 'COED', href: '/shop/coed-shop', image: require('../../../../assets/DepartMent-Logo/Coed.jpeg') },
  { name: 'COM', href: '/shop/com-shop',   image: require('../../../../assets/DepartMent-Logo/Com.jpeg') },
  { name: 'CON', href: '/shop/con-shop',   image: require('../../../../assets/DepartMent-Logo/coll-of-nurse.jpeg') },
]

export default function Shop() {
  const { width } = useWindowDimensions()
  const itemWidth = (width - 32) / 2

  return (
    <FlatList
      data={departments}
      numColumns={2}
      keyExtractor={(item) => item.href}
      renderItem={({ item }) => (
        <Pressable
          style={[styles.container, { width: itemWidth }]}
          onPress={() => router.push(item.href)}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.labelCont}>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: '#eee',
    elevation: 2,
    height: 180,
    overflow: 'hidden',
    borderRadius: 5
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  labelCont: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0,128,0,0.6)',
  },
  label: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left'
  },
})
