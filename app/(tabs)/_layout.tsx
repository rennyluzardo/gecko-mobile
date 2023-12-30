import { Tabs } from 'expo-router'

function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="home"
        options={{
          title: 'Home',
          // This tab will no longer show up in the tab bar.
          href: null,
          // headerShown: false,
        }}
      />
    </Tabs>
  )
}

export default Layout