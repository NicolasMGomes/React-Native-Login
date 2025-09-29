import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, Alert, Pressable } from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false
  },
  screens: {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    ChangePass: {
      screen: ChangePass,
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email) => {
    const regex = /\w+(@)\w+/;
    return regex.test(email);
  };

  // Campos válidos para habilitar botão
  const camposValidos = validarEmail(email) && senha.length > 0;

  return (
    <View style= {{flex: 1}}>
      <ImageBackground source={require('./assets/loadscreen.png')} style= {styles.container}>
        <Image source= {require('./assets/rvgl_logo.png')}/>
        <View style= {styles.loginBox}>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>E-mail</Text>
            <TextInput 
              style= {styles.textInput}
              keyboardType= 'email-address'
              value= {email}
              onChangeText= {setEmail}
            />
          </View>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>Senha</Text>
            <TextInput 
              style= {styles.textInput}
              secureTextEntry
              value= {senha}
              onChangeText= {setSenha}
            />
          </View>
          <Pressable
            onPress= {() => Alert.alert('Login realizado com sucesso!')}
            disabled= {!camposValidos}
          >
            <View style= {[styles.loginBox, {alignSelf: 'center', backgroundColor: '#0000', margin: 20}]}>
              <Text style= {[{margin: 10}, camposValidos ? {color: '#FFF'} : {color: '#888'}]}>Login</Text>
            </View>
          </Pressable>
          <View style= {styles.registerContainer}>
            <Text style= {styles.text}>Ainda não tem uma conta?
              <Pressable onPress= {() => navigation.navigate('Register')}>
                <Text style= {styles.link}> Registre-se! </Text>
              </Pressable>
            </Text>
          </View>
          <View style= {styles.registerContainer}>
            <Pressable onPress= {() => navigation.navigate('ChangePass')}>
              <Text style= {styles.link}>Esqueci a senha</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function Register() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email) => {
    const regex = /\w+(@)\w+/;
    return regex.test(email);
  };

  // Campos válidos para habilitar botão
  const camposValidos = validarEmail(email) && senha.length > 0 && cpf.length > 0 && nome.length > 0;

  return (
    <View style= {{flex: 1}}>
      <ImageBackground source={require('./assets/loadscreen.png')} style= {styles.container}>
        <View style= {styles.registerBox}>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>CPF</Text>
            <TextInput 
              style= {styles.textInput}
              keyboardType= 'numeric'
              value= {cpf}
              onChangeText= {setCpf}
            />
          </View>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>Nome</Text>
            <TextInput 
              style= {styles.textInput}
              value= {nome}
              onChangeText= {setNome}
            />
          </View>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>E-mail</Text>
            <TextInput 
              style= {styles.textInput}
              keyboardType= 'email-address'
              value= {email}
              onChangeText= {setEmail}
            />
          </View>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>Senha</Text>
            <TextInput 
              style= {styles.textInput}
              secureTextEntry
              value= {senha}
              onChangeText= {setSenha}
            />
          </View>
          <Pressable
            onPress= {() => 
                Alert.alert('Registro realizado com sucesso!', 
                null,
                [{
                  text: 'Voltar',
                  onPress: () => navigation.goBack(),
                }],
                {
                  cancelable: true,
                  onDismiss: () => navigation.goBack(),
                })
              }
            disabled= {!camposValidos}
          >
            <View style= {[styles.registerBox, {alignSelf: 'center', backgroundColor: '#0000', margin: 20}]}>
              <Text style= {[{margin: 10}, camposValidos ? {color: '#FFF'} : {color: '#888'}]}>Registrar</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

function ChangePass() {
  const navigation = useNavigation();

  const [senha, setSenha] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  // Campos válidos para habilitar botão
  const camposValidos = senha == novaSenha && senha.length > 0 && novaSenha.length > 0;

  return (
    <View style= {{flex: 1}}>
      <ImageBackground source={require('./assets/loadscreen.png')} style= {styles.container}>
        <View style= {styles.passBox}>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>Nova senha</Text>
            <TextInput 
              style= {styles.textInput}
              secureTextEntry
              value= {senha}
              onChangeText= {setSenha}
            />
          </View>
          <View style= {styles.inputContainer}>
            <Text style= {styles.text}>Confirmar nova senha</Text>
            <TextInput 
              style= {styles.textInput}
              secureTextEntry
              value= {novaSenha}
              onChangeText= {setNovaSenha}
            />
          </View>
          <Pressable
            onPress= {() => 
                Alert.alert('Senha redefinida com sucesso!', 
                null,
                [{
                  text: 'Voltar',
                  onPress: () => navigation.goBack(),
                }],
                {
                  cancelable: true,
                  onDismiss: () => navigation.goBack(),
                })
              }
            disabled= {!camposValidos}
          >
            <View style= {[styles.passBox, {alignSelf: 'center', backgroundColor: '#0000', margin: 20}]}>
              <Text style= {[{margin: 10}, camposValidos ? {color: '#FFF'} : {color: '#888'}]}>Salvar</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 15,
    margin: 10,
  },

  registerContainer: {
    marginBottom: 10,
  },

  loginBox: {
    margin: 50,
    borderWidth: 3,
    borderColor: '#FFD800',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '80%',
  },

  registerBox: {
    margin: 50,
    borderWidth: 3,
    borderColor: '#B200FF',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '80%',
  },

  passBox: {
    margin: 50,
    borderWidth: 3,
    borderColor: '#E60000',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '80%',
  },

  text: {
    color: '#FFF',
  },

  textInput: {
    width: 250,
    marginTop: 2,
    backgroundColor: '#E5E5E5',
    borderWidth: 2,
    borderColor: '#BFBFBF',
    borderRadius: 6,
  },

  link: {
    color: '#B2FFFF',
  },
});
