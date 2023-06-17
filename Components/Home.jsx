import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-web";

export default function Home() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  //function handleText(e) {}
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((user) => setData(user));
  }, []);
  return (
    <SafeAreaView>
      <TextInput
        placeholder="search"
        style={styles.inputStyle}
        onChangeText={(e) => setText(e)}
      ></TextInput>
      {data.map((user) => {
        const userName = user.name;
        return (
          <SafeAreaView>
            {userName.filter((e) => {
              return e.includes(text);
            })}
          </SafeAreaView>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "#eee",
  },
});
