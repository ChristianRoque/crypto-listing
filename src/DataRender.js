import { useObserver } from "mobx-react-lite";
import React, { Component } from "react";
import { useStore } from "./StoreContext";

const Data = () => {
  const coinsStore = useStore();
  coinsStore.updateCoins();

  let coins = coinsStore.coins;

  return useObserver(() => (
    <ul>
      {coins.map((coin) => (
        <li key={coin.name}> {coin.name} </li>
      ))}
    </ul>
  ));
};

export default class DataRender extends Component {
  render() {
    return (
      <div>
        <Data></Data>
      </div>
    );
  }
}
