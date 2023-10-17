import { Settings, StyleSheet, Text, View, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './app/screens/Login'
import Home from './app/screens/Home'
import Setting from './app/screens/Setting'
import { User, onAuthStateChanged } from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig'

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeLayout() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <HomeStack.Screen options={{headerShown: false}} name="Setting" component={Setting} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user)=> {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (<Stack.Screen name="Home" component={HomeLayout} options={{ headerShown: false }}/>
        ) : (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>)}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App