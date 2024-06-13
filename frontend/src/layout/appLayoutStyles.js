import {StyleSheet} from 'react-native';

const appLayoutStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    bottomNavigation: {
      height: 70,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'rgb(51,51,51)',
      margin: 20,
      borderRadius: 12,
      elevation: 5, // Adds shadow for Android
      shadowColor: '#000', // Adds shadow for iOS
      shadowOffset: {width: 0, height: 2}, // Adds shadow for iOS
      shadowOpacity: 0.2, // Adds shadow for iOS
      shadowRadius: 5, // Adds shadow for iOS
      overflow: 'hidden', // Ensure the corners are rounded
    },
    activeIndicatorStyle: {
      backgroundColor: 'white',
      padding: 24,
      borderRadius: 10,
    },
  });
  
  export default appLayoutStyles;