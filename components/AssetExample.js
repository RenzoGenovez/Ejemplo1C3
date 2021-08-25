import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
Un poco sobre mi...</Text>
<Text style={styles.list}>
      Me gusta:{"\n"}{"\n"}
- Jugar video juegos  {"\n"}
- Ver series o peliculas {"\n"}
- Inovar en mi Pc {"\n"}
- Salir con mis amigos {"\n"}
      - Platicar con adultos {"\n"}
      - Brindar servicio de voluntariado en comandos de salvamento {"\n"}
</Text>
      <Image style={styles.logo} source={require('../assets/Yo.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 128,
  }
});