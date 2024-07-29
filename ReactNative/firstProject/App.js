import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let x = 1;
  console.log("app executed");
  // let x;
  // x.toString();

  return (
    <View style={styles.container}>
      <Text>האפליקציה המטורפת הראשונה שלי !</Text>
      <StatusBar style="auto" />
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
