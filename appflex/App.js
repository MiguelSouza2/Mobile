
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.blackbox}></View>
      <View style={styles.yellowbox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#aa8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 700,
    backgroundColor
  },
  redbox: {
    height: 100,
    width: 100,
    backgroundColor: '#ff0000',
    borderRadius: 100
  },
  bluebox: {
    height: 100,
    width: 200,
    backgroundColor: '#0000ff'
  },
  blackbox: {
    height: 250,
    width: 100,
    backgroundColor: '#000',
  },
  yellowbox: {
    height: 150,
    width: 50,  
    backgroundColor: '#aa1'
  }
});

