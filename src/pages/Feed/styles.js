import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  feed: {
    marginTop: 20,
  },

  feedImage: {
    width: '100%',
    height: 380,
    marginVertical: 20,
  },

  header: {
    paddingHorizontal: 20,

    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  author: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  place: {
    color: '#666666',
    fontSize: 13,
    marginTop: 3,
  },

  footer: {
    paddingHorizontal: 20,
  },

  actions: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  action: {
    marginRight: 15,
  },

  likes: {
    color: '#000000',
    fontWeight: 'bold',
  },

  description: {
    color: '#000000',
    fontSize: 13,
    marginTop: 3,
    lineHeight: 18,
  },

  hashtags: {
    color: '#7159c1',
    fontSize: 13,
    lineHeight: 18,
  },

  headerRight: {
    marginRight: 20,
  },

  noResult: {
    flex: 1,
    marginTop: 20,
  },

  noResultText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
