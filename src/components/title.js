import React from "react";
import styled from "styled-components";

export default function title({ content }) {
  return (
    <TIT>
      <h1> {content}</h1>
    </TIT>
  );
}

const TIT = styled.div`
  margin: 2rem auto;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
`;
