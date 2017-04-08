import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#DDBDD5"
  },
  appTitle: {
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "IndieFlower",
    fontWeight: "bold",
    marginBottom: 20,
  },
  mochi: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginBottom: 5,
    color: "#FFFFFF",
    fontSize: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "#FFFFFF"
  },
  separatorSubmit: {
    marginTop: 20,
    marginBottom: 20
  },
  submit: {
    backgroundColor: '#CE7DA5',
    paddingLeft: 30,
    paddingRight: 30,
  },
  submitText: {
    fontFamily: "IndieFlower",
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  errors: {
    height: 30,
    color: 'red',
    padding: 10,
  }
});
