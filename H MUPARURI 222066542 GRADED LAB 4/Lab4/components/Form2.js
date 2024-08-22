import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Form2= () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!address || !city || !state || !zip) {
      Alert.alert('Please fill in all fields');
      return;
    }

    
    if (isNaN(zip) || zip.length < 4) {
      Alert.alert('Please enter a valid zip code');
      return;
    }

    
    navigation.navigate('Form3');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
        
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="Enter your state"
        
      />
      <Text style={styles.label}>Zip:</Text>
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        placeholder="Enter your zipcode"
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Form2;

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