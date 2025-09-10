import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Button, Alert, Pressable } from 'react-native';

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validarEmail = (email) => {
    const regex = /\w+(@)\w+/;
    return regex.test(email);
  };

  // Campos válidos para habilitar botão
  const camposValidos = validarEmail(email) && senha.trim().length > 0;

  return (
    <View style= {styles.container}>
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
        <View style= {styles.buttonContainer}>
          <Button
            title= 'Login'
            onPress= {() => Alert.alert('Login realizado com sucesso!')}
            disabled= {!camposValidos}
          />
        </View>
        <View style= {styles.registerContainer}>
          <Text style= {styles.text}>Ainda não tem uma conta?
            <Pressable onPress= {() => Alert.alert('Tela de Registro em breve!')}>
              <Text style= {styles.link}> Registre-se! </Text>
            </Pressable>
          </Text>
        </View>
        <View style= {styles.registerContainer}>
          <Pressable onPress= {() => Alert.alert('Tela de Redefinição de Senha em breve!')}>
            <Text style= {styles.link}>Esqueci a senha</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16005B',
  },

  inputContainer: {
    marginTop: 10,
  },

  buttonContainer: {
    margin: 10,
  },

  registerContainer: {
    marginBottom: 10,
  },

  loginBox: {
    margin: 50,
    borderWidth: 3,
    borderColor: '#FFD800',
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#260099',
    width: '80%',
  },

  text: {
    color: '#FFFFFF',
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
