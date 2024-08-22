import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Form3= () => {
  const [card, setCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  
  const navigation = useNavigation();

const handleSubmit = () => {
    if (!card || !expiration || !cvv) {
    Alert.alert('Please fill in all fields');
    return;
    }

    
    if (isNaN(card) || card.length < 16) {
      Alert.alert('Please enter a valid card number');
      return;
    }
    

    
    navigation.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card number:</Text>
      <TextInput
        style={styles.input}
        value={card}
        onChangeText={setCard}
        placeholder="Enter card number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>expiration:</Text>
      <TextInput
        style={styles.input}
        value={expiration}
        onChangeText={setExpiration}
        placeholder="Enter the expiration date"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>CVV:</Text>
      <TextInput
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        placeholder="Enter your CVV"
        keyboardType="phone-pad"
        
      />
      
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Form3;

const styles = StyleSheet.create({
    container: {
    flex: 1,
      padding: 20,
      backgroundColor: 'white',
      justifyContent:'center',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      marginBottom: 30,
    },
  });