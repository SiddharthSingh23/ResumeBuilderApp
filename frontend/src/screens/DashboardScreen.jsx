import React from 'react';
import {View, Text} from 'react-native';
import {Button, Card, Title, Paragraph, Divider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './authStyles';

const DashboardScreen = ({navigation}) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Welcome to the Dashboard!</Title>
          <Paragraph>This is your dashboard content.</Paragraph>
        </Card.Content>
      </Card>
      <Divider style={{marginVertical: 10}} />
      <Button mode="contained" onPress={handleLogout}>
        Logout
      </Button>
    </View>
  );
};

export default DashboardScreen;
