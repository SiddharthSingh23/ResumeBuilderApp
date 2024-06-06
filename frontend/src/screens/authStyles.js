import {StyleSheet} from 'react-native';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  input: {
    width: '90%',
    marginBottom: 20,
  },
  outlineInput: {
    borderRadius: 15,
  },
  button: {
    width: '90%',
    padding: 5,
    borderRadius: 15,
  },
  registerText: {
    marginTop: 20,
    color: 'darkblue',
    textDecorationLine: 'underline',
  },
});

export default authStyles;
