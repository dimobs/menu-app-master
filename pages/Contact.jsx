import { Text, StyleSheet, View } from "react-native";

export function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Text>Andon Georgiev</Text>
      <Text>+359 88 ** ** **</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
