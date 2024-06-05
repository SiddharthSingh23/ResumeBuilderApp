import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button } from 'react-native';
import { createUser } from './src/services/api';

const Stack = createStackNavigator();

const StepOne = ({ navigation, formData, setFormData }) => (
  <View>
    <Text>Name:</Text>
    <TextInput
      value={formData.name}
      onChangeText={(text) => setFormData({ ...formData, name: text })}
    />
    <Button title="Next" onPress={() => navigation.navigate('StepTwo')} />
  </View>
);

const StepTwo = ({ navigation, formData, setFormData }) => (
  <View>
    <Text>Phone:</Text>
    <TextInput
      value={formData.phone}
      onChangeText={(text) => setFormData({ ...formData, phone: text })}
    />
    <Button title="Next" onPress={() => navigation.navigate('StepThree')} />
  </View>
);

const StepThree = ({ formData, setFormData }) => (
  <View>
    <Text>Address:</Text>
    <TextInput
      value={formData.address}
      onChangeText={(text) => setFormData({ ...formData, address: text })}
    />
    <Button title="Submit" onPress={async () => {
      await createUser(formData);
      alert('User created');
    }} />
  </View>
);

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    experience: '',
    projects: '',
    education: '',
    skills: ''
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StepOne">
        <Stack.Screen name="StepOne">
          {(props) => <StepOne {...props} formData={formData} setFormData={setFormData} />}
        </Stack.Screen>
        <Stack.Screen name="StepTwo">
          {(props) => <StepTwo {...props} formData={formData} setFormData={setFormData} />}
        </Stack.Screen>
        <Stack.Screen name="StepThree">
          {(props) => <StepThree {...props} formData={formData} setFormData={setFormData} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
