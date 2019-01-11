import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class AssetExample extends Component {
  state = {
    inputValue: ""
  };
  

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         
        </Text>
        
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 250, height: 50, padding: 8 }}
        />
      
        <Button
          title="Pesan"
          onPress={this._handleButtonPress}
        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 0,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  
});
