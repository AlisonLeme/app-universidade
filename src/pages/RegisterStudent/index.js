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

const ComponentAluno = ({ item }) => {
  return (
    <View style={styles.contextAllAlunos}>
      <Text style={styles.text}> Nome: {item.nome} </Text>
      <Text style={styles.text}> RA: {item.matricula} </Text>
    </View>
  );
};

export default function RegisterStudent() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const list = [];
    const collecRef = collection(db, "aluno");

    getDocs(collecRef)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setAlunos(list);
        console.log(list);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Cadastrar Aluno</Text>
      <Formik
        initialValues={{
          matricula: "",
          name: "",
          address: "",
          city: "",
          foto: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.containerForm}>
            <Text style={styles.title}>Matricula</Text>
            <TextInput
              id="matricula"
              onChangeText={handleChange("matricula")}
              value={values.matricula}
              placeholder="Digite a matricula"
              style={styles.input}
            />

            <Text style={styles.title}>Nome</Text>
            <TextInput
              id="name"
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Digite o nome"
              style={styles.input}
            />

            <Text style={styles.title}>Endereço</Text>
            <TextInput
              id="address"
              onChangeText={handleChange("address")}
              value={values.address}
              placeholder="Digite o endereço"
              style={styles.input}
            />

            <Text style={styles.title}>Cidade</Text>
            <TextInput
              id="city"
              onChangeText={handleChange("city")}
              value={values.city}
              placeholder="Digite a cidade"
              style={styles.input}
            />

            <Text style={styles.title}>Foto</Text>
            <TextInput
              id="foto"
              onChangeText={handleChange("foto")}
              value={values.foto}
              placeholder="Digite o endereço da foto"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.containerAlunosCadastrados}>
        <Text style={styles.titleScreen}>Alunos cadastrados</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={alunos}
          renderItem={({ item }) => <ComponentAluno item={item} />}
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
