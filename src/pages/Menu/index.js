import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

export default function Menu({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.category}>
        <Text style={styles.title}>Cadastrar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterTeacher")}
        >
          <Text style={styles.text}>Cadastrar Professor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterDiscipline")}
        >
          <Text style={styles.text}>Cadastrar Disciplina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterClass")}
        >
          <Text style={styles.text}>Cadastrar Turma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterHistoric")}
        >
          <Text style={styles.text}>Cadastrar Histórico</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.category}>
        <Text style={styles.title}>Listar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Professor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Turma</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Disciplina</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RegisterStudent")}
        >
          <Text style={styles.text}>Cadastrar Histórico</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121214",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  category: {
    borderBottomWidth: 1,
    alignItems: "center",
    borderColor: "#e1e1e6",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    textAlign: "center",
    color: "#e1e1e6",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 25,
    color: "#e1e1e6",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#391b4a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    marginBottom: 15,
    width: 300,
  },
});
