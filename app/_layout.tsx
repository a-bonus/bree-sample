import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen 
        name="earn" 
        options={{
          title: 'Earn Rewards'
        }}
      />
      <Stack.Screen 
        name="settings" 
        options={{
          title: 'Settings'
        }}
      />
      <Stack.Screen 
        name="[...missing]" 
        options={{
          title: 'Page Not Found',
          presentation: 'modal'
        }}
      />
    </Stack>
  );
}
