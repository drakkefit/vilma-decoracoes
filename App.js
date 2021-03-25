import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      quantidade: 0,
      altura: 1.5,
      valorPago: 12,
      resultado: 0,
      altCortina: 0,
      valorCortina: 12,
      altForro: 0,
      valorForro: 10,
      resultado2: 0,
    }

    this.calcular = this.calcular.bind(this)

    this.calcular2 = this.calcular2.bind(this)

  }

  calcular() {
    let pagAltura = this.state.quantidade / this.state.altura * this.state.valorPago

    let s = this.state
    s.resultado = pagAltura
    this.setState(this.setState(s))
  }

  calcular2() {
    let total = this.altCortina * this.valorCortina + this.altForro * this.valorForro

    let s2 = this.state
    s2.resultado2 = total
    this.setState(this.setState(s2))
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Vilma decorações</Text>
          <TextInput placeholder="Digite a quantidade" placeholderTextColor={'#f072a9'} keyboardType="numeric" style={styles.input} onChangeText={(quantidade) => { this.setState({ quantidade }) }} />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}> {`R$ ${this.state.resultado.toFixed(2)}`} </Text>
        <View style={styles.container2}>
          <TextInput placeholder="Q. da altura cortina" placeholderTextColor={'#f072a9'} keyboardType="numeric" style={styles.input} onChangeText={(altCortina) => { this.setState({ altCortina }) }} />
          <TextInput placeholder="Q. da altura forro" placeholderTextColor={'#f072a9'} keyboardType="numeric" style={styles.input} onChangeText={(altForro) => { this.setState({ altForro }) }} />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.calcular2}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
          <Text style={styles.resultado}>{`R$ ${this.state.resultado2.toFixed(2)}`}</Text>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff4f4',
  },
  h1: {
    marginTop: 24,
    fontSize: 40,
    backgroundColor: "#D65D81",
    color: "#fff",
    textAlign: "center",
  },
  input: {
    // justifyContent: "center",
    // height: 80,
    // color: "#f072a9",
    textAlign: "center",
    // width: "50%",
    // fontSize: 30,
    // marginTop: 24,
    // borderWidth: 5,
    // borderColor: "#ffc2dc",
    borderRadius: 5,
    margin: 15,
    height: 50,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  button: {
    // backgroundColor: "#D65D81",
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15,
  },
});


// paleta de cores do app
// #D65D81 rosa
// #EDD4FF
// #B49EF8
// #7D6ABF