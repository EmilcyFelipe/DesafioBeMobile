import React, { useEffect, useState } from "react";
import {
  Container,
  Main,
  Title,
  InputWrapper,
  Input,
  LabelWrapper,
  Separator,
} from "./styles";

import {
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
} from "react-native";

import CollaboratorCard from "../../components/CollaboratorCard";
import Header from "../../components/Header";

import Icon from "react-native-vector-icons/Octicons";

import api from "../../services/api";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState([]);
  const [listToRender, setListToRender] = useState(dataList);

  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("collaborators");
        setDataList(response.data);
        setLoadingData(false);
      } catch (err) {
        console.log(err.message);
      }
    }
    loadData();
  }, []);

  const lowerSearch = inputValue.toLowerCase();
  function matchSearch(item) {
    return (
      item.name.toLowerCase().startsWith(lowerSearch) ||
      item.role.toLowerCase().startsWith(lowerSearch) ||
      item.phoneNumber.toLowerCase().includes(lowerSearch)
    );
  }
  useEffect(() => {
    const filteredData = dataList.filter(matchSearch);
    setListToRender(filteredData);
  }, [inputValue, dataList]);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <Container>
        <Header />
        <Main>
          <Title>Funcionários</Title>
          <InputWrapper>
            <Input
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              placeholder="Pesquisar"
            />
            <Icon name="search" color="#f0f0f0" size={25} />
          </InputWrapper>
          {loadingData ? (
            <ActivityIndicator size="large" />
          ) : (
            <>
              <LabelWrapper>
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Foto
                </Text>
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Nome
                </Text>
                <Icon name="dot-fill" color="#fff" size={20} />
              </LabelWrapper>
              <FlatList
                data={listToRender}
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => <CollaboratorCard itemData={item} />}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
        </Main>
      </Container>
    </TouchableWithoutFeedback>
  );
}
