import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Que o dia comece bem e termine ainda melhor.',
      'Pra hoje: sorrisos bobos, uma mente tranquila e um coração cheio de paz.',
      'Às vezes as coisas demoram, mas acontecem. O importante é saber esperar e não perder a fé!',
      'Imagine uma nova história para a sua vida e acredite nela.',
      'Nem todos os dias são bons, mas há algo bom em cada dia.',
      'Sorria! Deus acaba de te dar um novo dia e coisas extraordinárias podem acontecer se você acreditar.',
      'Levanta, sacode a poeira e dá a volta por cima.',
      'Um pequeno pensamento positivo pela manhã pode mudar todo o seu dia.',
      'Que os dias ruins se tornem raros e os bons virem rotina.',
      'Todo dia é uma ocasião especial. Guarde apenas o que tem que ser guardado: lembranças, sorrisos, poemas, cheiros, saudades, momentos…',
      'Cultive o amor, tristeza não dá flor.',
      'Não se preocupe em entender, viver ultrapassa qualquer entendimento.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      img: require('./assets/biscoitoAberto.png'),
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <Image 
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto} onPress={this.quebraBiscoito}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
})