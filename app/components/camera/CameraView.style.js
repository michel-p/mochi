import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  webview: {
    flex: 1,
  },
  feedbackContainer: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  feedback: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4FAFF',
    fontFamily: "IndieFlower",
    backgroundColor: 'transparent',
  }
});
