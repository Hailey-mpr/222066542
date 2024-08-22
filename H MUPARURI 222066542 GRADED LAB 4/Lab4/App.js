import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Navigation from './components/Navigation';
import { UserProvider } from './components/Usercontext';

export default function App() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigation />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
