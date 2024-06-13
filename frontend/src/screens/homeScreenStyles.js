import {StyleSheet} from 'react-native';

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    alignSelf: 'flex-end',
  },
  avatar: {
    marginVertical: 20,
  },
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgb(0,178,255)',
  },
  cardContent: {
    gap: 10,
  },
  iconButton: {
    backgroundColor: 'rgb(232,232,232)',
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default homeScreenStyles;
