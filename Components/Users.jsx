import { Button, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Users() {
  const navigation = useNavigation();
  const sections = [
    {
      id: 0,
      title: "A",
      data: ["ahmed", "Amr", "Sayed"],
    },
    {
      id: 1,
      title: "B",
      data: ["kareem", "Ashraf", "khalid"],
    },
    {
      id: 2,
      title: "C",
      data: ["kareem", "Mostafa", "Sayed"],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <Text style={styles.headerStyle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <>
            {/* <Image source={require("../assets/804951.png")}></Image> */}
            <Text style={styles.itemStyle}>{item}</Text>
          </>
        )}
      ></SectionList>
      <Button
        title="Search"
        style={styles.btn}
        onPress={() => {
          navigation("home");
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "300px",
  },
  headerStyle: {
    backgroundColor: "#eee",
    padding: "10px",
  },
  itemStyle: {
    padding: "8px",
  },
  btn: {
    width: "60px",
    color: "white",
    backgroundColor: "gray",
    padding: "5px",
    marginLeft: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
});