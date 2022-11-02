import react, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native-web";
import { Avatar } from "react-native-elements";

const IntegrantesComponent = forwardRef(({ item }, ref) => {
  const [image, setImage] = useState(item.avatar_url);
  useImperativeHandle(ref, () => ({
    setImageIntegrante(si) {
      setImage(si);
    },
  }));
  return (
    <View style={styles.containerIntegrante}>
      <Avatar
        rounded
        size={"large"}
        title={item.name.charAt(0)}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.ra}</Text>
    </View>
  );
});

export default function Integrantes() {
  const [integrantes, setIntegrantes] = useState([
    {
      id: 1,
      name: "Alison Leme dos Santos",
      user: "alisonleme",
      ra: "171422",
    },
    {
      id: 2,
      name: "Alanys Ribeiro Santos",
      user: "alisonleme",
      ra: "200755",
    },
    {
      id: 3,
      name: "Andre Santos",
      user: "alisonleme",
      ra: "200036",
    },
  ]);
  const integrantesRef = useRef([]);

  useEffect(() => {
    // função para pegar a imagem da API do gitgub do integrante e atualizar o estado do componente
    integrantes.map((integrante, i) => {
      fetch(`https://api.github.com/users/${integrante.user}`)
        .then((response) => response.json())
        .then((data) => {
          const image = data.avatar_url;
          integrantesRef.current[i + 1].setImageIntegrante(image);
        });
    });
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Integrantes</Text>
      <FlatList
        data={integrantes}
        renderItem={({ item }) => (
          <IntegrantesComponent
            item={item}
            ref={(r) => (integrantesRef.current[item.id] = r)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#e1e1e6",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  containerIntegrante: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e1e1e6",
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  text: {
    color: "#e1e1e6",
    fontSize: 20,
    marginLeft: 10,
  },
});
