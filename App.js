import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      textBefore: '',
      text : 'When Submitted, the text here should change'
    }
  }

  changeText(a){
    this.setState({
      text: a
    });
  }

  changeTextBefore(a){
    this.setState({
      textBefore: a
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.col1,styles.colAtas]}>
            <Text>
              {this.state.text}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <TextInput style={styles.textInput} placeholder='Type Here' onChangeText={(a) => this.changeTextBefore(a)} />
          </View>
          <View style={styles.col1}>
            <Button
              title="Submit"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => this.changeText(this.state.textBefore)}
            />
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  col: {
    flex: 3,
  },
  col1: {
    flex: 1,
  },
  colAtas: {
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    paddingLeft: 15,
    backgroundColor: '#ffffff',
  }
});