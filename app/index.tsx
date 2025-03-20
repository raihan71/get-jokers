import React from 'react';
import Home from './screens/Home';
import Header from './components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
