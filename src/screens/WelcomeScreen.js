import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={styles.textContent}>40k+ Premium Recipes</Text>
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  textContent: {
    color: "#f96163",
    fontSize: 22,
    fontWeight: "bold",
  },
});
