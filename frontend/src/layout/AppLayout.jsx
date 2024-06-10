import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomNavigation, useTheme} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppLayout = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    profile: ProfileScreen,
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{backgroundColor: theme.colors.primary}}
        renderIcon={({route, focused, color}) => (
          <Icon name={route.icon} size={24} color={color} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppLayout;
