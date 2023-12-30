import {
  FontAwesome,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Colors from '../../constants/Colors'
import Home from '../../screens/Home'

const Tab = createMaterialBottomTabNavigator()

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

function TabNavigator() {
  // const colorScheme = useColorScheme();

  return (
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //   }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
    //       tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
    //       headerRight: () => (
    //         <Link href="/modal" asChild>
    //           <Pressable>
    //             {({ pressed }) => (
    //               <FontAwesome
    //                 name="info-circle"
    //                 size={25}
    //                 color={Colors[colorScheme ?? 'light'].text}
    //                 style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
    //               />
    //             )}
    //           </Pressable>
    //         </Link>
    //       ),
    //     }}

    //   />
    //   <Tabs.Screen
    //     name="scanner"
    //     options={{
    //       title: 'Escáner',
    //       tabBarIcon: ({ color }) => <MaterialIcons name="qr-code-scanner" size={24} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="sales"
    //     options={{
    //       title: 'Ventas',
    //       tabBarIcon: ({ color }) => <MaterialCommunityIcons name="sale" size={24} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="history"
    //     options={{
    //       title: 'Historial',
    //       tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={24} color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="inventory"
    //     options={{
    //       title: 'Inventario',
    //       tabBarIcon: ({ color }) => <MaterialIcons name="inventory" size={24} color={color} />,
    //     }}
    //   />
    // </Tabs>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

export default TabNavigator