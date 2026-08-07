import { Image, Pressable, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: "" }}
        style={styles.foto}
      />
      <Text style={styles.nombre}>Josselyn Sanchez</Text>
      <Text style={styles.carrera}>Ingeniería en Sistemas</Text>
      <Text style={styles.carnet}>Carné: 0907-25-3894</Text>
      <Pressable style={styles.boton}>
        <Text style={styles.botonTexto}>Ver proyectos</Text>
      </Pressable>
    </View>
  );
}