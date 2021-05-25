import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
}

export default Header;
