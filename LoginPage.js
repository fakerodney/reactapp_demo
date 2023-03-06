import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [logincount, setlogincount] = useState(0);
  const [loginHistory, setLoginHistory] = useState([]);

  const handleLogin = () => {
    //login logic here, once clicked add the count and renew the time stamp
    const logininfo = new Date().toLocaleString();
    setlogincount(logincount + 1);
    setLoginHistory(loginHistory=>[...loginHistory,logininfo]);
    navigation.navigate('SecondPage', { name: username , email:email, logincount:logincount,loginHistory:loginHistory});
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setemail}
      />
      <Button title="Login" style={styles.loginButtonText} onPress={handleLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    inputContainer: {
      marginBottom: 50,
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 4,
      padding: 8,
      margin: 8,
      width: '80%',
      fontSize: 16,
    },
    loginButton: {
      borderWidth: 3,
      backgroundColor: '#007AFF',
      padding: 16,
      borderRadius: 4,
      padding: 8,
      margin: 8,
      borderRadius: 4,
    },
    loginButtonText: {
      borderWidth: 1,
      color: '#FFFFFF',
      borderRadius: 4,
      padding: 8,
      margin: 8,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default LoginPage;
