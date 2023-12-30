import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Audio } from 'expo-av'
import Sounds from '../../constants/Sounds'

export default function TabScannerScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    };

    getBarCodeScannerPermissions()
  }, []);

  const _handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true)

    _playBeep()
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)

    setTimeout(() => {
      setScanned(false)
    }, 3000);
  };

  async function _playBeep() {
    const { sound } = await Audio.Sound.createAsync(
      Sounds.POS.barcodeScannerBeep,
      {
        shouldPlay: true,
        isLooping: false,
      },
    )

    await sound.playAsync()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Scanner</Text>

      {
        hasPermission === null &&
        <Text>Requesting for camera permission</Text>
      }

      {
        hasPermission === false &&
        <Text>No access to camera</Text>
      }


      {
        hasPermission === true &&
        <>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/scanner.tsx" />

          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : _handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
