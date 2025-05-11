import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text style={{ margin: 10 }} className='text-4xl font-bold text-red-600'>Feed News</Text>
    </View>
  );
}

