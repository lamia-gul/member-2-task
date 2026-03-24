import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native'; // 👈 Switched to standard RN hook to avoid '@' path issues

// 1️⃣ Fix: Ensure the Icon component is defined simply to avoid TS errors
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2E7D32', // Your signature Green
        tabBarInactiveTintColor: '#81C784', // Lighter green for inactive
        headerShown: false, 
        tabBarStyle: { 
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E8F5E9',
        }
      }}>
      
      {/* 2️⃣ Fix: The "name" must match the filename in the (tabs) folder exactly */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Habits',
          tabBarIcon: ({ color }) => <TabBarIcon name="leaf" color={color} />, 
        }}
      />
      
      <Tabs.Screen
        name="explore" 
        options={{
          title: 'Insights',
          tabBarIcon: ({ color }) => <TabBarIcon name="line-chart" color={color} />,
        }}
      />
    </Tabs>
  );
}
