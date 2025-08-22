import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello How are you</Text>

      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
  },
  linkText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
