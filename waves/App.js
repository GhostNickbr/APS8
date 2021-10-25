
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Globais from './Globais';
import Requisicao from './Requisicao'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        onPress={Requisicao}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
