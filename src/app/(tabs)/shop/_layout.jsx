import { Stack } from 'expo-router'

export default function ShopLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{title: "Shop"}}/>
      <Stack.Screen name="cat-shop" options={{title: "CAT Shop"}}/>
      <Stack.Screen name="ccis-shop" options={{title: "CCIS Shop"}}/>
      <Stack.Screen name="ccjs-shop" options={{title: "CCJS Shop"}}/>
      <Stack.Screen name="cea-shop" options={{title: "CEA Shop"}}/>
      <Stack.Screen name="coed-shop" options={{title: "COED Shop"}}/>
      <Stack.Screen name="com-shop" options={{title: "COM Shop"}}/>
      <Stack.Screen name="con-shop" options={{title: "CON Shop"}}/>

    </Stack>
  )
}
