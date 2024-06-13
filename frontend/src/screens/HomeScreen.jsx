import React from 'react';
import {View, Text} from 'react-native';
import {IconButton, Card, useTheme, Title, Paragraph} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './homeScreenStyles';

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, User!</Text>
        <IconButton
          size={24}
          icon="logout"
          onPress={handleLogout}
          color={theme.colors.primary}
          style={styles.iconButton}
        />
      </View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Title>Create Your Resume</Title>
          <Paragraph>
            Start the process of creating a professional resume by entering your
            personal information.
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HomeScreen;
