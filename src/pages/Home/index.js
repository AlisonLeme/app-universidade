import { StyleSheet, Text, View } from "react-native";

import Integrantes from "../../components/Integrantes";

export default function Home() {
  return (
    <View style={styles.container}>
      <Integrantes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
  },
});
