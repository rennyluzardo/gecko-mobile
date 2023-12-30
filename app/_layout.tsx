import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Tabs, Stack, } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Fonts from './constants/Fonts'
// import { createAppContainer } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
// import TabNavigator from './navigation/TabNavigator'

// import Home from './screens/Home'

// const Stack = createNativeStackNavigator();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '[(tabs)]',
  // initialRouteName: '[screens/settings]',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: Fonts.APP.spaceMonoRegular,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
      {/* <Tabs>
        <Tabs.Screen
          // Name of the route to hide.
          name="(tabs)"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
            // headerShown: false,
          }}
        />
      </Tabs> */}
      <Stack
        initialRouteName="(tabs)"
      >
        <Stack.Screen
          name="(tabs)"
        />
      </Stack>
      {/* <Stack.Screen name="home" /> */}
      {/* <Stack.Screen name="(tabs)"  options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
          name="components/global/modal"
          options={{
            presentation: 'modal',
            title: 'Modal',`
          }} /> */}
      {/* //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
      {/* <Home /> */}
      {/* </Stack.Navigator> */}
      {/* </NavigationContainer> */}
    </ThemeProvider>
  );
}
