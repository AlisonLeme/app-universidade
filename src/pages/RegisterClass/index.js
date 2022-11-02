import { useEffect, useState } from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import db from "../../config/firebase";

const ComponentClass = ({ item }) => {
  return (
    <View style={styles.contextAllAlunos}>
      <Text style={styles.text}> Código Turma: {item.cod_turma} </Text>
      <Text style={styles.text}> Ano: {item.ano} </Text>
    </View>
  );
};

export default function RegisterClass() {
  const [turma, setTurma] = useState([]);

  useEffect(() => {
    const list = [];
    const collecRef = collection(db, "turma");

    getDocs(collecRef)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setTurma(list);
        console.log(list);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Cadastrar Turma</Text>
      <Formik
        initialValues={{
          cod_turma: "",
          cod_disc: "",
          cod_prof: "",
          year: "",
          hors: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.containerForm}>
            <Text style={styles.title}>Codigo da disciplina</Text>
            <TextInput
              id="cod_disc"
              onChangeText={handleChange("cod_disc")}
              value={values.cod_disc}
              placeholder="Digite o codigo da disciplina"
              style={styles.input}
            />

            <Text style={styles.title}>Codigo do professor</Text>
            <TextInput
              id="cod_prof"
              onChangeText={handleChange("cod_prof")}
              value={values.cod_prof}
              placeholder="Digite o codigo do professor"
              style={styles.input}
            />

            <Text style={styles.title}>Ano</Text>
            <TextInput
              id="year"
              onChangeText={handleChange("year")}
              value={values.year}
              placeholder="Digite o ano"
              style={styles.input}
            />
            <Text style={styles.title}>Horario</Text>
            <TextInput
              id="hors"
              onChangeText={handleChange("hors")}
              value={values.hors}
              placeholder="Digite o horario"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.containerAlunosCadastrados}>
        <Text style={styles.titleScreen}>Turmas Cadastradas</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={turma}
          renderItem={({ item }) => <ComponentClass item={item} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    color: "#e1e1e6",
  },
  titleScreen: {
    textAlign: "center",
    color: "#e1e1e6",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  containerForm: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e1e1e6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingBottom: "5%",
  },
  text: {
    fontSize: 16,
    color: "#e1e1e6",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: "#e1e1e6",
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: "#e1e1e6",
    borderBottomColor: "#e1e1e6",
  },
  button: {
    backgroundColor: "#391b4a",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#e1e1e6",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonTextRegister: {
    color: "#a1a1a1",
  },
  contextAllAlunos: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerAlunosCadastrados: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#e1e1e6",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingBottom: "5%",
  },
});
