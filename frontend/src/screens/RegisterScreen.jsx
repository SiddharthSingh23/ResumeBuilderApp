import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import {createUser} from '../services/api';
import styles from './authStyles';

const RegisterScreen = ({navigation}) => {
  const theme = useTheme();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  const handleChange = (name, newVal) => {
    setFormValues(prev => ({...prev, [name]: newVal}));
  };

  // Handle register logic here
  const handleRegister = async () => {
    try {
      const res = await createUser(formValues);
      console.log("⚙️  | res :", res);
      alert('User Created!');
      navigation.navigate('Login');
    } catch (error) {
      console.log("⚙️  | error :", error);
      alert('Failed to Create User!');
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
              placeholder="Name"
              label="Name"
              value={formValues.fullName}
              onChangeText={newVal => handleChange('fullName', newVal)}
              style={styles.input}
              outlineStyle={styles.outlineInput}
            />
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
            <TextInput
              mode="outlined"
              placeholder="Confirm Password"
              label="Confirm Password"
              value={formValues.confirmPassword}
              onChangeText={newVal => handleChange('confirmPassword', newVal)}
              secureTextEntry
              style={styles.input}
              outlineStyle={styles.outlineInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.button}>
              Register
            </Button>
            <TouchableOpacity onPress={handleLoginNavigation}>
              <Text style={styles.registerText}>Have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
