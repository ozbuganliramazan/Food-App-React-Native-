import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";

export default function RecipeListScreen() {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 60 }}>
      <Header headerText={"Hi,Ramazan"} headerIcon={"bell-o"} />
      <SearchFilter icon="search" placeholder={"enter you fav recipe"} />
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
     

        <RecipeCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
