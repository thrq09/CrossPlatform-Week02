import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Latihan01 from './Latihan01';
import Tugas01 from './Tugas01';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hai</Text> */}
      <StatusBar style="auto" />

      {/* <Latihan01 /> */}
      <Tugas01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
