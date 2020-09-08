import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function CameraApp() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso à camera negado!</Text>;
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  return (
    <View style={styles.cameradomal}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              position:'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 20, marginBottom: 8, color: 'white', justifyContent: 'center'}}> Girar </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.botao} onPress={ takePicture }>
        <Icon name="photo-camera" size={32} color="#FFF"/>
      </TouchableOpacity>

      { capturedPhoto &&
        <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
            <TouchableOpacity style={{ margin: 10, }} onPress={() => setOpen(false) }>
              <Icon name="close" size={50} color="#FF0000" />
            </TouchableOpacity>

            <Image
              style={{ width: '100%', height: 300, borderRadius: 20 }}
              source={{ uri: capturedPhoto }}
            />
          </View>
        </Modal>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343434',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },

  cameradomal: {
    flex: 1,
  }
});