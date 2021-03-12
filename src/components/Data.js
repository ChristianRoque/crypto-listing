import { useObserver } from "mobx-react-lite";
import StoreContext, { useStore } from "../StoreContext";
import React, { Component, useEffect } from "react";

export const Data = () => {
  const coinsStore = useStore();

  useEffect(() => {
    coinsStore.updateCoins();
  }, coinsStore.rendered);

  return useObserver(() => (
    <ul>
      {coinsStore.coins.map((coin) => (
        <li key={coin.name}>{coin.name}</li>
      ))}
    </ul>
  ));
};
