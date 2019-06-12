import React from 'react';

import { Container, Text, Image } from './styles';

import logo from '../../assets/logo.png';

function Main() {
  return (
    <Container>
      <Text>Clone Instagram</Text>
    </Container>
  );
}

Main.navigationOptions = {
  headerTitle: <Image source={logo} />,
  headerTitleContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
};

export default Main;
