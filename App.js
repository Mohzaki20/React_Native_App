import { SafeAreaView, StyleSheet } from "react-native";
import Users from "./Components/Users";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Components/Home";

export default function App() {


  return (
    <NavigationContainer>
    <SafeAreaView>
      {/* <Home/> */}
      <Users/>
    </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
