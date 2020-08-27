import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont()

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itenscoluna}>
        <Icon name="person" size={40}></Icon>
        <Text>Perfil</Text>
      </View>

      <View style={styles.itenscoluna}>
        <Icon name="camera-alt" size={40}></Icon>
        <Text>Câmera</Text>
      </View>

      <View style={styles.itenscoluna}>
        <Icon name="exit-to-app" size={40}></Icon>
        <Text>Sair</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  views: {
    width: 50,
    height: 50,
    margin: 10,
  },
  itenscoluna: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 15,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    elevation: 15,
  },
});