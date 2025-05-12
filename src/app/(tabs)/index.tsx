import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
    className='flex-1 p-3'
    >
      <Text
      className='text-4xl font-bold text-white'
      >
        Feed News
        </Text>
    </View>
  );
}

