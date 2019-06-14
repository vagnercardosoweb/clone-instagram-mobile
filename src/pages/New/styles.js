import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  buttonImage: {
    borderWidth: 1,
    borderColor: '#dddddd',
    borderStyle: 'dashed',
    borderRadius: 5,
    padding: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonImageText: {
    fontSize: 16,
    color: '#666666',
  },

  preview: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
  },

  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 10,
    marginTop: 10,
    fontSize: 16,
  },

  buttonSubmit: {
    padding: 10,
    backgroundColor: '#7159c1',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonSubmitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
