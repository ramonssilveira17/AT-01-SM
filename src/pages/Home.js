import React from 'react';
import {View, Text, StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/AntDesign';
Icon.loadFont()

export function Home ({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#d1d1d1'}}>

        <TouchableOpacity style={styles.itenscoluna}
          onPress={() => navigation.navigate('Perfil')}>
          <User name="user" size={30} color="black"/>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Perfil </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itenscoluna}
          onPress={() => navigation.navigate('Foto')}>
          <Icon name="photo-camera" size={30} color="black"/>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Câmera </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.itenscoluna}
          onPress={() => BackHandler.exitApp() }>
          <Icon name="exit-to-app" size={30} color="black"/>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sair </Text>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
  itenscoluna: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 15,
    width: '70%',
    height: '80%',
    borderRadius: 5,
    elevation: 15,
  },
});
