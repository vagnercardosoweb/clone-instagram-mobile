import React, { Component } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { backend } from '../../services/axios';

import styles from './styles';

export default class New extends Component {
  static navigationOptions = {
    headerTitle: 'Nova publicação',
  };

  state = {
    author: '',
    place: '',
    description: '',
    hashtags: '',
    image: null,
    preview: null,
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker({
      title: 'Selecionar imagem',
    }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const preview = { uri: `data:image/jpeg;base64,${response.data}` };
        const image = {
          uri: response.uri,
          type: 'image/jpg',
          name: `image-${Date.now()}.jpg`,
        };

        this.setState({ preview, image });
      }
    });
  };

  handleSubmit = async () => {
    try {
      const data = new FormData();

      data.append('image', this.state.image);
      data.append('author', this.state.author);
      data.append('place', this.state.place);
      data.append('description', this.state.description);
      data.append('hashtags', this.state.hashtags);

      await backend.post('/posts', data);

      this.props.navigation.navigate('Feed');
    } catch (e) {
      Alert.alert('Ops!', e.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonImage} onPress={this.handleSelectImage}>
          <Text style={styles.buttonImageText}>Selecionar imagem</Text>
        </TouchableOpacity>

        {this.state.preview && <Image style={styles.preview} source={this.state.preview} />}

        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Autor do post"
          placeholderTextColor="#999999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Local do post"
          placeholderTextColor="#999999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />

        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Descrição do post"
          placeholderTextColor="#999999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />

        <TextInput
          style={styles.textInput}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Hashtags"
          placeholderTextColor="#999999"
          value={this.state.hashtags}
          onChangeText={hashtags => this.setState({ hashtags })}
        />

        <TouchableOpacity style={styles.buttonSubmit} onPress={this.handleSubmit}>
          <Text style={styles.buttonSubmitText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
