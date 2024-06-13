import React, {useState} from 'react';
import {View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './appLayoutStyles';

const AppLayout = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'home', icon: 'home'},
    {key: 'profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    profile: ProfileScreen,
  });

  const renderIcon = ({route, focused, color}) => {
    const iconColor = focused ? 'black' : 'white';
    return <Icon style name={route.icon} size={24} color={iconColor} />;
  };

  return (
    <View style={styles.container}>
      <BottomNavigation
        activeIndicatorStyle={styles.activeIndicatorStyle}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        barStyle={styles.bottomNavigation}
        activeColor="white"
        inactiveColor="white"
        labeled={false}
      />
    </View>
  );
};

export default AppLayout;
