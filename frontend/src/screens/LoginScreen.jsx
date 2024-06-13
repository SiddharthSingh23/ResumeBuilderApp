import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './authStyles';
import {loginUser} from '../services/api';

const LoginScreen = ({navigation}) => {
  const theme = useTheme();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };

  const handleChange = (name, newVal) => {
    setFormValues(prev => ({...prev, [name]: newVal}));
  };

  // Handle login logic here
  const handleLogin = async () => {
    try {
      const response = await loginUser(formValues);
      if (response?.status === 'SUCCESS') {
        await AsyncStorage.setItem('userToken', response?.data);
        navigation.replace('App');
      } else {
        alert(response?.message);
      }
    } catch (error) {
      alert('Failed to Login User !');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            styles.container,
            {backgroundColor: theme.colors.background},
          ]}>
          <Image
            source={require('../../public/logo/transparent-full.png')}
            style={styles.logo}
          />
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              placeholder="Email"
              label="Email"
              value={formValues.email}
              onChangeText={newVal => handleChange('email', newVal)}
              style={styles.input}
              outlineStyle={styles.outlineInput}
            />
            <TextInput
              mode="outlined"
              placeholder="Password"
              label="Password"
              value={formValues.password}
              onChangeText={newVal => handleChange('password', newVal)}
              secureTextEntry
              style={styles.input}
              outlineStyle={styles.outlineInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}>
              Login
            </Button>
            <TouchableOpacity onPress={handleRegisterNavigation}>
              <Text style={styles.registerText}>
                Don't have an account? Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
