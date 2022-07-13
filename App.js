
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [image, setImage] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Você pode tudo, exceto desistir. Força, continue seu caminho!',
    'Nunca duvide porque sua força vem de Deus.',
    'Você está mais perto que imagina! Não perca o fôlego agora!',
    'Cada passo que você dá você fica mais perto do seu objetivo!',
    'Vá em frente! Você sabe que não pode parar agora!',
    'Se queres ser feliz amanhã, tenta hoje mesmo.',
    'Pode doer, pode demorar, mas se acreditar, vai conquistar! 💪😉',
    'Conquiste seus medos e mesmo o maior objetivo parecerá possível!'
  ]

  function quebraBiscoito() {

    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ')
    setImage(require('./src/biscoitoAberto.png'))
  }

  function reiniciarBiscoito() {
    setImage(require('./src/biscoito.png'))
    setTextoFrase('')
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.frase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 230,
    width: 230
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,

  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});
