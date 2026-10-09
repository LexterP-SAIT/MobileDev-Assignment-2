import { Tabs } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#000', borderTopColor: '#262626' },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#888',
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} /> }} 
      />

      <Tabs.Screen 
        name="reels" 
        options={{ tabBarIcon: ({ color }) => <Feather name="play-circle" size={26} color={color} /> }} 
      />

      <Tabs.Screen 
        name="dms" 
        options={{ tabBarIcon: ({ color }) => <Feather name="send" size={26} color={color} /> }} 
      />

      <Tabs.Screen 
        name="profile" 
        options={{ tabBarIcon: ({ color }) => <Feather name="user" size={26} color={color} /> }} 
      />
    </Tabs>
  );
}