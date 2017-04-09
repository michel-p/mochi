import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    padding: 40,
    marginTop: 20,
    backgroundColor: "#DDBDD5"
  },
  box: {
    flex: 1,
    alignItems: "center",
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
  keyboardAvoid: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#555555"
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
