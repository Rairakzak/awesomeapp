import styled from "styled-components";

export default function Pokemon(props) {
  return (
    <Pok>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities:</p>
      <ul>
        {props.abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </Pok>
  );
}
const Pok = styled.div`
  padding: 2rem;
  margin: 1rem;
  width: 30vw;
  min-height: max-content;
  border: 1px solid black;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 80vw;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-left: 1rem;
      list-style: none;
      color: #a54d;
      font-weight: 700;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
