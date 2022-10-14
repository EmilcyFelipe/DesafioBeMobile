import React, {useEffect, useState} from 'react';
import {
  Container,
  HeaderBanner,
  PictureWrapper,
  UserPicture,
  Name,
  Description,
  DescriptionItem,
  Label,
  Value,
} from './styles';

import Icons from 'react-native-vector-icons/AntDesign';

export default function CollaboratorCard({itemData}) {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState(itemData);

  useEffect(() => {
    setData(itemData);
  }, [itemData]);

  const [dateFormated, setDateFormated] = useState('--/--/----');
  const [phoneFormated, setPhoneFormated] = useState('+55 55 55555-555');

  useEffect(() => {
    function convertDateToFormat() {
      let day = new Date(data.launchDate).getDate();
      let month = new Date(data.launchDate).getMonth();
      let year = new Date(data.launchDate).getFullYear();
      setDateFormated(
        `${day < 10 ? '0' + day : day}/${
          month < 9 ? '0' + (month + 1) : month + 1
        }/${year}`,
      );
    }
    convertDateToFormat();
  }, []);

  useEffect(() => {
    function formatPhone(value) {
      const phoneMask = `+${value.slice(0, 2)} (${value.slice(
        2,
        4,
      )}) ${value.slice(4, 9)}-${value.slice(9, 13)} `;
      setPhoneFormated(phoneMask);
    }
    formatPhone(data.phoneNumber);
  }, []);

  return (
    <Container>
      <HeaderBanner
        onPress={() => {
          setOpened(!opened);
        }}>
        <PictureWrapper>
          <UserPicture source={{uri: data.imageUrl}} />
        </PictureWrapper>
        <Name>{data.name}</Name>
        <Icons name={opened ? 'up' : 'down'} size={20} color="#5984C0" />
      </HeaderBanner>
      {opened && (
        <Description>
          <DescriptionItem>
            <Label>Cargo</Label>
            <Value>{data.role}</Value>
          </DescriptionItem>
          <DescriptionItem>
            <Label>Data de admissão</Label>
            <Value>{dateFormated}</Value>
          </DescriptionItem>
          <DescriptionItem>
            <Label>Telefone</Label>
            <Value>{phoneFormated}</Value>
          </DescriptionItem>
        </Description>
      )}
    </Container>
  );
}
