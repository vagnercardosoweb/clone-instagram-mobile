import React, { Component } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import io from 'socket.io-client';
import { backend } from '../../services/axios';

import styles from './styles';

import camera from '../../assets/camera.png';
import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate('New')}
      >
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    const response = await backend.get('/posts');
    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io(backend.defaults.baseURL);

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on('like', likePost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likePost._id ? likePost : post,
        ),
      });
    });
  };

  handleLike = id => {
    backend.post(`/posts/${id}/like`);
  };

  renderEmpty = () => {
    return (
      <View style={styles.noResult}>
        <Text style={styles.noResultText}>Não existe resultados.</Text>
      </View>
    );
  };

  render() {
    const { feed: data } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View style={styles.feed}>
              <View style={styles.header}>
                <View style={styles.user}>
                  <Text style={styles.author}>{item.author}</Text>
                  <Text style={styles.place}>{item.place}</Text>
                </View>

                <Image source={more} />
              </View>

              <Image
                style={styles.feedImage}
                source={{
                  uri: `http://192.168.0.1:3333/files/${item.image}`,
                }}
              />

              <View style={styles.footer}>
                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.action}
                    onPress={() => this.handleLike(item._id)}
                  >
                    <Image source={like} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={comment} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    );
  }
}
