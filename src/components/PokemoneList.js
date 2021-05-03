import React from "react";
import styled from "styled-components";
import All_Pokemon from "./data";
import Pokemon from "./Pokemon";
export default function PokemoneList() {
  return (
    <PList>
      {All_Pokemon.map((listItem) => {
        return (
          <Pokemon
            key={listItem.name}
            name={listItem.name}
            weight={listItem.weight}
            terrifying={listItem.terrifying}
            awesome={listItem.awesome}
            abilities={listItem.abilities}
          />
        );
      })}
    </PList>
  );
}

const PList = styled.div`
  margin: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size:2rem;
 
`;
