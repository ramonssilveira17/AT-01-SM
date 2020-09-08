import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



export function Perfil() {
    return (
        <View style={styles.container}>

            <Image
              style={{ width: 150, height: 150, borderRadius: 400/2 , alignItems: 'center', marginBottom: 30}}
              source={require('../../assets/swakecat.png')}>
            </Image>

            <Text style={{ fontSize: 25, fontWeight: 'bold'}}> Ramon Sousa Silveira </Text>
            <Text style={{ fontSize: 20}}>17 anos</Text>
            <Text style={{ fontSize: 20}}>Técnico de Informática</Text>

            <View style={[styles.views, styles.ident1]}>
            <Text style={{ fontSize: 20 ,fontWeight: 'bold'}}>Cursando informática na SATC</Text>
            <Text style={{ fontSize: 20 ,fontWeight: 'bold'}}>Jogador de osu! profissional. </Text>
            <Text style={{ fontSize: 15 }}> {"\n"} Representando o Time Brasil no osu! </Text>
            <Text style={{ fontSize: 15 }}>Futuro Game Developer se deus quiser!</Text>
            <Text style={{ fontSize: 15 }}>Eu cogito a ideia de virar freelancer!</Text>
            <Text style={{ fontSize: 15 }}>É sério ^</Text>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      paddingTop: 40,
    },
    views: {
      width: 300,
      height: 170,
      margin: 15,
      borderRadius: 6,
      alignItems: "center",
    },

    ident1: {
      backgroundColor:'#FAFAFA',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 30,
      width: 300,
      height: 250

    }, 
    });