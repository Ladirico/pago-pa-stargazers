import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
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
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 40,
    marginTop: 40,
  },
});
