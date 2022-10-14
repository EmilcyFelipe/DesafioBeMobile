import React from 'react';
import {Container, LogoWrapper, LogoImage} from './styles';
import {Text, Image} from 'react-native';
import Logo from '../../assets/logo.png';
export default function Header() {
  return (
    <Container>
      <LogoImage resizeMode="contain" source={Logo} />
    </Container>
  );
}
