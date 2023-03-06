import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const SecondPage = ({ route, navigation }) => {
  const { name, email, logincount, loginHistory } = route.params;

  const handleLogout = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {name}!</Text>
      <Text style={styles.subtitle}>You have logged in {logincount} times.</Text>
      <ScrollView style={styles.historyContainer}>
        {loginHistory.map((logininfo, index) => (
          <Text key={index} style={styles.loginItem}>
            Logged in at: {logininfo}
          </Text>
        ))}
      </ScrollView>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  historyContainer: {
    marginVertical: 20,
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    width:300,
  },
  loginItem: {
    fontSize: 14,
    marginVertical: 5,
  },
});

export default SecondPage;

