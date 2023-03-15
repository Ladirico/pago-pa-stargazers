import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    textAlign: 'center',
    height: 50,
    backgroundColor: '#f6f8fa',
    borderColor: '#d0d7de',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  container_button: {
    paddingTop: 40,
  },
  button: {
    backgroundColor: '#2da44e',
    borderRadius: 6,
    width: 130,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  button_text: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    lineHeight: 20,
  },
});
