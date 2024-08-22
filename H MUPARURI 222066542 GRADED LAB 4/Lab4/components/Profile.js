import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useUser } from './Usercontext';


const placeholderImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoVz0gymI51ACWWFBW_Stq2-l-kH23ojQiw&s';

const Profile = () => {
  const { userData } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: placeholderImage }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{userData.phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
});

export default Profile;
