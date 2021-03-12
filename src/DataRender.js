import { useObserver } from "mobx-react-lite";
import React, { Component } from "react";
import { useStore } from "./StoreContext";

const Data = () => {
  const coinsStore = useStore();
  coinsStore.updateCoins();

  return useObserver(() => (
    <p>
      {coinsStore.coins.map((coin) => (
        <p id={coin.name}>{coin.name}</p>
      ))}
    </p>
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
