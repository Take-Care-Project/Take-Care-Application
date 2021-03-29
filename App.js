// Imports
import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import DropScreen from './components/DropScreen';
import SignInScreen from './components/SignInScreen';
import SignUpChoose from './components/SignUpChoose';;

const Stack = createStackNavigator();

//Bon, pour le moment tout est dans le même fichier donc c'est un peu chiant de s'y retrouver, j evais mettre le plus de docstrings possible

//Je vais essayer de faire les fonctions dans le sens de la route de l'appli prévue.

//Fonction App, affiche tout nos components
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName = "" screenOptions={{headerShown:false }}
>
      <Stack.Screen name="DropScreen" component={DropScreen} />
      <Stack.Screen name="Connexion" component={SignInScreen} />
      <Stack.Screen name="Acceuil" component={HomeScreen} />
      <Stack.Screen name="Choix Inscription" component={SignUpChoose} />
      <Stack.Screen name="Inscription" component={SignUpScreen_one} />
      <Stack.Screen name="Inscription 2" component={SignUpScreen_two} />
      <Stack.Screen name="Inscription 3" component={SignUpScreen_three} />
      <Stack.Screen name="Inscription 4" component={SignUpScreen_four} />
      <Stack.Screen name="Inscription 5" component={SignUpScreen_five} />
      <Stack.Screen name="Inscription Med" component={SignUpScreen_Med_one} />
      <Stack.Screen name="Inscription Med 2" component={SignUpScreen_Med_two} />
      <Stack.Screen name="Inscription Med 3" component={SignUpScreen_Med_three} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

//Écran d'inscription (il y en aura plusieurs)
//Les écrans SignUp_X sont dan sl'ordre de la maquette, on différenciera avec les écrans médecin.

function SignUpScreen_one({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Nom"/>
    <TextInput placeholder = "Prénom"/>
    <TextInput placeholder = "Sexe"/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription 2")}/>
    </View>
  );
}
function SignUpScreen_two({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Adresse mail"/>
    <TextInput placeholder = "Mot de passe" secureTextEntry={true}/>
    <TextInput placeholder = "Confirmer le mot de passe" secureTextEntry={true}/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription 3")}/>
    </View>
  );
}

function SignUpScreen_three({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Taille"/>
    <TextInput placeholder = "Poids"/>
    <TextInput placeholder = "Date de naissance"/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription 4")}/>
    </View>
  );
}
//Franchement je ne vois pas l'utilité de cet écran mais soit
function SignUpScreen_four({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Lieu de vie"/>
    <TextInput placeholder = "Lieu de vie"/>
    <Text Pratique sportive   Fréquence />
    <TextInput />
    <TextInput />

    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription 5")}/>
    </View>
  );
}
function SignUpScreen_five({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Nom du médecin"/>
    <TextInput placeholder = "Numéro de téléphone"/>
    <TextInput placeholder = "Adresse"/>
    <Text Pratique sportive   Fréquence />
    <TextInput />
    <TextInput />

    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Terminé" onPress={() => navigation.goBack()}/>
    </View>
  );
}


//Inscription des médecins, même fonctionnement
function SignUpScreen_Med_one({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Nom"/>
    <TextInput placeholder = "Prénom"/>
    <TextInput placeholder = "Sexe"/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription Med 2")}/>
    </View>
  );
}

function SignUpScreen_Med_two({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "Adresse mail"/>
    <TextInput placeholder = "Mot de passe" secureTextEntry={true}/>
    <TextInput placeholder = "Confirmer le mot de passe" secureTextEntry={true}/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription Med 3")}/>
    </View>
  );
}
function SignUpScreen_Med_three({ navigation }) {
  return (
    <View>
    <Text Inscription/>

    <TextInput placeholder = "N° Ordre des médecins"/>
    <TextInput placeholder = "N° de téléphone"/>
    <TextInput placeholder = "Discipline"/>
    <TextInput placeholder = "Adresse du cabinet"/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription")}/>
    </View>
  );
}
//pour le moment on a ni les boutons, ni les images donc il y a rien
function HomeScreen({ navigation }) {
  return (
    <View>
    <Text rien pour le moment/>
    <Button title = "go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}


