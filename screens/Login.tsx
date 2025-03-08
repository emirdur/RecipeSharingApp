import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
      Alert.alert('Error', 'There was an error with your sign in. Please check your credentials and try again.');
    }
  }

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
    } catch(error) {
      Alert.alert('Error', 'There was an error signing up. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <Text style={styles.text}>CopiaFare</Text>
        <TextInput
          value={email}
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}>
        </TextInput>
        <TextInput
          value={password}
          style={styles.input}
          placeholder='Password'
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}>
        </TextInput>
        <Pressable style={styles.button} onPress={signIn}><Text style={styles.buttonText}>Login</Text></Pressable>
        <Pressable style={[styles.button, styles.buttonSignUp]} onPress={signUp}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },

  text: {
    textAlign: 'center',
    display: 'flex',
    fontSize: 36,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },

  input: {
    marginHorizontal: 20,
    marginVertical: 4,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'lightgray',
    padding: 10,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },

  button: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    borderRadius: 10,
    height: 50,
    backgroundColor: 'red',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonSignUp: {
    backgroundColor: 'orange',
  }
});