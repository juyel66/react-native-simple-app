import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 33,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello How are you</Text>
      <Link href={"/login"}>Login</Link>
    </View>
  );
}
