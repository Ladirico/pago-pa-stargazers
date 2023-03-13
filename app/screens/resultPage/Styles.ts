import {Dimensions, StyleSheet} from 'react-native';

const screen = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
  },
  containerSelect: {
    width: '100%',
    alignItems: 'center',
  },
  wrapperSpinner: {
    height: screen.height,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownBtnStyle: {
    width: '70%',
    height: 50,
    textAlign: 'center',
    backgroundColor: '#f6f8fa',
    borderColor: '#d0d7de',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropdownBtnTxtStyle: {color: '#000000', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#f6f8fa'},
  dropdownRowStyle: {backgroundColor: '#f6f8fa', borderBottomColor: '#000000'},
  dropdownRowTxtStyle: {color: '#000000', textAlign: 'center'},
});
