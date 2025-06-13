import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "nativewind";
import { Slot, Tabs } from "expo-router";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { LanguageProvider } from "@/components/i18n/LanguageContext";
import React from "react";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { Home, Target, Map, Users, User } from "lucide-react-native";

import "../global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "gluestack",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function TabBarIcon({
  IconComponent,
  color,
}: {
  IconComponent: any;
  color: string;
}) {
  return <IconComponent size={20} color={color} />;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
    ...FontAwesome.font,
  });

  const [styleLoaded, setStyleLoaded] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // useLayoutEffect(() => {
  //   setStyleLoaded(true);
  // }, [styleLoaded]);

  // if (!loaded || !styleLoaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { colorScheme } = useColorScheme();

  return (
    <LanguageProvider>
      <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Tabs
            screenOptions={{
              headerShown: useClientOnlyValue(false, true),
              tabBarActiveTintColor: "#059669", // green-600
              tabBarInactiveTintColor: "#6b7280", // gray-500
              tabBarStyle: {
                backgroundColor: "#ffffff",
                borderTopColor: "#e5e7eb",
              },
            }}
          >
            <Tabs.Screen
              name="home"
              options={{
                title: "Home",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon IconComponent={Home} color={color} />
                ),
              }}
            />

            <Tabs.Screen
              name="missions"
              options={{
                title: "Missions",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon IconComponent={Target} color={color} />
                ),
                tabBarBadge: "3",
              }}
            />

            <Tabs.Screen
              name="map"
              options={{
                title: "Map",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon IconComponent={Map} color={color} />
                ),
              }}
            />

            <Tabs.Screen
              name="community"
              options={{
                title: "Community",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon IconComponent={Users} color={color} />
                ),
                tabBarBadge: "2",
              }}
            />

            <Tabs.Screen
              name="profile"
              options={{
                title: "Profile",
                tabBarIcon: ({ color }) => (
                  <TabBarIcon IconComponent={User} color={color} />
                ),
              }}
            />
          </Tabs>
        </ThemeProvider>
      </GluestackUIProvider>
    </LanguageProvider>
  );
}
