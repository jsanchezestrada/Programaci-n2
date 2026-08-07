import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.contenedor}>
      <Image
         source={require("../../assets/images/images/Foto.jpeg")}
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
const styles = StyleSheet.create({

  contenedor:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:16
  },

  foto:{
    width:120,
    height:120,
    borderRadius:60,
    marginBottom:16
  },

  nombre:{
    fontSize:24,
    fontWeight:"bold"
  },

  carrera:{
    fontSize:16,
    color:"#555",
    marginTop:4
  },

  carnet:{
    fontSize:14,
    color:"#888",
    marginTop:4
  },

  boton:{
    marginTop:20,
    backgroundColor:"#ff58b4",
    padding:12,
    borderRadius:8
  },

  botonTexto:{
    color:"white",
    fontSize:16
  }

});