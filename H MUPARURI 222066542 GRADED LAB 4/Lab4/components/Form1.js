import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from './Usercontext';

const Form1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { updateUserData } = useUser();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!name || !email || !phoneNumber) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Please enter a valid email address');
      return;
    }
    if (isNaN(phoneNumber) || phoneNumber.length < 10) {
      Alert.alert('Please enter a valid phone number');
      return;
    }

    
    updateUserData({ name, email, phoneNumber });

    
    navigation.navigate('Form2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmit} style={{color:'green'}} />
    </View>
  );
};

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

export default Form1;