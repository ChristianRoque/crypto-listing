import React, { Component } from "react";
import { useStore } from "../StoreContext";
import styled from "styled-components";

const Main = styled.div`
  padding: 2.5%;
`;

const AddCoin = () => {
  const coinsStore = useStore();
  const [coin, setCoin] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        coinsStore.trackNewCoin(coin);
        coinsStore.updateCoins();
        e.preventDefault();
      }}
    >
      <input
        value={coin}
        onChange={(e) => {
          setCoin(e.target.value);
          coinsStore.updateCoins();
        }}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default class Settings extends Component {
  render() {
    return (
      <Main>
        <AddCoin></AddCoin>
      </Main>
    );
  }
}
