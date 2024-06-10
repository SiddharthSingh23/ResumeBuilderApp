import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, User!</Text>
      <Avatar.Icon size={150} icon="account-circle" style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    marginTop: 20,
  },
});

export default HomeScreen;
