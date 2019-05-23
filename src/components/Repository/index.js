import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  RefreshButton,
  RefreshText
} from "./styles";

export default function Repository({ data, onRefresh }) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <RefreshButton onPress={onRefresh}>
        <Icon name="refresh" color="#7159C1" size={16} />
        <RefreshText>Refresh</RefreshText>
      </RefreshButton>
    </Container>
  );
}
