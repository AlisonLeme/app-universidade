import { StyleSheet, Text, View } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text>Config</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e1e1e6'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
