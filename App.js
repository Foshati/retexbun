import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-blue-500">
      <Text>Hello world !</Text>
      <StatusBar style="auto" />
    </View>
  );
}
